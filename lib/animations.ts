import type { Variants } from 'framer-motion';

// Shared animation durations
export const duration = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.8,
  cinematic: 1.0,
} as const;

// Shared easing curves
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  cinematic: [0.22, 1, 0.36, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
};

// Fade up animation for scroll-triggered content
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.cinematic,
    },
  },
};

// Fade in without movement
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      ease: easing.smooth,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Scale image on hover
export const imageHover = {
  rest: {
    scale: 1,
    transition: {
      duration: duration.medium,
      ease: easing.smooth,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: duration.medium,
      ease: easing.smooth,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: easing.cinematic,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: easing.cinematic,
    },
  },
};

// Line reveal (width animation for gold dividers)
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: duration.slow,
      ease: easing.cinematic,
    },
  },
};

// Menu overlay animation
export const menuOverlay: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: duration.fast,
      ease: easing.smooth,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      ease: easing.smooth,
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Menu item animation
export const menuItem: Variants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.medium,
      ease: easing.cinematic,
    },
  },
};

// Viewport detection settings for scroll animations
export const viewportSettings = {
  once: true,
  amount: 0.05,
} as const;
