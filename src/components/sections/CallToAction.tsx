import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, UserPlus, Building, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { CTA_CONTENT } from '../../data/content';
import { useDonate } from '../../context/DonateContext';
import { useToast } from '../../context/ToastContext';

type TabKey = 'donor' | 'volunteer' | 'partner';

export const CallToAction: React.FC = () => {
  const { openModal } = useDonate();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<TabKey>('donor');
  const [volunteerEmail, setVolunteerEmail] = useState('');

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerEmail || !volunteerEmail.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast(`Thank you! Volunteer welcome kit sent to ${volunteerEmail}`, 'success');
    setVolunteerEmail('');
  };

  const tabs = [
    { id: 'donor', label: 'Food Donors', icon: HeartHandshake },
    { id: 'volunteer', label: 'Volunteers', icon: UserPlus },
    { id: 'partner', label: 'Partner NGOs', icon: Building },
  ] as const;

  return (
    <Section id="cta" variant="forest" className="pt-24 pb-32 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron-400 bg-saffron-500/15 border border-saffron-400/30 px-3.5 py-1.5 rounded-full">
            Take Action Today
          </span>
        </div>

        {/* H2 Headline with Bridge Underline */}
        <div className="relative inline-block mb-4">
          <h2
            id="cta-heading"
            className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight"
          >
            {CTA_CONTENT.heading}
          </h2>
          {/* Bridge Line Landing Underline */}
          <svg
            className="w-full h-4 mt-2 overflow-visible"
            viewBox="0 0 500 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 10 12 Q 250 2 490 12"
              stroke="#F5A524"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="text-sm sm:text-base text-cream-50/80 max-w-xl mx-auto leading-relaxed mb-10 font-sans font-normal">
          {CTA_CONTENT.subheading}
        </p>

        {/* Apple-style Segmented Control */}
        <div className="inline-flex p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 mb-8 shadow-inner">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-forest-900 bg-white shadow-md'
                    : 'text-cream-50/80 hover:text-cream-50 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Frosted Card for Selected Role */}
        <div className="apple-glass-dark rounded-4xl p-8 sm:p-12 border border-white/15 shadow-2xl text-left max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'donor' && (
              <motion.div
                key="donor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-cream-50">
                      Donate Food in 60 Seconds
                    </h3>
                    <p className="text-sm text-cream-50/80 mt-1">
                      Restaurants, caterers, hotel banquets, and households.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-cream-50/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf-400 flex-shrink-0" />
                    <span>Free for donors</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-cream-50/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf-400 flex-shrink-0" />
                    <span>Hygienic pickup</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-cream-50/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf-400 flex-shrink-0" />
                    <span>Verified NGO match</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => openModal()}
                    className="w-full flex items-center justify-center gap-2 font-bold shadow-lg shadow-saffron-500/25 btn-shine !rounded-full !py-4 text-base"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Launch Food Donation Form</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === 'volunteer' && (
              <motion.div
                key="volunteer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-cream-50">
                      Join as a Volunteer Courier
                    </h3>
                    <p className="text-sm text-cream-50/80 mt-1">
                      Flexible 1-2 hour shifts on weekends in your neighborhood.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-leaf-500/20 text-leaf-400 flex items-center justify-center flex-shrink-0">
                    <UserPlus className="w-6 h-6" />
                  </div>
                </div>

                <form onSubmit={handleVolunteerSubmit} className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={volunteerEmail}
                      onChange={(e) => setVolunteerEmail(e.target.value)}
                      required
                      className="flex-1 px-5 py-3.5 rounded-full text-sm text-forest-900 bg-white placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                    />
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      className="btn-shine !rounded-full !px-6 whitespace-nowrap font-bold"
                    >
                      Get Volunteer Kit
                    </Button>
                  </div>
                </form>

                <p className="text-xs text-cream-50/60">
                  Over 1,800 active volunteers across 14 cities. Zero strict commitments.
                </p>
              </motion.div>
            )}

            {activeTab === 'partner' && (
              <motion.div
                key="partner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-cream-50">
                      Register Your Kitchen / Shelter
                    </h3>
                    <p className="text-sm text-cream-50/80 mt-1">
                      Receive scheduled, free food surplus matching your daily feeding capacity.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3">
                  <p className="text-xs text-cream-50/90 leading-relaxed">
                    We partner with certified community kitchens, night shelters, elder care homes, and orphanages. Free cold-chain transport provided.
                  </p>
                  <a
                    href="mailto:partner@mealmate.example?subject=NGO%20Partnership%20Registration"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-saffron-500 text-forest-900 font-bold hover:bg-saffron-400 transition-colors btn-shine text-sm shadow-md"
                  >
                    <span>Connect with Partner Verification Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
