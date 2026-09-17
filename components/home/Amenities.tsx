'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { amenities } from '@/data/amenities';

export default function Amenities() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      const cardWidth = 420;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), amenities.length - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="amenities"
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#0e0e0d] text-stone-100 overflow-hidden"
      aria-label="Amenities and Spaces"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            06 / WELLNESS & LIFESTYLE SPACES
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Headline & Navigation Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-stone-100">
              18 Spaces
              <span className="block font-light italic text-stone-400">
                Designed Around How You Live.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light max-w-xl leading-relaxed text-stone-400">
              No generic leisure clubs. Each environment is an architectural room carved into
              the landscape to nurture contemplation, vitality, and effortless hospitality.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-stone-400">
              <span className="font-medium text-white">
                0{activeIndex + 1}
              </span> / 0{amenities.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-11 h-11 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-600 flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Previous space"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-11 h-11 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-600 flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Next space"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Editorial Track */}
      <div
        ref={trackRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-none px-6 md:px-10 max-w-[100vw] pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {amenities.map((item, idx) => (
          <div
            key={item.slug}
            style={{ scrollSnapAlign: 'start' }}
            className="flex-none w-[310px] sm:w-[380px] md:w-[440px] border border-stone-800 bg-[#141413] group overflow-hidden shadow-sm"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-950">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 310px, 440px"
                className="object-cover object-center filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-transparent opacity-90" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-stone-800 text-[10px] font-mono tracking-widest text-[#cda45e]">
                0{idx + 1}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 bg-[#141413]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-mono mb-1 font-medium text-[#cda45e]">
                  {item.tagline}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  {item.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-light leading-relaxed text-stone-300">
                {item.description}
              </p>

              <div className="pt-3 border-t border-stone-800 flex flex-wrap gap-2">
                {item.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] px-2 py-1 font-mono tracking-wider text-stone-400 bg-stone-850 border border-stone-800"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
