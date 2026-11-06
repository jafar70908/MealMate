import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-forest-900/10 overflow-hidden pointer-events-none">
      <motion.div
        className="h-full bg-saffron-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
