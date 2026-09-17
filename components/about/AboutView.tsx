'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Shield, Sparkles } from 'lucide-react';
import { useBookingModal } from '@/components/forms/BookingModalContext';

const pillars = [
  {
    number: '01',
    title: 'FORM FOLLOWS NATURE',
    subtitle: 'Topographic Resonance',
    description:
      'Rather than grading land into flat speculative plots, we step architectural volumes around natural slopes, ancient tree root zones, and natural drainage swales.',
    meta: 'Terraced Massing • Native Land Contour Alignment',
  },
  {
    number: '02',
    title: 'ENDURING MATERIALITY',
    subtitle: 'Authentic Textures',
    description:
      'We specify natural basalt stone, hand-finished lime plaster, solid teak millwork, and copper details that weather gracefully over decades rather than deteriorating synthetic claddings.',
    meta: 'Natural Basalt • Hand-Dressed Stone • Solid Teak',
  },
  {
    number: '03',
    title: 'LANDSCAPE AS LIVING ARCHITECTURE',
    subtitle: 'Preserved Indigenous Canopy',
    description:
      'Across all developments, we dedicate over 75% of ground to undisturbed soil, mature native trees, and sensory bioswales. The landscape is not a decorative perimeter; it is the core of the residence.',
    meta: '78% Preserved Open Ground • Mature Trees',
  },
  {
    number: '04',
    title: 'LOW-DENSITY INTIMACY',
    subtitle: 'Generous Spatial Breathing',
    description:
      'We strictly constrain unit density. At Aarvana Verde, only 36 homes inhabit 24 acres. Each residence enjoys dedicated acoustic buffers, private entries, and secluded courtyards.',
    meta: '36 Enclave Homes • 24 Acres Total Ground',
  },
];

const methods = [
  {
    phase: 'PHASE 01',
    name: 'Topographic & Solar Calibrations',
    description:
      'We study local sun-path vectors, coastal morning light, and prevailing breeze corridors for up to twelve months prior to drafting structural lines.',
  },
  {
    phase: 'PHASE 02',
    name: 'Tactile Material Sampling',
    description:
      'Every stone slab, lime mix, and timber batch is test-weathered on-site. We examine how each surface responds to regional monsoon humidity and afternoon sun.',
  },
  {
    phase: 'PHASE 03',
    name: 'Low-Impact Ground Stewardship',
    description:
      'Foundations are engineered to minimize tree root disturbance and preserve natural hydrological drainage across the entire land parcel.',
  },
  {
    phase: 'PHASE 04',
    name: 'One-to-One Client Stewardship',
    description:
      'Direct client advisory from initial blueprint customization to interior millwork fitting and ongoing estate maintenance guidance.',
  },
];

