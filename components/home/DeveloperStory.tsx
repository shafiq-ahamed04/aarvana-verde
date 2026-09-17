'use client';

import Image from 'next/image';

const stats = [
  { value: '30+', label: 'Years of Practice', detail: 'Founded in 1994 with an uncompromising architectural ethos.' },
  { value: '42', label: 'Delivered Projects', detail: 'Landmark residential and institutional developments across South India.' },
  { value: '12,000+', label: 'Resident Families', detail: 'Generations who call Aarvana communities their lifelong sanctuary.' },
  { value: '18M+', label: 'Sq.Ft. Built', detail: 'Engineered with structural longevity, lasting finishes, and natural stone.' },
];

export default function DeveloperStory() {
  return (
    <section
      id="developer"
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#0c0c0b] text-stone-100 overflow-hidden"
      aria-label="Developer Heritage and Craftsmanship"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            08 / DEVELOPER HERITAGE
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Headline & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-stone-100">
              Built On
              <span className="block font-light italic text-stone-400">
                Experience.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 pt-2">
            <p className="font-serif text-xl sm:text-2xl font-light leading-relaxed text-stone-200">
              Three decades of architectural restraint, honest materiality, and uncompromising engineering.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-light text-stone-400">
              We do not mass-produce buildings. Every Aarvana project is an individual architectural
              response to its land, wind patterns, and local sunlight. We build homes meant to weather
              beautifully across generations.
            </p>
          </div>
        </div>

        {/* Monumental Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-stone-800">
          {stats.map((item) => (
            <div key={item.label} className="space-y-2">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal block text-white">
                {item.value}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] font-mono font-medium text-[#cda45e]">
                {item.label}
              </p>
              <p className="text-[11px] font-light leading-relaxed text-stone-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Craftsmanship Visual Triptych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="relative aspect-[4/5] border border-stone-800 bg-stone-900 overflow-hidden group shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
              alt="Raw architectural concrete and timber craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="text-[10px] tracking-widest text-[#f5d082] uppercase font-mono font-medium">
                Materiality
              </span>
              <h3 className="font-serif text-xl text-white">
                Honest Architectural Concrete
              </h3>
              <p className="text-xs text-stone-300 font-light">
                Form-finished surfaces that age with timeless character.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] border border-stone-800 bg-stone-900 overflow-hidden group shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
              alt="Natural stone masonry craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="text-[10px] tracking-widest text-[#f5d082] uppercase font-mono font-medium">
                Precision
              </span>
              <h3 className="font-serif text-xl text-white">
                Hand-Dressed Granite Masonry
              </h3>
              <p className="text-xs text-stone-300 font-light">
                Locally sourced South Indian stone hand-hewn by regional artisans.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] border border-stone-800 bg-stone-900 overflow-hidden group shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
              alt="Landscape canopy integration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="text-[10px] tracking-widest text-[#f5d082] uppercase font-mono font-medium">
                Ecology
              </span>
              <h3 className="font-serif text-xl text-white">
                Preserved Flora & Soil Health
              </h3>
              <p className="text-xs text-stone-300 font-light">
                Thoughtfully preserved natural terrain allowing native root systems to flourish.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Context Notice */}
        <div className="mt-10 p-4 border border-stone-800/60 bg-stone-900/30 text-stone-400 text-center">
          <p className="text-[11px] font-mono">
            * Note: Developer figures and legacy metrics are illustrative demo content created for this architectural portfolio presentation.
          </p>
        </div>
      </div>
    </section>
  );
}
