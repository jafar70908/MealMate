import React from 'react';

export const Skyline: React.FC = () => {
  return (
    <div className="w-full h-24 md:h-32 overflow-hidden relative select-none pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 120 L0 90 L30 90 L30 65 L60 65 L60 85 L90 85 L90 55 L130 55 L130 95 L170 95 L170 40 L210 40 L210 90 L260 90 L260 70 L300 70 L300 100 L360 100 L360 80 L420 80 L450 60 L480 80 L520 80 
             C560 30, 640 30, 680 80 
             L720 80 L740 60 L780 60 L780 95 L830 95 L830 45 L880 45 L880 85 L920 85 L920 60 L960 60 L960 90 L1010 90 L1010 50 L1060 50 L1060 85 L1110 85 L1110 65 L1160 65 L1160 95 L1200 95 L1200 120 Z"
          fill="#14604A"
        />
        {/* Central Golden Bridge Arch in Footer */}
        <path
          d="M520 82 C560 26, 640 26, 680 82"
          stroke="#F5A524"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="490" y1="84" x2="710" y2="84" stroke="#F5A524" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};
