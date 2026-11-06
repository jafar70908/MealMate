import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroScene: React.FC = () => {
  const reducedMotion = useReducedMotion();

  // Floating food animation parameters
  const bobVariants = {
    animate: (custom: { y: number; delay: number; duration: number }) => ({
      y: reducedMotion ? 0 : [0, custom.y, 0],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: custom.delay,
      },
    }),
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[4/3] flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Sage Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sage-100/60 via-saffron-500/10 to-transparent rounded-full blur-3xl transform scale-90 -z-10" />

      <svg
        viewBox="0 0 600 450"
        className="w-full h-full overflow-visible drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration: A glowing saffron plate rising like the sun over a golden bridge connecting kitchens to community homes"
      >
        <defs>
          <linearGradient id="bridgeGrad" x1="120" y1="320" x2="480" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5A524" />
            <stop offset="0.5" stopColor="#FBB03B" />
            <stop offset="1" stopColor="#D98A12" />
          </linearGradient>

          <linearGradient id="plateSunGrad" x1="300" y1="60" x2="300" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF7E8" />
            <stop offset="0.6" stopColor="#FDE6BE" />
            <stop offset="1" stopColor="#F5A524" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- SUN-PLATE (Rising in center background) --- */}
        <g id="sun-plate">
          {/* Subtle Outer Corona */}
          <circle cx="300" cy="180" r="130" fill="#F5A524" opacity="0.12" filter="url(#softGlow)" />
          {/* Outer Plate Rim */}
          <circle cx="300" cy="180" r="105" fill="url(#plateSunGrad)" stroke="#F5A524" strokeWidth="4" />
          {/* Inner Plate Border (dashed elegant ceramic groove) */}
          <circle cx="300" cy="180" r="82" stroke="#0B3B2E" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.4" fill="none" />
          {/* Center Plate Core */}
          <circle cx="300" cy="180" r="60" fill="#FFF7E8" />
          {/* Food Heart Emboss in center */}
          <path
            d="M290 178 C290 170, 300 166, 300 174 C300 166, 310 170, 310 178 C310 188, 300 196, 300 196 C300 196, 290 188, 290 178 Z"
            fill="#F5A524"
            opacity="0.85"
          />
        </g>

        {/* --- LEFT BANK: DONORS SKYLINE (Restaurant, Hotel, Home Kitchen) --- */}
        <g id="left-bank-donors">
          {/* Ground Bank */}
          <path d="M40 370 Q140 365 210 370 L210 430 L40 430 Z" fill="#E6F2EA" />
          <path d="M40 370 Q140 365 210 370" stroke="#0B3B2E" strokeWidth="3" strokeLinecap="round" />

          {/* Restaurant / Kitchen Building with Chimney */}
          <rect x="70" y="270" width="60" height="100" rx="4" fill="#0B3B2E" />
          {/* Restaurant Windows */}
          <rect x="80" y="285" width="16" height="20" rx="2" fill="#F5A524" />
          <rect x="104" y="285" width="16" height="20" rx="2" fill="#FFF7E8" />
          <rect x="80" y="315" width="16" height="20" rx="2" fill="#FFF7E8" />
          <rect x="104" y="315" width="16" height="20" rx="2" fill="#F5A524" />
          {/* Door with awning */}
          <path d="M66 268 L134 268 L130 276 L70 276 Z" fill="#F5A524" />
          {/* Chef Hat Signboard Icon */}
          <circle cx="100" cy="254" r="9" fill="#2FBF71" />
          <path d="M96 256 Q100 248 104 256 Z" fill="#FFF7E8" />

          {/* Hotel Tower */}
          <rect x="135" y="230" width="55" height="140" rx="4" fill="#14604A" />
          <rect x="145" y="245" width="12" height="14" rx="2" fill="#FFF7E8" opacity="0.9" />
          <rect x="165" y="245" width="12" height="14" rx="2" fill="#FFF7E8" opacity="0.9" />
          <rect x="145" y="270" width="12" height="14" rx="2" fill="#F5A524" />
          <rect x="165" y="270" width="12" height="14" rx="2" fill="#FFF7E8" opacity="0.9" />
          <rect x="145" y="295" width="12" height="14" rx="2" fill="#FFF7E8" opacity="0.9" />
          <rect x="165" y="295" width="12" height="14" rx="2" fill="#F5A524" />
          {/* Label banner */}
          <rect x="65" y="380" width="80" height="22" rx="11" fill="#0B3B2E" />
          <text x="105" y="395" textAnchor="middle" fill="#FFF7E8" fontSize="11" fontFamily="sans-serif" fontWeight="bold">DONORS</text>
        </g>

        {/* --- RIGHT BANK: COMMUNITIES & VOLUNTEER KITCHEN --- */}
        <g id="right-bank-communities">
          {/* Ground Bank */}
          <path d="M390 370 Q460 365 560 370 L560 430 L390 430 Z" fill="#E6F2EA" />
          <path d="M390 370 Q460 365 560 370" stroke="#0B3B2E" strokeWidth="3" strokeLinecap="round" />

          {/* Community Kitchen Shelter with Slanted Roof */}
          <path d="M420 280 L480 240 L540 280 L530 370 L430 370 Z" fill="#0B3B2E" />
          <path d="M414 282 L480 236 L546 282" stroke="#F5A524" strokeWidth="5" strokeLinecap="round" />
          {/* Heart window */}
          <circle cx="480" cy="290" r="16" fill="#F5A524" />
          <path
            d="M474 288 C474 284, 480 282, 480 286 C480 282, 486 284, 486 288 C486 294, 480 298, 480 298 C480 298, 474 294, 474 288 Z"
            fill="#0B3B2E"
          />
          {/* Community Shared Table */}
          <rect x="445" y="325" width="70" height="12" rx="4" fill="#2FBF71" />
          <line x1="455" y1="337" x2="455" y2="370" stroke="#0B3B2E" strokeWidth="4" />
          <line x1="505" y1="337" x2="505" y2="370" stroke="#0B3B2E" strokeWidth="4" />

          {/* Label banner */}
          <rect x="455" y="380" width="95" height="22" rx="11" fill="#0B3B2E" />
          <text x="502" y="395" textAnchor="middle" fill="#FFF7E8" fontSize="11" fontFamily="sans-serif" fontWeight="bold">COMMUNITIES</text>
        </g>

        {/* --- SIGNATURE ARCHED GOLDEN BRIDGE --- */}
        <g id="the-bridge">
          {/* Bridge Structural Pillars */}
          <rect x="200" y="340" width="14" height="40" rx="3" fill="#0B3B2E" />
          <rect x="386" y="340" width="14" height="40" rx="3" fill="#0B3B2E" />
          <rect x="293" y="325" width="14" height="55" rx="3" fill="#0B3B2E" opacity="0.6" />

          {/* Water reflection ripples beneath */}
          <path d="M220 405 C260 408, 340 408, 380 405" stroke="#2FBF71" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <path d="M245 420 C275 423, 325 423, 355 420" stroke="#2FBF71" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

          {/* Under-arch curve */}
          <path
            d="M190 370 C240 310, 360 310, 410 370"
            stroke="#0B3B2E"
            strokeWidth="4"
            fill="none"
          />

          {/* Main Arched Golden Deck */}
          <path
            d="M170 348 C230 290, 370 290, 430 348"
            stroke="url(#bridgeGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Suspension cables */}
          <line x1="240" y1="316" x2="240" y2="350" stroke="#F5A524" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="300" y1="298" x2="300" y2="335" stroke="#F5A524" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="360" y1="316" x2="360" y2="350" stroke="#F5A524" strokeWidth="2" strokeDasharray="3 3" />

          {/* Bridge roadway dots */}
          <circle cx="210" cy="340" r="3.5" fill="#FFF7E8" />
          <circle cx="255" cy="320" r="3.5" fill="#FFF7E8" />
          <circle cx="300" cy="312" r="4.5" fill="#FFF7E8" />
          <circle cx="345" cy="320" r="3.5" fill="#FFF7E8" />
          <circle cx="390" cy="340" r="3.5" fill="#FFF7E8" />
        </g>

        {/* --- FLOATING FOOD SURPLUS RESCUE PACKS (Animated gently traveling) --- */}
        {/* Item 1: Classic Indian Tiffin Carrier (Silver/Gold tiered) */}
        <motion.g
          custom={{ y: -8, delay: 0.1, duration: 4 }}
          variants={bobVariants}
          animate="animate"
        >
          <g transform="translate(230, 260) scale(0.9)">
            {/* Tiffin Handle */}
            <path d="M12 4 C12 -6, 28 -6, 28 4" stroke="#0B3B2E" strokeWidth="2.5" fill="none" />
            <rect x="8" y="4" width="24" height="8" rx="2" fill="#F5A524" />
            <rect x="8" y="14" width="24" height="8" rx="2" fill="#FFF7E8" stroke="#0B3B2E" strokeWidth="1" />
            <rect x="8" y="24" width="24" height="9" rx="2" fill="#2FBF71" />
            <circle cx="20" cy="8" r="1.5" fill="#0B3B2E" />
          </g>
        </motion.g>

        {/* Item 2: Wholesome Loaf of Fresh Bread */}
        <motion.g
          custom={{ y: -10, delay: 0.6, duration: 5 }}
          variants={bobVariants}
          animate="animate"
        >
          <g transform="translate(290, 245) scale(0.85)">
            <ellipse cx="20" cy="18" rx="18" ry="12" fill="#F5A524" stroke="#0B3B2E" strokeWidth="2" />
            <path d="M10 14 Q14 18 12 22" stroke="#FFF7E8" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 12 Q22 16 20 20" stroke="#FFF7E8" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 14 Q30 18 28 22" stroke="#FFF7E8" strokeWidth="2" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Item 3: Fresh Apple / Fruit Box */}
        <motion.g
          custom={{ y: -7, delay: 1.2, duration: 4.5 }}
          variants={bobVariants}
          animate="animate"
        >
          <g transform="translate(355, 265) scale(0.85)">
            <circle cx="16" cy="18" r="13" fill="#E8553D" />
            <path d="M16 5 C16 9, 13 10, 13 10" stroke="#0B3B2E" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M16 6 Q22 4 20 10 Z" fill="#2FBF71" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};
