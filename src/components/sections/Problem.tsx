import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import { Section } from '../ui/Section';
import { NinePlateGrid } from '../illustrations/Plate';
import { PROBLEM_CONTENT } from '../../data/content';
import { PROBLEM_STATS, type ProblemStat } from '../../data/stats';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

const StatCardItem: React.FC<{ stat: ProblemStat; trigger: boolean }> = ({ stat, trigger }) => {
  const animatedValue = useCountUp({
    end: stat.value,
    duration: 1500,
    decimals: stat.value % 1 === 0 ? 0 : 2,
    trigger,
  });

  return (
    <div className="apple-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 relative group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-tomato-600 bg-tomato-500/10 px-2.5 py-1 rounded-full">
            {stat.tag}
          </span>
          <a
            href={stat.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Source: ${stat.source}`}
            className="text-xs text-ink-600 hover:text-tomato-600 flex items-center gap-1 transition-colors"
          >
            <span>{stat.source}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Big Tabular Stat Number */}
        <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight my-2">
          <span>{stat.prefix}</span>
          <span className="tabular-nums">{animatedValue}</span>
          <span className="text-tomato-600 ml-1">{stat.suffix}</span>
        </div>

        <h3 className="font-sans font-bold text-base text-forest-900 mb-2">
          {stat.label}
        </h3>

        <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
          {stat.description}
        </p>
      </div>

      <div className="pt-4 mt-6 border-t border-forest-900/10 text-[11px] text-ink-600 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-tomato-500 animate-pulse" />
        <span>Verified citation in public reports</span>
      </div>
    </div>
  );
};

export const Problem: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  return (
    <Section id="problem" variant="cream">
      <div ref={ref}>
        {/* Eyebrow & Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-tomato-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-tomato-600">
              {PROBLEM_CONTENT.eyebrow}
            </span>
          </div>

          <h2
            id="problem-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight mb-4"
          >
            {PROBLEM_CONTENT.heading}
          </h2>

          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            {PROBLEM_CONTENT.description}
          </p>
        </div>

        {/* Content Grid: 3 Stat Cards (left/center) + Nine-Plate Grid (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Stat Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PROBLEM_STATS.map((stat) => (
              <StatCardItem key={stat.id} stat={stat} trigger={isInView} />
            ))}
          </div>

          {/* Interactive Nine-Plate Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <NinePlateGrid isTriggered={isInView} />
          </div>
        </div>

        {/* Pivot Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl apple-glass flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-white/80"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-saffron-500/15 text-saffron-600 flex items-center justify-center font-serif-display font-bold text-xl flex-shrink-0 shadow-inner">
              ✦
            </div>
            <div>
              <p className="font-serif-display text-xl sm:text-2xl font-bold text-forest-900">
                {PROBLEM_CONTENT.pivot}
              </p>
              <p className="text-xs sm:text-sm text-ink-600 mt-1">
                A digital bridge connects available surplus directly to organized community distribution in minutes.
              </p>
            </div>
          </div>

          <a
            href="#solution"
            className="px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md flex-shrink-0 btn-shine"
          >
            See Our Solution →
          </a>
        </motion.div>
      </div>
    </Section>
  );
};
