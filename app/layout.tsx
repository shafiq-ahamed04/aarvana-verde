import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import { BookingModalProvider } from '@/components/forms/BookingModalContext';
import BookingModal from '@/components/forms/BookingModal';
import { siteConfig } from '@/config/site.config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const viewport: Viewport = {
  themeColor: '#0a0a09',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.seo.siteName,
    locale: siteConfig.seo.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.seo.defaultImage,
        width: 1920,
        height: 1080,
        alt: 'Aarvana Verde Residences Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.seo.twitterHandle,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="min-h-screen bg-[#0e0e0d] text-stone-100 font-sans antialiased selection:bg-[#cda45e] selection:text-black">
        <SmoothScrollProvider>
          <BookingModalProvider>
            <CustomCursor />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stone-100 focus:text-stone-900 focus:rounded-sm focus:text-xs focus:uppercase focus:tracking-widest"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <BookingModal />
          </BookingModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
