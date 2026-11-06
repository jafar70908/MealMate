import { type Variants, type Transition } from 'framer-motion';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const TRANSITION_FAST: Transition = {
  duration: 0.2,
  ease: EASE_OUT_EXPO,
};

export const TRANSITION_BASE: Transition = {
  duration: 0.4,
  ease: EASE_OUT_EXPO,
};

export const TRANSITION_SLOW: Transition = {
  duration: 0.7,
  ease: EASE_OUT_EXPO,
};

export const SPRING_SMOOTH: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
};

export const FADE_UP_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const CARD_HOVER_MOTION = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.25, ease: EASE_OUT_EXPO },
  },
};
