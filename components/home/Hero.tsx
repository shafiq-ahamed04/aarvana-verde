'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useBookingModal } from '@/components/forms/BookingModalContext';
import { useSmoothScroll } from '@/components/layout/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLButtonElement>(null);

  const { openBookingModal } = useBookingModal();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Controlled initial state — no flash
      gsap.set(imageWrapperRef.current, {
        clipPath: 'inset(8% 6% 8% 6%)',
        opacity: 0,
      });
      gsap.set(imageInnerRef.current, {
        scale: 1.06,
      });
      gsap.set([brandRef.current, subtextRef.current, ctaRef.current, scrollPromptRef.current], {
        opacity: 0,
        y: 20,
      });
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: '105%',
        opacity: 0,
      });

      // 0.0s – 1.2s: Architectural image reveal via clip-path expansion
      tl.to(imageWrapperRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        duration: 1.3,
        ease: 'expo.out',
      })
      .to(
        imageInnerRef.current,
        {
          scale: 1,
          duration: 1.6,
          ease: 'power2.out',
        },
        0
      )
      // 0.5s – 1.6s: Project metadata emerges
      .to(
        brandRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.45
      )
      // 0.7s – 1.9s: Staggered typography sequence
      .to(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        {
          y: '0%',
          opacity: 1,
          stagger: 0.16,
          duration: 1.0,
          ease: 'power4.out',
        },
        0.65
      )
      // 1.4s – 2.2s: Supporting copy
      .to(
        subtextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.3
      )
      // 1.8s – 2.6s: CTA appearance
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.7
      )
      // 2.1s+: Scroll indicator subtle activation
      .to(
        scrollPromptRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        2.0
      );

      // Controlled continuous scroll parallax: scale 1.0 -> 1.04, translation 12%
      if (imageInnerRef.current && containerRef.current) {
        gsap.to(imageInnerRef.current, {
          y: '14%',
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a09] text-stone-100 pt-28 pb-12 px-6 md:px-12"
      aria-label="Cinematic Introduction"
    >
      {/* Masked Architectural Canvas */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        <div ref={imageInnerRef} className="relative w-full h-full will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=88"
            alt="Aarvana Verde contemporary cantilevered villa at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.6] contrast-[1.06]"
          />
          {/* Subtle Vignette Shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-[#0a0a09]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a09]/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* Top Metadata Row */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between">
        <div ref={brandRef} className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cda45e]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-stone-300 font-medium">
            Aarvana Developers • Chennai Flagship
          </span>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono">
            3 & 4 BHK • 24 Acres • 36 Residences
          </span>
        </div>
      </div>

      {/* Center Monumental Editorial Typography */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-10 sm:py-14">
        <div className="max-w-4xl space-y-1 sm:space-y-3">
          <div className="overflow-hidden">
            <h1
              ref={line1Ref}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-stone-100 font-normal uppercase leading-[0.88] select-none"
            >
              Live
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={line2Ref}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-stone-300 font-light uppercase leading-[0.88] select-none italic"
            >
              Beyond
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={line3Ref}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-normal uppercase leading-[0.88] select-none"
            >
              Ordinary.
            </h1>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 max-w-xl">
          <p
            ref={subtextRef}
            className="text-base sm:text-lg text-stone-300 font-light leading-relaxed font-sans"
          >
            A collection of contemporary residences crafted for the way modern India lives.
            Where architectural purity meets 24 acres of conserved forest terrain.
          </p>

          <div
            ref={ctaRef}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollTo('#verde', -30)}
              className="group px-7 py-3.5 bg-stone-100 hover:bg-[#cda45e] text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center gap-3 rounded-sm shadow-xl shadow-black/40 cursor-pointer"
            >
              <span>Explore Verde</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3.5 border border-stone-600 hover:border-stone-300 text-stone-200 hover:text-white text-xs uppercase tracking-[0.22em] transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-sm"
            >
              Book Private Visit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Discovery Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-end justify-between border-t border-stone-800/80 pt-6">
        <button
          ref={scrollPromptRef}
          onClick={() => scrollTo('#verde', -30)}
          className="group flex items-center gap-3 text-stone-400 hover:text-stone-100 text-[10px] sm:text-xs uppercase tracking-[0.25em] transition-colors cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-[#cda45e] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </div>
          <span>Scroll to Discover</span>
        </button>

        <div className="flex items-center gap-6 text-[10px] tracking-[0.25em] uppercase text-stone-500 font-mono">
          <span>12°54&apos;N 80°13&apos;E</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-stone-400">Low-Density Enclave</span>
        </div>
      </div>
    </section>
  );
}
