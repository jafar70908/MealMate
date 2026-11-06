import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-pill focus:bg-saffron-500 focus:text-forest-900 focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest-900"
    >
      Skip to main content
    </a>
  );
};
