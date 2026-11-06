import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Sprout, Wind, Building, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { IMPACT_METRICS, MONTHLY_IMPACT_HISTORY } from '../../data/stats';
import { calculateMeals, calculateCO2e, formatNumberIN } from '../../lib/calc';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import { useDonate } from '../../context/DonateContext';

export const Impact: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, triggerOnce: true });
  const { openModal } = useDonate();

  // Calculator State
  const [calculatorKg, setCalculatorKg] = useState<number>(25);

  const calculatedMeals = calculateMeals(calculatorKg);
  const calculatedCO2e = calculateCO2e(calculatorKg);

  // Animated Count Ups for the 5 Metric Tiles
  const mealsCount = useCountUp({ end: IMPACT_METRICS.meals, duration: 1500, trigger: isInView });
  const tonnesCount = useCountUp({ end: IMPACT_METRICS.tonnesSaved, duration: 1400, decimals: 1, trigger: isInView });
  const co2eCount = useCountUp({ end: IMPACT_METRICS.co2eTonnes, duration: 1400, decimals: 1, trigger: isInView });
  const ngosCount = useCountUp({ end: IMPACT_METRICS.ngos, duration: 1200, trigger: isInView });
  const volunteersCount = useCountUp({ end: IMPACT_METRICS.volunteers, duration: 1500, trigger: isInView });

  const maxMonthlyMeals = Math.max(...MONTHLY_IMPACT_HISTORY.map((m) => m.meals));

  return (
    <Section id="impact" variant="forest">
      <div ref={ref}>
        {/* Header with Sample Pilot Data Chip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-saffron-400">
                Verified Collective Action
              </span>
              <Chip variant="saffron" size="sm" className="bg-saffron-500/20 text-saffron-300 border-saffron-400/40">
                Sample pilot data
              </Chip>
            </div>
            <h2
              id="impact-heading"
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tracking-tight leading-tight mb-3"
            >
              Every kilogram counts.
            </h2>
            <p className="text-sm sm:text-base text-cream-50/80 leading-relaxed font-sans">
              Measurable ecological relief and hunger alleviation generated across partner kitchens in Bengaluru.
            </p>
          </div>
        </div>

        {/* 5 Count-up Metric Tiles Grid (Apple Fitness / Keynote Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 text-left">
          {/* Tile 1: Meals Rescued */}
          <div className="p-6 rounded-3xl apple-glass-dark border border-white/10 shadow-lg hover:border-saffron-400/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 text-saffron-400">
              <span className="w-9 h-9 rounded-xl bg-saffron-500/20 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cream-50/60 font-mono">Meals</span>
            </div>
            <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-saffron-400 tabular-nums">
              {formatNumberIN(mealsCount)}+
            </div>
            <p className="text-xs text-cream-50/70 mt-2 font-medium">Meals safely served</p>
          </div>

          {/* Tile 2: Food Rescued */}
          <div className="p-6 rounded-3xl apple-glass-dark border border-white/10 shadow-lg hover:border-leaf-400/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 text-leaf-400">
              <span className="w-9 h-9 rounded-xl bg-leaf-500/20 flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cream-50/60 font-mono">Diverted</span>
            </div>
            <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tabular-nums">
              {tonnesCount} <span className="text-lg font-sans text-leaf-400 font-semibold">t</span>
            </div>
            <p className="text-xs text-cream-50/70 mt-2 font-medium">Surplus saved from landfill</p>
          </div>

          {/* Tile 3: Carbon Avoided */}
          <div className="p-6 rounded-3xl apple-glass-dark border border-white/10 shadow-lg hover:border-leaf-400/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 text-leaf-400">
              <span className="w-9 h-9 rounded-xl bg-leaf-500/20 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cream-50/60 font-mono">Emissions</span>
            </div>
            <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tabular-nums">
              {co2eCount} <span className="text-lg font-sans text-leaf-400 font-semibold">t CO₂e</span>
            </div>
            <p className="text-xs text-cream-50/70 mt-2 font-medium">Greenhouse gas prevented</p>
          </div>

          {/* Tile 4: NGO Partners */}
          <div className="p-6 rounded-3xl apple-glass-dark border border-white/10 shadow-lg hover:border-saffron-400/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 text-saffron-400">
              <span className="w-9 h-9 rounded-xl bg-saffron-500/20 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cream-50/60 font-mono">Network</span>
            </div>
            <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tabular-nums">
              {ngosCount}
            </div>
            <p className="text-xs text-cream-50/70 mt-2 font-medium">Vetted kitchens & shelters</p>
          </div>

          {/* Tile 5: Active Volunteers */}
          <div className="p-6 rounded-3xl apple-glass-dark border border-white/10 shadow-lg hover:border-leaf-400/40 hover:-translate-y-1 transition-all duration-300 col-span-2 md:col-span-1">
            <div className="flex items-center justify-between mb-3 text-leaf-400">
              <span className="w-9 h-9 rounded-xl bg-leaf-500/20 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cream-50/60 font-mono">People</span>
            </div>
            <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tabular-nums">
              {formatNumberIN(volunteersCount)}+
            </div>
            <p className="text-xs text-cream-50/70 mt-2 font-medium">Active food couriers</p>
          </div>
        </div>

        {/* Graphical Section: Two Visualisations (Progress Ring + Bar Sparkline) & Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Charts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visualisation 1: Verification Progress Ring */}
            <div className="p-7 rounded-3xl apple-glass-dark border border-white/10 flex items-center justify-between gap-5">
              <div>
                <span className="text-[10px] font-bold text-saffron-400 uppercase tracking-widest bg-saffron-500/10 px-2.5 py-1 rounded-full">
                  Quality & Safety Guarantee
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-cream-50 mt-2.5 mb-1.5">
                  96% Safe Handoff Rate
                </h3>
                <p className="text-xs text-cream-50/70 max-w-[220px]">
                  Meals inspected against food temperature hygiene checklist upon handover.
                </p>
              </div>

              {/* SVG Circular Progress Ring */}
              <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" stroke="#14604A" strokeWidth="8" fill="none" opacity="0.5" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F5A524"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={isInView ? { strokeDashoffset: 251.2 * (1 - 0.96) } : {}}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    fill="none"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-bold text-xl text-cream-50 font-serif-display">96%</span>
                  <span className="text-[9px] text-saffron-400 font-bold uppercase tracking-wider">Passed</span>
                </div>
              </div>
            </div>

            {/* Visualisation 2: Monthly Growth Bar Chart */}
            <div className="p-7 rounded-3xl apple-glass-dark border border-white/10 flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold text-saffron-400 uppercase tracking-widest bg-saffron-500/10 px-2.5 py-1 rounded-full">
                    Monthly Rescues Growth
                  </span>
                  <h4 className="text-sm font-bold text-cream-50 mt-2">Meals Rescued by Month</h4>
                </div>
                <span className="text-xs text-leaf-400 font-semibold bg-leaf-500/10 px-2.5 py-1 rounded-full">+460% since June</span>
              </div>

              {/* Sparkline Bars */}
              <div className="flex items-end justify-between gap-3 h-28 pt-4 border-b border-forest-700/70 pb-2">
                {MONTHLY_IMPACT_HISTORY.map((item) => {
                  const heightPercent = Math.round((item.meals / maxMonthlyMeals) * 100);
                  return (
                    <div key={item.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="text-[10px] text-saffron-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {(item.meals / 1000).toFixed(1)}k
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${heightPercent}%` } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full max-w-[28px] bg-gradient-to-t from-saffron-500 to-saffron-400 rounded-t-lg group-hover:from-leaf-500 group-hover:to-leaf-400 transition-colors shadow-sm"
                      />
                      <span className="text-[11px] text-cream-50/70 font-semibold">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Interactive Meal Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-2xl text-ink-900 rounded-4xl p-7 sm:p-10 shadow-modal border border-white/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-500/10 px-3 py-1 rounded-full">
                  Interactive Impact Estimator
                </span>
                <span className="text-xs text-ink-600 bg-sage-100 px-3 py-1 rounded-full font-medium">
                  Formula: WRAP Standard
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-forest-900 mb-2 tracking-tight">
                How many meals can your surplus feed?
              </h3>
              <p className="text-sm text-ink-600 mb-6 font-normal">
                Drag the slider or choose a quick estimate to see real human and environmental equivalents.
              </p>

              {/* Quick Preset Chips */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-xs font-bold text-ink-700 mr-1">Quick picks:</span>
                {[10, 25, 50, 100, 200].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCalculatorKg(preset)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      calculatorKg === preset
                        ? 'bg-forest-900 text-cream-50 shadow-sm scale-105'
                        : 'bg-sage-100 text-forest-900 hover:bg-sage-200'
                    }`}
                  >
                    {preset} kg
                  </button>
                ))}
              </div>

              {/* Native Range Slider */}
              <div className="space-y-3 mb-8 bg-sage-50/80 p-5 rounded-3xl border border-forest-900/5">
                <div className="flex items-center justify-between">
                  <label htmlFor="meal-slider" className="text-sm font-bold text-forest-900">
                    Surplus Weight:
                  </label>
                  <div className="flex items-center gap-1.5 font-serif-display text-2xl sm:text-3xl font-bold text-forest-900">
                    <span>{calculatorKg}</span>
                    <span className="text-sm font-sans font-normal text-ink-600">kg</span>
                  </div>
                </div>

                <input
                  id="meal-slider"
                  type="range"
                  min="1"
                  max="500"
                  step="1"
                  value={calculatorKg}
                  onChange={(e) => setCalculatorKg(parseInt(e.target.value, 10))}
                  aria-valuemin={1}
                  aria-valuemax={500}
                  aria-valuenow={calculatorKg}
                  aria-valuetext={`${calculatorKg} kilograms of food surplus`}
                  className="w-full h-3 bg-sage-200 rounded-full appearance-none cursor-pointer accent-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />

                <div className="flex justify-between text-[11px] text-ink-600 font-medium">
                  <span>1 kg (small cafe box)</span>
                  <span>250 kg (hotel event)</span>
                  <span>500 kg (large banquet)</span>
                </div>
              </div>

              {/* Live Result Callout Region with aria-live */}
              <div
                aria-live="polite"
                aria-atomic="true"
                className="p-6 rounded-3xl apple-glass border border-saffron-500/30 mb-6 shadow-sm"
              >
                <div className="grid grid-cols-2 gap-4 text-center pb-4 mb-4 border-b border-forest-900/10">
                  <div>
                    <span className="text-xs uppercase font-bold text-ink-600 tracking-wider">
                      Wholesome Meals
                    </span>
                    <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-1">
                      ≈ {formatNumberIN(calculatedMeals)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-ink-600 tracking-wider">
                      CO₂e Prevented
                    </span>
                    <div className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-leaf-600 mt-1">
                      ≈ {calculatedCO2e} <span className="text-base font-sans font-normal">kg</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-center text-forest-900 font-medium">
                  &ldquo;Your <span className="font-bold text-saffron-600">{calculatorKg} kg</span> could feed about <span className="font-bold text-saffron-600">{calculatedMeals} people</span> and avoid about <span className="font-bold text-leaf-600">{calculatedCO2e} kg</span> of CO₂e.&rdquo; <span className="text-xs text-ink-600">(estimate)</span>
                </p>
              </div>
            </div>

            {/* Direct Action Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => openModal({ quantity: calculatorKg, quantityUnit: 'kg' })}
              className="w-full flex items-center justify-center gap-2 font-bold shadow-lg shadow-saffron-500/25 btn-shine !rounded-full !py-4 text-base"
            >
              <Sparkles className="w-5 h-5" />
              <span>Donate This {calculatorKg} kg Surplus Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
