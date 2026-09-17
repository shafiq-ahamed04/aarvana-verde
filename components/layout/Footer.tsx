'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '@/components/layout/SmoothScrollProvider';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash && typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      const hash = href.replace('/', '');
      scrollTo(hash, -40);
    }
  };

  const navItems = [
    { label: 'Verde Flagship', href: '/projects/aarvana-verde', isHash: false },
    { label: 'Projects Archive', href: '/projects', isHash: false },
    { label: 'About Aarvana', href: '/about', isHash: false },
    { label: 'Private Advisory & Contact', href: '/contact', isHash: false },
    { label: 'Residence Explorer', href: '/#residences', isHash: true },
    { label: 'Location & Map', href: '/#location', isHash: true },
  ];

  return (
    <footer className="bg-[#0c0c0b] text-stone-300 border-t border-stone-800/80 pt-20 pb-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Architectural Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/60">
          {/* Brand Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl text-stone-100 tracking-[0.2em] uppercase font-normal">
                Aarvana
              </span>
              <span className="block text-[10px] tracking-[0.45em] text-[#cda45e] uppercase">
                Developers — Architectural Excellence
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-stone-300 font-light leading-relaxed max-w-md">
              Where the city ends.<br />
              <span className="text-white font-normal">Your life begins.</span>
            </p>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md">
              Aarvana Verde is a 24-acre residential sanctuary of thirty-six low-density homes in Chennai,
              harmonizing structural restraint, diurnal sunlight, and native canopy.
            </p>
          </div>

          {/* Quick Nav Directory */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-medium">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-stone-300">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.isHash)}
                    className="hover:text-[#cda45e] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Pavilion */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#cda45e] font-medium">
              Experience Pavilion
            </p>
            <div className="space-y-2 text-xs text-stone-300 font-light">
              <p className="text-stone-100 font-normal">Aarvana Verde Experience Pavilion</p>
              <p>Off Old Mahabalipuram Road (OMR), Near Sholinganallur</p>
              <p>Chennai, Tamil Nadu 600096, India</p>
              <div className="pt-2 text-stone-400 space-y-1 font-mono text-[11px]">
                <p>Concierge: +91 44 2835 7700</p>
                <p>Inquiries: private@aarvana.com</p>
                <p>Walkthroughs: Tuesday – Sunday, by appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Notice */}
        <div className="py-10 border-b border-stone-800/60 space-y-4 text-[11px] text-stone-500 leading-relaxed font-light">
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span className="px-2 py-0.5 border border-stone-800 text-[10px] font-mono uppercase tracking-wider text-stone-300">
              TNRERA REGISTRATION: TN/RERA/2024/0942
            </span>
            <span className="text-[10px] tracking-wider uppercase text-stone-400">
              Sanctioned Project Plan & Title Clearances Available on Site
            </span>
          </div>

          <p>
            <strong className="text-stone-400 font-medium">Portfolio Showcase Notice:</strong> Aarvana Verde
            is a curated digital design showcase built to demonstrate modern architectural digital craft.
            All specifications, statistics, imagery, and plans presented are artistic and illustrative.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {currentYear} {siteConfig.company.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-800">•</span>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Terms of Residency
            </Link>
            <span className="text-stone-800">•</span>
            <span className="text-stone-400">Chennai • Coimbatore • Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
