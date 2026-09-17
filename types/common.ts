/** Shared/common types used across the application */

import type { ReactNode } from 'react';

/** Navigation link item */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

/** Amenity definition */
export interface Amenity {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  image?: string;
  category: 'fitness' | 'recreation' | 'lifestyle' | 'safety' | 'convenience' | 'outdoor';
}

/** Testimonial */
export interface Testimonial {
  id: string;
  name: string;
  designation?: string;
  content: string;
  rating: number;
  projectSlug?: string;
  avatar?: string;
}

/** FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

/** Generic section props for page sections */
export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

/** Responsive image source set */
export interface ResponsiveImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

/** Form field state */
export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

/** Generic API response */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
