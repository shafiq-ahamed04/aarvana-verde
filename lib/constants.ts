/**
 * Design and application constants.
 * Values referenced across components — defined once.
 */

/** Responsive breakpoints (match Tailwind defaults) */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Animation duration defaults (ms) */
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800,
  /** Easing for enter transitions */
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Easing for exit transitions */
  easeIn: 'cubic-bezier(0.55, 0, 1, 0.45)',
  /** Easing for interactive elements */
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

/** Section spacing scale (rem) */
export const SECTION_SPACING = {
  sm: '4rem',
  md: '6rem',
  lg: '8rem',
  xl: '10rem',
} as const;

/** Container max widths */
export const CONTAINER = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  full: '100%',
} as const;

/** Z-index scale for layering */
export const Z_INDEX = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  navbar: 30,
  overlay: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
} as const;
