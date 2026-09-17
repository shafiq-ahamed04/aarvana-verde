'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current?.querySelectorAll('.reveal-text') || [], {
        y: 35,
        opacity: 0,
        stagger: 0.14,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 82%',
        },
      });

      // Monumental Manifesto Bridge Reveal
      gsap.from(manifestoRef.current?.querySelectorAll('.manifesto-line') || [], {
        y: 40,
        opacity: 0,
        stagger: 0.18,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: 'top 80%',
        },
      });

      // Stats animation
      gsap.from(statsContainerRef.current?.querySelectorAll('.stat-item') || [], {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsContainerRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '3 & 4', unit: 'BHK', label: 'Configurations', detail: 'Pavilion & Courtyard Villa residences' },
    { value: '2,450–3,850', unit: 'SQ.FT.', label: 'Carpet Area', detail: 'Generous private structural volumes' },
    { value: '24', unit: 'ACRES', label: 'Verdant Terrain', detail: 'Preserved native tree canopy' },
    { value: '36', unit: 'RESIDENCES', label: 'Low-Density Enclave', detail: 'Peaceful seclusion & privacy' },
    { value: '2028', unit: 'HANDOVER', label: 'Possession', detail: 'TN RERA: TN/RERA/2024/0942' },
  ];

  return (
    <section
      id="verde"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 border-t border-stone-800/80 bg-[#10100f] text-stone-100 overflow-hidden"
      aria-label="Project Introduction"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            02 / PROJECT INTRODUCTION
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Editorial Headline & Supporting Narrative */}
        <div ref={headlineRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.95] tracking-tight text-stone-100">
              <span className="block reveal-text">A Home</span>
              <span className="block reveal-text font-light italic text-stone-400">
                Built Around
              </span>
              <span className="block reveal-text text-white">
                Your Life.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2">
            <p className="reveal-text font-serif text-xl sm:text-2xl font-light leading-relaxed text-stone-200">
              Designed around light, landscape and privacy, Verde brings the calm of a retreat
              into the rhythm of the city.
            </p>
            <p className="reveal-text text-sm sm:text-base leading-relaxed font-light max-w-xl text-stone-400">
              Here, architectural massing yields to nature. Floor-to-ceiling glass pavilions dissolve
              the threshold between living rooms and forested courtyards. Every corner is calibrated
              to harvest gentle morning breezes and temper the afternoon sun.
            </p>
          </div>
        </div>

        {/* Architectural Image Insert */}
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] mb-24 overflow-hidden border border-stone-800 bg-stone-950 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
            alt="Double-height living pavilion at Aarvana Verde"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center filter brightness-[0.8] contrast-[1.05] hover:scale-[1.03] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100f] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm px-3 py-1.5 border bg-black/60 text-stone-300 border-stone-800">
              The Living Pavilion — Double-Height Natural Atrium
            </span>
            <span className="hidden sm:inline text-xs font-mono tracking-wider text-stone-400">
              Natural Teak • Travertine Stone • Low-E Glazing
            </span>
          </div>
        </div>

        {/* Typographic Metric Composition */}
        <div
          ref={statsContainerRef}
          className="border-y border-stone-800/80 py-12 mb-28"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-800/80">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className={`stat-item flex flex-col justify-between pt-6 md:pt-0 ${
                  idx > 0 ? 'md:pl-6 lg:pl-8' : ''
                }`}
              >
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-2 font-medium text-[#cda45e]">
                    {item.label}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                      {item.value}
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-widest font-mono text-stone-400">
                      {item.unit}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] mt-3 font-light leading-tight text-stone-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Monumental Architectural Brand Manifesto Bridge */}
        <div ref={manifestoRef} className="py-12 border-t border-stone-800/60 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.35em] font-mono font-medium block mb-4 text-[#cda45e]">
            The Verde Manifesto
          </span>
          <div className="space-y-2">
            <h3 className="manifesto-line font-serif text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-stone-300">
              Where The City Ends.
            </h3>
            <h3 className="manifesto-line font-serif text-3xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight italic text-white">
              Your Life Begins.
            </h3>
          </div>
          <p className="manifesto-line text-xs sm:text-sm font-light mt-6 max-w-lg leading-relaxed text-stone-400">
            Thirty-six bespoke homes sheltered within a protected botanical sanctuary, built for families
            who measure luxury in silence, natural light, and generational space.
          </p>
        </div>
      </div>
    </section>
  );
}
