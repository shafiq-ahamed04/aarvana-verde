import { siteConfig } from '@/config/site.config';

/**
 * Re-export site configuration for the data layer.
 * Components should import site data from here, not directly from config.
 */
export const site = siteConfig;
