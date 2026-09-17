'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useBookingModal } from '@/components/forms/BookingModalContext';
import { useSmoothScroll } from '@/components/layout/SmoothScrollProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'VERDE', href: '/#verde', hash: '#verde' },
    { label: 'RESIDENCES', href: '/#residences', hash: '#residences' },
    { label: 'PROJECTS', href: '/projects', hash: null },
    { label: 'ABOUT', href: '/about', hash: null },
    { label: 'CONTACT', href: '/contact', hash: null },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string | null) => {
    setMobileMenuOpen(false);
    if (hash && window.location.pathname === '/') {
      e.preventDefault();
      scrollTo(hash, -40);
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If on homepage, smooth scroll to top instead of page reload
    if (window.location.pathname === '/') {
      e.preventDefault();
      setMobileMenuOpen(false);
      scrollTo(0);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#121211]/90 backdrop-blur-md border-b border-stone-800/80 shadow-lg shadow-black/20 text-stone-100'
            : 'py-6 bg-gradient-to-b from-black/60 to-transparent text-stone-100'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="/"
            onClick={handleBrandClick}
            className="group flex flex-col focus:outline-none"
            aria-label="Aarvana Developers — Home"
          >
            <span className="font-serif text-lg tracking-[0.25em] font-normal uppercase text-stone-100 group-hover:text-[#cda45e] transition-colors">
              Aarvana
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase -mt-1 font-light text-stone-400">
              Developers
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.hash)}
                className="text-[11px] tracking-[0.22em] uppercase font-medium relative group py-1 text-stone-300 hover:text-[#cda45e] transition-colors duration-200"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#cda45e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => openBookingModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 font-medium text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-sm bg-stone-100 hover:bg-[#cda45e] text-stone-950"
            >
              <span>Book a Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden focus:outline-none transition-colors text-stone-200 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between p-8 pt-28 lg:hidden bg-[#0f0f0e] text-stone-100"
          >
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#cda45e]">
                Navigation Index
              </p>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.hash)}
                      className="font-serif text-2xl tracking-wide text-stone-200 hover:text-[#cda45e] transition-colors flex items-center justify-between group py-1 border-b border-stone-900"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-stone-600 group-hover:text-[#cda45e] transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-stone-800/80 space-y-5">
              <div className="space-y-1">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-stone-500">
                  Aarvana Verde Pavilion
                </p>
                <p className="text-xs font-light text-stone-300">
                  Old Mahabalipuram Road (OMR), Chennai
                </p>
                <p className="text-xs font-mono text-stone-400">
                  +91 44 2835 7700
                </p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 shadow-sm bg-stone-100 text-stone-950"
              >
                <span>Book a Private Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
