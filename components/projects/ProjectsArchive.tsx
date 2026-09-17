'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Shield, Sparkles } from 'lucide-react';
import type { Project } from '@/types/project';
import { useBookingModal } from '@/components/forms/BookingModalContext';

interface ProjectsArchiveProps {
  projects: Project[];
}

export default function ProjectsArchive({ projects }: ProjectsArchiveProps) {
  const { openBookingModal } = useBookingModal();

  const verde = projects.find((p) => p.slug === 'aarvana-verde') || projects[0];
  const secondaryProjects = projects.filter((p) => p.slug !== 'aarvana-verde');

  return (
    <div className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* 1. Archive Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-stone-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Metadata breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              AARVANA DEVELOPERS
            </span>
            <span className="text-stone-600 font-mono text-xs">/</span>
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-stone-400">
              PROJECT COLLECTION
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40 hidden sm:block" />
          </div>

          {/* Large Editorial Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-normal uppercase leading-[0.9] tracking-tight text-stone-100">
                Other Worlds.
                <span className="block font-light italic text-stone-400 mt-2">
                  One Standard.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
                The Aarvana collection represents our enduring approach to architecture,
                landscape, and living. Each residence is conceived as an architectural
                response to its terrain—sculpting light, honoring native landscape, and
                offering absolute spatial privacy across South India.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>03 SANCTUARIES</span>
                <span>CHENNAI • COIMBATORE • BENGALURU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Flagship Project: Aarvana Verde (Strongest Visual Emphasis) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-10" aria-label="Flagship Project">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#cda45e] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Development</span>
          </div>
          <span className="text-xs font-mono text-stone-500">RESIDENCE 01 / 03</span>
        </div>

        <div className="border border-stone-800 bg-[#121211] p-6 sm:p-10 lg:p-12 relative rounded-sm shadow-2xl">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800/80 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#cda45e] animate-pulse" />
              <span className="text-stone-300 uppercase tracking-widest">Chennai Coastal Ridge</span>
              <span className="text-stone-600">•</span>
              <span className="text-stone-400">Off Old Mahabalipuram Road</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 border border-[#cda45e]/40 bg-[#cda45e]/10 text-[#cda45e] text-[10px] tracking-widest uppercase">
                Under Construction
              </span>
              <span className="text-stone-500">2028 Possession</span>
            </div>
          </div>

          {/* Large Architectural Image Frame */}
          <Link
            href={`/projects/${verde.slug}`}
            className="group block relative w-full aspect-[16/9] sm:aspect-[21/9] mt-8 overflow-hidden rounded-sm bg-stone-950 border border-stone-800"
            aria-label={`Explore flagship ${verde.name}`}
          >
            <Image
              src={verde.coverImage}
              alt={verde.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Floating Title on Image */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] tracking-[0.3em] font-mono text-[#cda45e] uppercase block mb-1">
                  FLAGSHIP ENCLAVE
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight">
                  {verde.name}
                </h2>
                <p className="text-xs sm:text-sm font-light text-stone-300 italic mt-1">
                  {verde.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-stone-700 group-hover:border-[#cda45e] group-hover:text-[#cda45e] transition-colors duration-300 self-start sm:self-auto">
                <span>Explore Enclave</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>

          {/* Editorial Project Overview & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 mt-6 border-t border-stone-800/80 items-start">
            <div className="lg:col-span-7">
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                {verde.description}
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="border border-stone-800/80 p-3 bg-stone-900/40">
                <span className="text-stone-500 block text-[10px] uppercase">Configurations</span>
                <span className="text-stone-200 mt-1 block font-medium">3 & 4 BHK Residences</span>
              </div>
              <div className="border border-stone-800/80 p-3 bg-stone-900/40">
                <span className="text-stone-500 block text-[10px] uppercase">Enclave Scale</span>
                <span className="text-stone-200 mt-1 block font-medium">24 Acres • 36 Residences</span>
              </div>
              <div className="border border-stone-800/80 p-3 bg-stone-900/40">
                <span className="text-stone-500 block text-[10px] uppercase">Spatial Range</span>
                <span className="text-stone-200 mt-1 block font-medium">2,450 – 3,850 Sq.Ft.</span>
              </div>
              <div className="border border-stone-800/80 p-3 bg-stone-900/40">
                <span className="text-stone-500 block text-[10px] uppercase">Regulatory Status</span>
                <span className="text-[#cda45e] mt-1 block font-medium">{verde.reraNumber}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-stone-800/80">
            <Link
              href={`/projects/${verde.slug}`}
              className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Explore Flagship Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => openBookingModal('Aarvana Verde — 3 & 4 BHK')}
              className="px-8 py-4 border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
            >
              Book Private Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* 3. Secondary Projects Collection (Asymmetrical Editorial Layout) */}
      <section className="py-20 md:py-28 border-t border-stone-800/80 bg-[#090908]" aria-label="Regional Sanctuaries">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#cda45e] uppercase mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Regional Sanctuaries</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl uppercase text-stone-100 font-normal tracking-tight">
                Foothills & Urban Atriums
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              Complementary developments sharing the same dedication to daylight,
              landscape integration, and generous private space.
            </p>
          </div>

          {/* Asymmetric 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {secondaryProjects.map((project, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={project.slug}
                  className={`flex flex-col ${isFirst ? 'lg:col-span-5' : 'lg:col-span-7'}`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col h-full border border-stone-800 bg-[#121211] hover:border-stone-600 transition-all duration-500 overflow-hidden shadow-sm"
                    aria-label={`Explore ${project.name}`}
                  >
                    {/* Editorial Image Frame */}
                    <div
                      className={`relative w-full overflow-hidden bg-stone-950 ${
                        isFirst ? 'aspect-[4/5]' : 'aspect-[16/10]'
                      }`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        sizes={isFirst ? '(max-width: 1024px) 100vw, 40vw' : '(max-width: 1024px) 100vw, 60vw'}
                        className="object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent opacity-80" />

                      {/* Status Tag */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-stone-800 text-[10px] uppercase tracking-widest text-[#cda45e] font-mono">
                        {project.status === 'completed'
                          ? 'Completed (2024)'
                          : 'Upcoming • 2027 Possession'}
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-stone-700 flex items-center justify-center text-stone-300 group-hover:text-white group-hover:border-[#cda45e] transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      {/* City Badge */}
                      <div className="absolute bottom-4 left-4 text-xs font-mono uppercase tracking-widest text-stone-400">
                        {project.city}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#cda45e] transition-colors duration-300">
                            {project.name}
                          </h3>
                        </div>
                        <p className="text-xs font-mono text-stone-400 mb-4">
                          {project.location}
                        </p>
                        <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Metadata Row */}
                      <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span>{project.configurations.join(' • ')}</span>
                        <span className="text-stone-500">{project.areaRange} {project.areaUnit.toUpperCase()}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Architectural Archive Comparison Matrix */}
      <section className="py-20 border-t border-stone-800/80 bg-[#0c0c0b]" aria-label="Archive Index">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              ARCHITECTURAL PORTFOLIO INDEX
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-stone-800 text-stone-500 uppercase tracking-wider text-[10px]">
                  <th className="pb-4 font-normal">Project</th>
                  <th className="pb-4 font-normal">Location</th>
                  <th className="pb-4 font-normal">Typology</th>
                  <th className="pb-4 font-normal">Density</th>
                  <th className="pb-4 font-normal">Spatial Range</th>
                  <th className="pb-4 font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 text-stone-300">
                {projects.map((p) => (
                  <tr key={p.slug} className="hover:bg-stone-900/40 transition-colors">
                    <td className="py-4 font-serif text-base text-white">
                      <Link href={`/projects/${p.slug}`} className="hover:text-[#cda45e] transition-colors">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-4 text-stone-400">{p.city}</td>
                    <td className="py-4 text-stone-400">{p.configurations[0]}</td>
                    <td className="py-4 text-stone-400">{p.totalUnits} Units / {p.totalFloors} Floors</td>
                    <td className="py-4 text-stone-400">{p.areaRange} SQ.FT.</td>
                    <td className="py-4">
                      <span className="text-[#cda45e]">
                        {p.possession}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fictional Portfolio Disclaimer */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center gap-3 text-[11px] font-mono text-stone-500">
            <Shield className="w-4 h-4 text-stone-600 shrink-0" />
            <span>
              Aarvana Developers portfolio concept. RERA registrations, specifications, and renderings are curated for demonstration purposes.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Page End Large Call to Action */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#080808] text-center relative overflow-hidden" aria-label="Archive Call to Action">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.35em] text-[#cda45e] uppercase font-mono font-medium block mb-4">
            AARVANA FLAGSHIP INVITATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase text-white tracking-tight leading-[0.92] mb-6">
            Explore Aarvana Verde.
            <span className="block font-light italic text-stone-400 mt-2">
              Book A Private Site Visit.
            </span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            Our private advisory team is available to arrange private on-site walks,
            discuss spatial specifications, and present comprehensive floor plan folios.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/projects/${verde.slug}`}
              className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Enter Flagship Experience</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => openBookingModal('Aarvana Verde — 3 & 4 BHK')}
              className="px-8 py-4 border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
            >
              Book A Private Site Visit
            </button>
          </div>
          <div className="mt-12 text-xs font-mono text-stone-500">
            Demo Concierge Channel: +91 44 2830 9000 • privateclients@aarvanadevelopers.com (Portfolio Concept)
          </div>
        </div>
      </section>
    </div>
  );
}
