import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const BridgeLine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  // Smooth scroll interpolation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 3200"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bridgeLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5A524" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FBB03B" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#F5A524" stopOpacity="1" />
            <stop offset="100%" stopColor="#2FBF71" stopOpacity="0.9" />
          </linearGradient>

          <filter id="bridgeLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle background track */}
        <path
          d="M 1200 200 C 1100 500, 300 700, 200 1100 C 100 1500, 1300 1800, 1250 2200 C 1200 2500, 400 2700, 720 3100"
          stroke="#F5A524"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeOpacity="0.18"
          fill="none"
        />

        {/* Active Drawing Bridge Line */}
        <motion.path
          d="M 1200 200 C 1100 500, 300 700, 200 1100 C 100 1500, 1300 1800, 1250 2200 C 1200 2500, 400 2700, 720 3100"
          stroke="url(#bridgeLineGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#bridgeLineGlow)"
          fill="none"
          style={{
            pathLength: reducedMotion ? 1 : pathLength,
          }}
        />
      </svg>
    </div>
  );
};
