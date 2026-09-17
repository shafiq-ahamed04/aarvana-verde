/** Site-wide configuration types */

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube';
  url: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  mapUrl?: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  logo: string;
  logoDark: string;
  foundedYear: number;
  website: string;
}

export interface SEOConfig {
  siteUrl: string;
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  locale: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  contact: ContactInfo;
  social: SocialLink[];
  seo: SEOConfig;
  /** Primary CTA text used across the site */
  primaryCTA: string;
  /** WhatsApp message template */
  whatsappMessage: string;
}
