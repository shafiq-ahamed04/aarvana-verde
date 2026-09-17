'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectCollection() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#0a0a09] text-stone-100 overflow-hidden"
      aria-label="Project Collection"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            09 / DEVELOPER COLLECTION
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-stone-100">
              Other Worlds.
              <span className="block font-light italic text-stone-400">
                One Standard.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-light max-w-md leading-relaxed text-stone-400">
            From the coastal ridge of Chennai to the Nilgiri foothills and Bengaluru’s garden enclaves—each
            sanctuary reflects the singular architectural conviction of Aarvana.
          </p>
        </div>

        {/* Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group flex flex-col border border-stone-800 bg-[#131312] hover:border-stone-600 transition-all duration-500 overflow-hidden shadow-sm"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-950">
                <Image
                  src={item.coverImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-stone-800 text-[10px] uppercase tracking-widest text-[#cda45e] font-mono">
                  {item.city} • {item.status.replace('-', ' ')}
                </div>

                {/* Arrow Icon Reveal */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-black/70 backdrop-blur-sm border border-stone-800 rounded-full flex items-center justify-center text-stone-300 group-hover:text-black group-hover:bg-[#cda45e] group-hover:border-[#cda45e] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#131312]">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#cda45e] transition-colors mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-light mt-2 line-clamp-2 leading-relaxed text-stone-300">
                    {item.tagline} — {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>{item.areaRange} {item.areaUnit}</span>
                  <span className="font-medium text-stone-300">
                    {item.priceRange}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
