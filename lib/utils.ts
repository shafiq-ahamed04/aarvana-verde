/**
 * General utility functions.
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge class names with clsx and tailwind-merge */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format price in INR (e.g., "₹1.5 Cr" or "₹1,20,00,000") */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format area with unit */
export function formatArea(area: string | number, unit: 'sqft' | 'sqm' = 'sqft'): string {
  const formatted = typeof area === 'number'
    ? new Intl.NumberFormat('en-IN').format(area)
    : area;
  return `${formatted} ${unit}`;
}

/** Generate URL-friendly slug from string */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

/** Generate WhatsApp URL */
export function getWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/** Generate tel: link */
export function getPhoneUrl(phone: string): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}

/** Generate mailto: link */
export function getEmailUrl(email: string, subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${params}`;
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Lerp (linear interpolation) */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}
