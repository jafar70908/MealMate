import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, FileCheck2, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Chip } from '../ui/Chip';
import { SOLUTION_CONTENT } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Solution: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const promiseIcons = [Clock, MapPin, FileCheck2];

  return (
    <Section id="solution" variant="sage">
      <div ref={ref}>
        {/* Eyebrow & Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <Chip variant="leaf" size="sm" className="mb-3">
            {SOLUTION_CONTENT.eyebrow}
          </Chip>
          <h2
            id="solution-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight mb-4"
          >
            {SOLUTION_CONTENT.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            {SOLUTION_CONTENT.description}
          </p>
        </div>

        {/* Dynamic Interactive Bridge Flow Diagram */}
        <div className="w-full apple-glass rounded-4xl p-6 sm:p-10 border border-white/80 shadow-glass mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Bank: Donors */}
            <div
              className={`flex-1 p-6 rounded-3xl border transition-all duration-300 ${
                activeStage === 0 || activeStage === null
                  ? 'bg-white/90 border-saffron-500/40 shadow-sm scale-[1.01]'
                  : 'bg-white/40 border-forest-900/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-saffron-500 text-forest-900 font-bold flex items-center justify-center text-xs shadow-sm">
                  01
                </span>
                <h3 className="font-bold text-forest-900 text-base">Food Donors</h3>
              </div>
              <p className="text-xs text-ink-600 leading-relaxed font-normal">
                Restaurants, caterers, hotel banquets, grocery stores, and households post surplus food in under a minute.
              </p>
            </div>

            {/* Center Bridge Connector Line (Animated SVG) */}
            <div className="flex flex-col items-center justify-center relative w-full md:w-56 my-2">
              <span className="text-[10px] font-bold text-saffron-600 uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded-full bg-saffron-500/10">
                Instant Smart Match
              </span>
              <div className="w-full h-12 relative flex items-center justify-center">
                <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible" fill="none">
                  {/* Golden Arch */}
                  <path
                    d="M 10 30 Q 80 0 150 30"
                    stroke="#F5A524"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Traveling Tiffin Capsule */}
                  <motion.g
                    animate={
                      isInView && !reducedMotion
                        ? {
                            x: [0, 140, 0],
                            y: [0, -10, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <circle cx="10" cy="30" r="6" fill="#2FBF71" />
                    <circle cx="10" cy="30" r="3" fill="#FFF7E8" />
                  </motion.g>
                </svg>
              </div>
              <span className="text-[11px] text-ink-600 font-medium">Under 45 min pickup</span>
            </div>

            {/* Right Bank: Communities */}
            <div
              className={`flex-1 p-6 rounded-3xl border transition-all duration-300 ${
                activeStage === 1 || activeStage === null
                  ? 'bg-white/90 border-leaf-500/40 shadow-sm scale-[1.01]'
                  : 'bg-white/40 border-forest-900/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-leaf-500 text-forest-900 font-bold flex items-center justify-center text-xs shadow-sm">
                  02
                </span>
                <h3 className="font-bold text-forest-900 text-base">Verified NGOs</h3>
              </div>
              <p className="text-xs text-ink-600 leading-relaxed font-normal">
                Vetted community kitchens, elderly shelters, child daycares, and local distribution pantries.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Value Promises Cards with Interactive Hover State */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTION_CONTENT.promises.map((promise, index) => {
            const Icon = promiseIcons[index] || ArrowRight;
            const isHovered = activeStage === index;

            return (
              <div
                key={promise.id}
                onMouseEnter={() => setActiveStage(index)}
                onMouseLeave={() => setActiveStage(null)}
                onFocus={() => setActiveStage(index)}
                onBlur={() => setActiveStage(null)}
                tabIndex={0}
                className={`p-7 rounded-3xl border transition-all duration-300 apple-glass cursor-pointer ${
                  isHovered
                    ? 'border-saffron-500/50 shadow-card-hover -translate-y-1.5'
                    : 'border-white/80 shadow-card'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-100/80 text-forest-900 flex items-center justify-center shadow-inner">
                    <Icon className="w-6 h-6 text-forest-700" />
                  </div>
                  <span className="font-serif-display text-2xl font-bold text-saffron-500">
                    {promise.number}
                  </span>
                </div>

                <div className="mb-2">
                  <Chip variant="saffron" size="sm" className="mb-2">
                    {promise.badge}
                  </Chip>
                  <h3 className="font-bold text-lg text-forest-900 leading-snug">
                    {promise.title}
                  </h3>
                </div>

                <p className="text-sm text-ink-600 leading-relaxed">
                  {promise.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
