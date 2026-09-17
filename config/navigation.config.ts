import type { NavItem } from '@/types/common';

/**
 * Main navigation structure.
 * Consumed by Navbar and Footer — defined once.
 */
export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Aarvana Verde', href: '/projects/aarvana-verde' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Footer-specific additional links */
export const footerNavigation: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

/** Routes that should not show the standard Navbar/Footer */
export const bareRoutes: string[] = [];
