import type { SiteConfig } from '@/types/site';

/**
 * Central site configuration.
 * Aligned with AARVANA VERDE — CHENNAI flagship specifications.
 */
export const siteConfig: SiteConfig = {
  company: {
    name: 'Aarvana Developers',
    legalName: 'Aarvana Developers Pvt. Ltd.',
    tagline: 'Where the city ends. Your life begins.',
    description:
      'Aarvana Developers is a premier Indian architectural property developer creating landmark residences defined by light, landscape, and restraint.',
    logo: '/images/logo.svg',
    logoDark: '/images/logo-dark.svg',
    foundedYear: 1994,
    website: 'https://aarvana.com',
  },

  contact: {
    phone: '+91 44 2835 7700',
    whatsapp: '+919840012345',
    email: 'private@aarvana.com',
    address: 'Aarvana Pavilion, Old Mahabalipuram Road (OMR)',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600096',
    mapUrl: 'https://maps.google.com',
  },

  social: [
    { platform: 'instagram', url: 'https://instagram.com/aarvanadevelopers', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com/aarvanadevelopers', label: 'Facebook' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/aarvanadevelopers', label: 'LinkedIn' },
    { platform: 'youtube', url: 'https://youtube.com/@aarvanadevelopers', label: 'YouTube' },
  ],

  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://aarvana.com',
    siteName: 'Aarvana Verde — Aarvana Developers',
    defaultTitle: 'Aarvana Verde — 3 & 4 BHK Luxury Residences in Chennai | Aarvana Developers',
    titleTemplate: '%s | Aarvana Verde',
    defaultDescription:
      'Where the city ends. Your life begins. Discover 36 exclusive 3 & 4 BHK residences across 24 pristine acres in Chennai by Aarvana Developers.',
    defaultImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    twitterHandle: '@aarvanadev',
    locale: 'en_IN',
  },

  primaryCTA: 'Book a Private Visit',
  whatsappMessage: 'Hello, I would like to schedule a private walkthrough of Aarvana Verde, Chennai.',
};
