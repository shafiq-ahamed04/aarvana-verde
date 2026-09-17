'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download, MessageSquare, PhoneCall } from 'lucide-react';
import { useBookingModal } from '@/components/forms/BookingModalContext';
import { siteConfig } from '@/config/site.config';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Cinematic slow background scale on scroll
      if (imageRef.current && containerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.06, opacity: 0.15 },
          {
            scale: 1.0,
            opacity: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom bottom',
              scrub: true,
            },
          }
        );
      }

      // Headline entrance
      if (headlineRef.current) {
        gsap.from(headlineRef.current.querySelectorAll('h2'), {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        });
      }

      // Content & buttons entrance
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full min-h-screen py-36 md:py-48 flex items-center justify-center bg-[#080808] text-stone-100 overflow-hidden border-t border-stone-800"
      aria-label="Final Invitation"
    >
      {/* Background Architectural Canvas with Slow Scroll Reveal */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
          alt="Aarvana Verde private courtyard at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.4] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080808]/40 to-[#080808]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center space-y-12">
        {/* Architectural Stamp */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-stone-800 bg-stone-900/80 backdrop-blur-sm text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#cda45e] font-mono">
          <span>Private Client Invitations</span>
          <span>•</span>
          <span>Only 36 Residences</span>
        </div>

        {/* Climax Editorial Typography */}
        <div ref={headlineRef} className="space-y-2 sm:space-y-3">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal uppercase leading-[0.88] text-stone-100 tracking-tight">
            Your Next
          </h2>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic uppercase leading-[0.88] text-stone-400 tracking-tight">
            Chapter
          </h2>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal uppercase leading-[0.88] text-white tracking-tight">
            Starts Here.
          </h2>
        </div>

        <div ref={contentRef} className="space-y-10">
          <p className="text-stone-300 text-base sm:text-lg font-light max-w-lg mx-auto leading-relaxed">
            Walk the grounds, experience the verdant setting, and discover what life feels like
            where the city ends.
          </p>

          {/* Primary and Secondary CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto px-9 py-4 bg-stone-100 hover:bg-[#cda45e] text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-3 rounded-sm shadow-2xl cursor-pointer"
            >
              <span>Book a Private Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto px-8 py-4 border border-stone-700 hover:border-stone-300 text-stone-200 hover:text-white text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#cda45e]" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Direct Concierge Contact Lines */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-stone-400 border-t border-stone-800/80 max-w-md mx-auto">
            <a
              href={getWhatsAppUrl(siteConfig.contact.whatsapp, siteConfig.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#cda45e] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#cda45e]" />
              <span className="tracking-wider uppercase font-mono text-[11px]">WhatsApp Concierge</span>
            </a>

            <span className="text-stone-700">•</span>

            <a
              href={getPhoneUrl(siteConfig.contact.phone)}
              className="flex items-center gap-2 hover:text-[#cda45e] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#cda45e]" />
              <span className="font-mono text-[11px]">{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
