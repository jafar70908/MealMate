import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Network, Truck, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Chip } from '../ui/Chip';
import { HOW_IT_WORKS_STEPS } from '../../data/content';
import { useInView } from '../../hooks/useInView';

export const HowItWorks: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, triggerOnce: true });
  const [activeStep, setActiveStep] = useState(1);

  const stepIcons = [ClipboardList, Network, Truck, CheckCircle2];

  return (
    <Section id="how-it-works" variant="cream">
      <div ref={ref}>
        {/* Eyebrow & Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Chip variant="saffron" size="sm" className="mb-3">
            Simple 4-Step Journey
          </Chip>
          <h2
            id="how-it-works-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight mb-4"
          >
            Simple steps from surplus to plate.
          </h2>
          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            Designed to integrate seamlessly into busy dinner service, catering breakdown, or daily grocery routines without taking more than a minute.
          </p>
        </div>

        {/* Desktop: Horizontal Connecting Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Bridge Path */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-12 h-1 bg-forest-900/10 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-saffron-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className={`cursor-pointer transition-all duration-300 flex flex-col ${
                    isActive ? 'scale-[1.03] opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                >
                  {/* Step Node Marker */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-saffron-500 text-forest-900 ring-4 ring-saffron-400/30'
                          : 'bg-white text-forest-900 border-2 border-forest-900/20'
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`flex-1 flex flex-col justify-between transition-all duration-300 apple-glass rounded-3xl p-6 border ${
                      isActive
                        ? 'border-saffron-500/80 ring-2 ring-saffron-400/30 shadow-[0_16px_36px_-8px_rgba(245,165,36,0.2)] bg-white/95'
                        : 'border-white/80 opacity-90 hover:opacity-100 hover:border-saffron-400/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-forest-700">
                        <Icon className="w-4 h-4 text-forest-800" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-600 bg-saffron-500/10 px-2 py-0.5 rounded-full">
                          {step.timing}
                        </span>
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-forest-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-4 font-normal">
                        {step.body}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-forest-900/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                      <span className="text-[11px] font-semibold text-leaf-600">
                        {step.actionHint}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Rail (clean left rail without horizontal scrolling) */}
        <div className="lg:hidden relative pl-8 border-l-2 border-saffron-500/40 space-y-6 text-left">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={step.id} className="relative">
                {/* Node on vertical rail */}
                <div className="absolute -left-[45px] top-1 w-9 h-9 rounded-full bg-saffron-500 text-forest-900 font-bold flex items-center justify-center text-sm shadow-md">
                  {step.id}
                </div>

                <div className="apple-glass rounded-2xl p-5 border border-white/80 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-forest-700" />
                    <span className="text-[10px] font-bold text-saffron-600 uppercase bg-saffron-500/10 px-2 py-0.5 rounded-full">
                      {step.timing}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-forest-900 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-3">
                    {step.body}
                  </p>

                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                    <span className="text-xs font-semibold text-leaf-600">
                      {step.actionHint}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
