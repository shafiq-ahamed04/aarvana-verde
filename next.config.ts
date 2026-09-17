import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /** Enable React strict mode for development quality checks */
  reactStrictMode: true,

  /** Image optimization configuration with remote domain patterns */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  /** Powered-by header removal for security */
  poweredByHeader: false,
};

export default nextConfig;
