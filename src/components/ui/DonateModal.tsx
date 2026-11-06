import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft, HeartHandshake, ShieldCheck, Share2 } from 'lucide-react';
import { Button } from './Button';
import { Field } from './Field';
import { useDonate } from '../../context/DonateContext';
import { useToast } from '../../context/ToastContext';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { validateStep1, validateStep2, validateStep3, type ValidationErrors } from '../../lib/validators';
import { calculateMeals } from '../../lib/calc';

const DONOR_TYPES = ['Restaurant', 'Hotel', 'Event Banquet', 'Household / Bakery'];
const FOOD_TYPES = ['Cooked meals', 'Bakery / Bread', 'Fruit & veg', 'Packaged goods'];
const PICKUP_WINDOWS = [
  'Within 1 hour',
  'Tonight (8:00 PM – 10:00 PM)',
  'Tomorrow morning (8:00 AM – 10:00 AM)',
];

export const DonateModal: React.FC = () => {
  const { isOpen, step, formValues, closeModal, setStep, updateFormValues } = useDonate();
  const { showToast } = useToast();
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useFocusTrap(isOpen, closeModal);

  if (!isOpen) return null;

  const handleFoodTypeToggle = (type: string) => {
    const current = formValues.foodTypes;
    if (current.includes(type)) {
      if (current.length > 1) {
        updateFormValues({ foodTypes: current.filter((t) => t !== type) });
      }
    } else {
      updateFormValues({ foodTypes: [...current, type] });
    }
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep1(formValues);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep2(formValues);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check
    if (formValues.honeypot && formValues.honeypot.trim() !== '') {
      closeModal();
      return;
    }

    const errs = validateStep3(formValues);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulated 900 ms latency as specified in SRS FR-CTA-04
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
      showToast(`Donation scheduled! Pickup set for ${formValues.pickupWindow}`, 'success');
    }, 900);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MealMate Donation',
        text: `I just scheduled a food rescue of ${formValues.quantity} ${formValues.quantityUnit} via MealMate!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Link copied to clipboard!', 'info');
    }
  };

  const estimatedMeals =
    formValues.quantityUnit === 'kg'
      ? calculateMeals(formValues.quantity)
      : formValues.quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-forest-900/60 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal Dialog Shell (Apple / Oppo Sheet Style) */}
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-dialog-title"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg apple-glass !bg-white/95 !backdrop-blur-3xl rounded-4xl border border-white/80 shadow-modal p-7 sm:p-9 z-10 text-forest-900 overflow-hidden"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close donation modal"
          className="absolute top-5 right-5 p-2 rounded-full text-forest-900 hover:bg-forest-900/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Step Indicator (hidden on success) */}
        {step < 4 && (
          <div className="mb-6 pb-4 border-b border-forest-900/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-full bg-saffron-500/20 text-forest-900">
                <HeartHandshake className="w-4 h-4 text-saffron-600" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">
                List Food Surplus
              </span>
            </div>

            <h2 id="donate-dialog-title" className="font-serif-display text-2xl sm:text-3xl font-bold text-forest-900">
              {step === 1 && 'What are you donating?'}
              {step === 2 && 'When & where is pickup?'}
              {step === 3 && 'How do we reach you?'}
            </h2>

            {/* Step Progress Dots */}
            <div className="flex items-center gap-2 mt-4" aria-label={`Step ${step} of 3`}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? 'w-10 bg-saffron-500'
                      : s < step
                      ? 'w-6 bg-forest-900'
                      : 'w-6 bg-forest-900/20'
                  }`}
                />
              ))}
              <span className="text-xs text-ink-600 ml-auto font-medium">Step {step} of 3</span>
            </div>
          </div>
        )}

        {/* STEP 1: What */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} className="space-y-5 text-left">
            {/* Donor Type */}
            <div>
              <label className="text-sm font-semibold text-forest-900 block mb-2">
                I am donating as:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DONOR_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFormValues({ donorType: type })}
                    className={`py-2 px-3 rounded-sm text-xs font-bold transition-all border text-left ${
                      formValues.donorType === type
                        ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                        : 'bg-white text-forest-900 border-forest-900/20 hover:border-forest-900/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.donorType && (
                <p className="text-xs text-tomato-600 mt-1">{errors.donorType}</p>
              )}
            </div>

            {/* Food Type Chips */}
            <div>
              <label className="text-sm font-semibold text-forest-900 block mb-2">
                Type of surplus food:
              </label>
              <div className="flex flex-wrap gap-2">
                {FOOD_TYPES.map((food) => {
                  const isSelected = formValues.foodTypes.includes(food);
                  return (
                    <button
                      key={food}
                      type="button"
                      onClick={() => handleFoodTypeToggle(food)}
                      className={`px-3 py-1.5 rounded-pill text-xs font-bold transition-all border flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-saffron-500 text-forest-900 border-saffron-500 shadow-sm'
                          : 'bg-white text-forest-900 border-forest-900/20 hover:border-forest-900/40'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                      <span>{food}</span>
                    </button>
                  );
                })}
              </div>
              {errors.foodTypes && (
                <p className="text-xs text-tomato-600 mt-1">{errors.foodTypes}</p>
              )}
            </div>

            {/* Quantity + Unit Toggle */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="quantity-input" className="text-sm font-semibold text-forest-900">
                  Approximate Quantity:
                </label>
                <div className="flex items-center bg-forest-900/10 rounded-pill p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => updateFormValues({ quantityUnit: 'kg' })}
                    className={`px-2.5 py-0.5 rounded-pill transition-colors ${
                      formValues.quantityUnit === 'kg'
                        ? 'bg-forest-900 text-cream-50'
                        : 'text-forest-900'
                    }`}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFormValues({ quantityUnit: 'meals' })}
                    className={`px-2.5 py-0.5 rounded-pill transition-colors ${
                      formValues.quantityUnit === 'meals'
                        ? 'bg-forest-900 text-cream-50'
                        : 'text-forest-900'
                    }`}
                  >
                    meals
                  </button>
                </div>
              </div>

              <Field
                id="quantity-input"
                label=""
                type="number"
                min="1"
                max="5000"
                value={formValues.quantity}
                onChange={(e) => updateFormValues({ quantity: Number(e.target.value) })}
                error={errors.quantity}
                helperText={`Feeds approximately ${estimatedMeals} people with balanced warm meals.`}
              />
            </div>

            <Button variant="primary" size="lg" type="submit" className="w-full font-bold">
              <span>Continue to Pickup Details</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        )}

        {/* STEP 2: When & Where */}
        {step === 2 && (
          <form onSubmit={handleNextStep2} className="space-y-5 text-left">
            <div>
              <label className="text-sm font-semibold text-forest-900 block mb-2">
                Pickup Window:
              </label>
              <div className="space-y-2">
                {PICKUP_WINDOWS.map((win) => (
                  <button
                    key={win}
                    type="button"
                    onClick={() => updateFormValues({ pickupWindow: win })}
                    className={`w-full py-2.5 px-3.5 rounded-sm text-xs font-bold transition-all border text-left flex items-center justify-between ${
                      formValues.pickupWindow === win
                        ? 'bg-forest-900 text-cream-50 border-forest-900 shadow-sm'
                        : 'bg-white text-forest-900 border-forest-900/20 hover:border-forest-900/40'
                    }`}
                  >
                    <span>{win}</span>
                    {formValues.pickupWindow === win && <Check className="w-4 h-4 text-saffron-400" />}
                  </button>
                ))}
              </div>
              {errors.pickupWindow && (
                <p className="text-xs text-tomato-600 mt-1">{errors.pickupWindow}</p>
              )}
            </div>

            <Field
              label="City / Area Neighborhood"
              placeholder="e.g. Koramangala 4th Block, Bengaluru"
              value={formValues.cityArea}
              onChange={(e) => updateFormValues({ cityArea: e.target.value })}
              error={errors.cityArea}
              helperText="Nearest verified shelter or kitchen will be notified."
              required
            />

            <Field
              label="Special Handling / Packaging Notes (Optional)"
              placeholder="e.g. In insulated food warmers, need large plastic bags"
              value={formValues.notes || ''}
              onChange={(e) => updateFormValues({ notes: e.target.value })}
            />

            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="md"
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </Button>
              <Button variant="primary" size="md" type="submit" className="w-2/3 font-bold">
                <span>Continue to Contact</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </form>
        )}

        {/* STEP 3: Contact */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {/* Honeypot field for bot protection */}
            <input
              type="text"
              name="website_hp"
              value={formValues.honeypot || ''}
              onChange={(e) => updateFormValues({ honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Field
              label="Your Name or Business Contact"
              placeholder="e.g. Meera Nair"
              value={formValues.name}
              onChange={(e) => updateFormValues({ name: e.target.value })}
              error={errors.name}
              required
            />

            <Field
              label="Phone Number or Email"
              placeholder="e.g. +91 98765 43210 or chef@restaurant.com"
              value={formValues.contact}
              onChange={(e) => updateFormValues({ contact: e.target.value })}
              error={errors.contact}
              helperText="We will call to confirm pickup. No spam, ever."
              required
            />

            <div className="p-3.5 rounded-sm bg-sage-100 text-xs text-forest-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
              <span>
                By submitting, a volunteer dispatcher will coordinate insulated food transport for your scheduled window.
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="md"
                type="button"
                onClick={() => setStep(2)}
                disabled={isSubmitting}
                className="w-1/3"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </Button>
              <Button
                variant="primary"
                size="md"
                type="submit"
                isLoading={isSubmitting}
                className="w-2/3 font-bold shadow-md"
              >
                <span>Submit Food Rescue</span>
              </Button>
            </div>
          </form>
        )}

        {/* STEP 4: Success State (Personalized outcome & tick animation) */}
        {step === 4 && (
          <div className="text-center py-4">
            {/* Animated Tick on the Bridge Line */}
            <div className="w-20 h-20 rounded-full bg-saffron-500/20 text-forest-900 mx-auto flex items-center justify-center mb-6 relative">
              <svg className="w-16 h-16" viewBox="0 0 60 60" fill="none">
                <path
                  d="M 10 38 Q 30 18 50 38"
                  stroke="#F5A524"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="28" r="14" fill="#0B3B2E" />
                <motion.path
                  d="M24 28 L28 32 L36 24"
                  stroke="#FFF7E8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </svg>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-forest-900 mb-2">
              Surplus Listed Successfully!
            </h2>

            <p className="text-sm sm:text-base text-ink-700 max-w-sm mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-forest-900">{formValues.name || 'Friend'}</strong>. Pickup is set for{' '}
              <strong className="text-saffron-600">{formValues.pickupWindow}</strong>. A verified NGO will reach you shortly at{' '}
              <span className="font-medium text-forest-900">{formValues.cityArea}</span>.
            </p>

            <div className="p-4 rounded-card bg-white border border-forest-900/10 mb-8 max-w-xs mx-auto text-xs text-ink-600 text-left space-y-1.5 shadow-sm">
              <div className="flex justify-between">
                <span>Estimated Meals:</span>
                <strong className="text-forest-900">{estimatedMeals} portions</strong>
              </div>
              <div className="flex justify-between">
                <span>Food Category:</span>
                <strong className="text-forest-900">{formValues.foodTypes.join(', ')}</strong>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-leaf-600 font-bold">Dispatched to Shelters</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={closeModal}
                className="w-full sm:w-auto px-8 font-bold"
              >
                <span>Done</span>
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={handleShare}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Impact</span>
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