export default function AboutView() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* 1. About Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-stone-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              AARVANA DEVELOPERS
            </span>
            <span className="text-stone-600 font-mono text-xs">/</span>
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-stone-400">
              PRACTICE & ETHOS
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-normal uppercase leading-[0.9] tracking-tight text-stone-100">
                Architectural
                <span className="block font-light italic text-stone-400 mt-2">
                  Integrity.
                </span>
                Over Scale.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
                We do not build for speculative volume. Aarvana was founded on a singular
                conviction: that a home should be an enduring sanctuary carved out of the
                natural world, built with authentic materials, and designed to age with dignity
                across generations.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>ESTABLISHED ETHOS</span>
                <span>CHENNAI • COIMBATORE • BENGALURU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Philosophy & Photography */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10" aria-label="Our Philosophy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#cda45e] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quiet Conviction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal uppercase leading-tight text-white">
              Homes That Weather
              <span className="block italic text-stone-400 font-light">With Dignity.</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Modern luxury development often trades permanence for speed, relying on synthetic
              veneers that look pristine on delivery but deteriorate under the tropical sun.
            </p>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              At Aarvana, we select materials that embrace age: honed basalt, deep-toned teak,
              rough-cast lime, and architectural bronze. Our buildings gain soul as the years pass,
              becoming richer in patina and deeper in quiet character.
            </p>
            <div className="pt-4 border-t border-stone-800 flex items-center gap-6 text-xs font-mono text-stone-400">
              <div>
                <span className="block font-serif text-2xl text-white">24 ACRES</span>
                <span className="text-[10px] text-stone-500 uppercase">Verde Preserved Canopy</span>
              </div>
              <div className="h-8 w-px bg-stone-800" />
              <div>
                <span className="block font-serif text-2xl text-white">36 RESIDENCES</span>
                <span className="text-[10px] text-stone-500 uppercase">Low Density Commitment</span>
              </div>
              <div className="h-8 w-px bg-stone-800" />
              <div>
                <span className="block font-serif text-2xl text-white">100%</span>
                <span className="text-[10px] text-stone-500 uppercase">Low-Density Enclaves</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-sm border border-stone-800 bg-stone-950 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
              alt="Aarvana Architectural Practice and Design Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.88] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="text-xs font-mono text-stone-300">Aarvana Design Studio • Blueprint & Model Gallery</span>
              <span className="text-[10px] font-mono text-[#cda45e] uppercase">ARCHITECTURAL PRACTICE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Four Pillars of Aarvana */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#090908]" aria-label="The Four Pillars">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              FOUNDATIONAL PILLARS
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase leading-[0.92] tracking-tight text-white">
              The Four Principles.
            </h2>
            <p className="mt-4 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Every design decision across our residential collection is filtered through
              four uncompromising criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-stone-800 bg-[#121211] p-8 sm:p-10 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#cda45e] tracking-widest block mb-4">
                    PILLAR {pillar.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase font-normal mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-500">
                  {pillar.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Studio Craft & Methodology */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#0c0c0b]" aria-label="Craft and Method">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              CRAFT & DISCIPLINE
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase leading-[0.92] tracking-tight text-white mb-6">
                How We Create.
              </h2>
              <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                We believe exceptional architecture demands patient observation. Before a single
                foundation trench is dug, our architects and landscape botanists embed themselves on
                the land to record seasonal patterns.
              </p>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-800 bg-stone-950">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Natural Material Selection and Detailing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {methods.map((m) => (
                <div
                  key={m.phase}
                  className="border border-stone-800 bg-[#121211] p-6 sm:p-8 rounded-sm"
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#cda45e] uppercase block mb-2">
                    {m.phase}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                    {m.name}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fictional Portfolio Concept Disclosure */}
      <section className="py-16 border-t border-stone-800 bg-[#090908]" aria-label="Portfolio Disclosure">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="border border-stone-800/80 bg-[#121211] p-6 sm:p-8 rounded-sm flex items-start gap-4">
            <Shield className="w-5 h-5 text-[#cda45e] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs font-mono text-stone-400">
              <span className="text-stone-200 font-medium uppercase tracking-wider block">
                PORTFOLIO DEMONSTRATION NOTICE
              </span>
              <p className="text-stone-400 font-light leading-relaxed">
                Aarvana Developers and Aarvana Verde are fictional portfolio concepts developed to showcase
                world-class real-estate digital design, frontend engineering, and architectural art direction.
                All RERA numbers, architectural data points, and imagery are presented strictly for portfolio
                and conceptual demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Call to Action */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#080808] text-center" aria-label="About CTA">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.35em] text-[#cda45e] uppercase font-mono font-medium block mb-4">
            PRIVATE CLIENT ADVISORY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase text-white tracking-tight leading-[0.92] mb-6">
            Experience Our Practice.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            We welcome serious patrons to explore our architectural archive, review spatial blueprints,
            or arrange a private walk across our flagship Verde terrain in Chennai.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Explore Projects Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => openBookingModal('Aarvana Developers — Advisory Consultation')}
              className="px-8 py-4 border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
            >
              Book A Private Consultation
            </button>
          </div>

          <div className="mt-12 text-xs font-mono text-stone-500">
            Private Advisory: +91 44 2830 9000 • privateclients@aarvanadevelopers.com
          </div>
        </div>
      </section>
    </div>
  );
}
