'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/types/project';
import { getAmenitiesBySlugs } from '@/data/amenities';
import { useBookingModal } from '@/components/forms/BookingModalContext';

interface RegionalProjectDetailProps {
  project: Project;
}

export default function RegionalProjectDetail({ project }: RegionalProjectDetailProps) {
  const { openBookingModal } = useBookingModal();
  const curatedAmenities = getAmenitiesBySlugs(project.amenities);

  return (
    <article className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* 1. Hero */}
      <section className="relative w-full min-h-[85vh] flex items-end pb-16 md:pb-24 pt-36 px-6 md:px-10 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.78] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/40 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#cda45e] mb-6">
            <span>AARVANA DEVELOPERS</span>
            <span className="text-stone-500">•</span>
            <span>{project.city.toUpperCase()}</span>
            <span className="text-stone-500">•</span>
            <span>{project.status === 'completed' ? 'COMPLETED ENCLAVE' : 'UPCOMING SANCTUARY'}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal uppercase leading-[0.88] tracking-tight text-white mb-6">
              Aarvana
              <span className="block italic text-stone-300 font-light">{project.name}</span>
            </h1>

            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-stone-300 mb-10 max-w-xl">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBookingModal(`${project.name} — ${project.configurations[0]}`)}
                className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Inquire About Residences</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/projects"
                className="px-8 py-4 border border-stone-600 hover:border-stone-300 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm"
              >
                <span>Back to Project Archive</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Architectural Metrics */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10" aria-label="Project Overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
                SANCTUARY SPECIFICATIONS
              </span>
              <div className="h-[1px] w-12 bg-[#cda45e]/50" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase leading-[0.92] tracking-tight text-white mb-6">
              Conceived For
              <span className="block font-light italic text-stone-400">
                Its Natural Setting.
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-800/80">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="border-l-2 border-[#cda45e] pl-4 py-1">
                  <h4 className="text-sm font-medium text-white">{hl.title}</h4>
                  <p className="text-xs text-stone-400 mt-1 font-light leading-relaxed">{hl.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-[#cda45e]" />
              <span>{project.location}</span>
              <span className="text-stone-600">•</span>
              <span>RERA: {project.reraNumber}</span>
            </div>
          </div>

          {/* Architectural Metrics */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-px bg-stone-800 border border-stone-800">
            <div className="bg-[#10100f] p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">TYPOLOGY</span>
              <span className="font-serif text-2xl sm:text-3xl text-white font-normal block mt-2">
                {project.configurations[0]}
              </span>
              <span className="text-xs text-stone-400 font-light mt-1 block">{project.configurations[1]}</span>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">SPATIAL RANGE</span>
              <span className="font-serif text-2xl sm:text-3xl text-white font-normal block mt-2">
                {project.areaRange}
              </span>
              <span className="text-xs text-stone-400 font-light mt-1 block">Square Feet Living Area</span>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">ENCLAVE SCALE</span>
              <span className="font-serif text-2xl sm:text-3xl text-white font-normal block mt-2">
                {project.totalUnits} Units
              </span>
              <span className="text-xs text-stone-400 font-light mt-1 block">{project.totalFloors} Stepped Floors</span>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">POSSESSION</span>
              <span className="font-serif text-2xl sm:text-3xl text-[#cda45e] font-normal block mt-2">
                {project.possession}
              </span>
              <span className="text-xs text-stone-400 font-light mt-1 block">{project.status.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Amenities */}
      {curatedAmenities.length > 0 && (
        <section className="py-24 md:py-36 border-t border-stone-800 bg-[#090908]" aria-label="Curated Amenities">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
                CURATED ENVIRONMENTS
              </span>
              <div className="h-[1px] w-12 bg-[#cda45e]/50" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-white tracking-tight mb-12">
              Designed For Stillness & Vitality
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {curatedAmenities.map((amenity) => (
                <div
                  key={amenity.slug}
                  className="border border-stone-800 bg-[#121211] rounded-sm overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[4/3] bg-stone-950">
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-black/60 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#cda45e]">
                      {amenity.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-white font-normal mb-1">{amenity.name}</h3>
                      <p className="text-xs text-[#cda45e] font-mono mb-2">{amenity.tagline}</p>
                      <p className="text-xs text-stone-400 font-light leading-relaxed">{amenity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Inquiry & Flagship Cross-Link */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#080808] text-center" aria-label="Inquire">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.35em] text-[#cda45e] uppercase font-mono font-medium block mb-4">
            PRIVATE CONSULTATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase text-white tracking-tight leading-[0.92] mb-6">
            Inquire For {project.name}.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            Connect directly with our private client advisory for floor plans, spatial folios,
            or to arrange an in-person consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal(`${project.name} — Inquiries`)}
              className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer"
            >
              Book Private Consultation
            </button>
            <Link
              href="/projects/aarvana-verde"
              className="px-8 py-4 border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              Explore Flagship: Aarvana Verde →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
