import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PlateProps {
  index: number;
  isEmpty: boolean;
}

export const Plate: React.FC<PlateProps> = ({ index, isEmpty }) => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label={`Plate ${index + 1}: ${isEmpty ? 'Wasted / empty plate' : 'Full nourished meal'}`}
      className={`relative aspect-square rounded-full flex items-center justify-center p-3 transition-all duration-500 ${
        isEmpty
          ? 'bg-tomato-500/10 border-2 border-dashed border-tomato-500/70'
          : 'bg-white border-2 border-forest-900/15 shadow-sm'
      }`}
    >
      {/* Plate Rim */}
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
          isEmpty ? 'bg-cream-50/50' : 'bg-cream-50 border border-saffron-500/30'
        }`}
      >
        {/* Plate Food Content or Empty State */}
        {isEmpty ? (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: reducedMotion ? 1 : [0.8, 1],
              opacity: 1,
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center p-2"
          >
            <div className="w-8 h-8 rounded-full bg-tomato-500/20 text-tomato-600 flex items-center justify-center mb-1">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-tomato-600 uppercase tracking-wider">
              Lost
            </span>
          </motion.div>
        ) : (
          <motion.div
            className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-saffron-400 via-saffron-500 to-leaf-500 flex items-center justify-center shadow-inner relative"
          >
            {/* Wholesome meal details: grain, garnish, spoon highlight */}
            <div className="w-2.5 h-2.5 rounded-full bg-forest-900/20 absolute top-2 left-3" />
            <div className="w-3 h-3 rounded-full bg-white/40 absolute bottom-2 right-3" />
            <div className="w-2 h-2 rounded-full bg-leaf-600 absolute bottom-3 left-3" />
            <span className="text-[10px] font-bold text-forest-900/90 tracking-tight">
              MEAL
            </span>
          </motion.div>
        )}
      </div>

      {/* Floating subtle badge for empty state */}
      {isEmpty && (
        <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-tomato-600 text-white text-[10px] font-bold shadow-sm">
          1 of 3 Wasted
        </span>
      )}
    </div>
  );
};

export const NinePlateGrid: React.FC<{ isTriggered: boolean }> = ({ isTriggered }) => {
  // Exactly 3 plates will be emptied: index 2, 5, 7
  const emptyIndices = [2, 5, 7];

  return (
    <div className="w-full max-w-sm mx-auto p-4 sm:p-6 bg-sage-100/60 rounded-panel border border-forest-900/10 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-forest-900 uppercase tracking-widest">
          The 1 in 3 Reality
        </span>
        <span className="text-xs text-ink-600 font-medium">
          {isTriggered ? '3 of 9 plates discarded' : '9 plates prepared'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {Array.from({ length: 9 }).map((_, idx) => {
          const shouldBeEmpty = isTriggered && emptyIndices.includes(idx);
          return <Plate key={idx} index={idx} isEmpty={shouldBeEmpty} />;
        })}
      </div>

      <p className="text-xs text-center text-ink-600 mt-4 leading-relaxed">
        Scroll triggers dynamic plate verification: 33% of food is lost before someone can eat it.
      </p>
    </div>
  );
};
