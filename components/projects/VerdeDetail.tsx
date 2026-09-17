'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import {
  ArrowUpRight,
  ArrowDown,
  Compass,
  Download,
  Phone,
  MessageSquare,
  Sparkles,
  Maximize2,
  ShieldCheck,
  ChevronRight,
  X,
  Layers,
  MapPin,
  Clock,
} from 'lucide-react';
import type { Project } from '@/types/project';
import { amenities } from '@/data/amenities';
import { useBookingModal } from '@/components/forms/BookingModalContext';

interface VerdeDetailProps {
  project: Project;
}

interface Hotspot {
  id: string;
  name: string;
  dimensions: string;
  orientation: string;
  description: string;
  x: number;
  y: number;
  highlightPath: string;
}

const hotspots: Hotspot[] = [
  {
    id: 'living',
    name: 'Living Pavilion',
    dimensions: '28\'0" × 19\'6"',
    orientation: 'North-East Exposure • Spacious Height',
    description: 'Generous volume flanked by expansive floor-to-ceiling glass walls that slide open to seamlessly connect the interior with the landscaped lawn.',
    x: 42,
    y: 46,
    highlightPath: 'M 180 180 L 460 180 L 460 380 L 180 380 Z',
  },
  {
    id: 'dining',
    name: 'Formal Dining Salon',
    dimensions: '18\'4" × 15\'2"',
    orientation: 'East-Facing • Morning Daylight',
    description: 'Positioned adjacent to the central water court, designed to comfortably seat twelve guests amidst ambient reflection and soft filtered daylight.',
    x: 62,
    y: 38,
    highlightPath: 'M 480 180 L 720 180 L 720 320 L 480 320 Z',
  },
  {
    id: 'master-suite',
    name: 'Master Suite Sanctuary',
    dimensions: '24\'6" × 18\'0"',
    orientation: 'South-East Seclusion • Private Terrace',
    description: 'A private interior retreat featuring dual walk-in dressing alcoves, solid wood floors, and a five-fixture ensuite bath with freestanding stone tub.',
    x: 32,
    y: 72,
    highlightPath: 'M 120 400 L 380 400 L 380 620 L 120 620 Z',
  },
  {
    id: 'balcony',
    name: 'Cantilevered Balcony',
    dimensions: '32\'0" × 10\'0"',
    orientation: 'Forest Canopy Vistas • Shaded Transitions',
    description: 'Deep sheltered outdoor terrace finished in non-slip stone, designed to provide natural shading and outdoor dining throughout the day.',
    x: 50,
    y: 20,
    highlightPath: 'M 180 80 L 720 80 L 720 160 L 180 160 Z',
  },
  {
    id: 'kitchen',
    name: 'Gourmet Kitchen & Scullery',
    dimensions: '16\'8" × 14\'4"',
    orientation: 'North-Facing • Natural Ventilation',
    description: 'Dry show kitchen with natural marble island seamlessly linked to an enclosed wet preparation kitchen and pantry space.',
    x: 74,
    y: 56,
    highlightPath: 'M 480 340 L 720 340 L 720 540 L 480 540 Z',
  },
  {
    id: 'garden',
    name: 'Private Courtyard Garden',
    dimensions: '36\'0" × 22\'0"',
    orientation: 'Open to Sky • Landscaped Edges',
    description: 'Sunken landscaped oasis with indigenous flowering trees, stone water fountain, and integrated outdoor seating alcove.',
    x: 58,
    y: 74,
    highlightPath: 'M 400 400 L 720 400 L 720 620 L 400 620 Z',
  },
];

const designChapters = [
  {
    id: 'form',
    number: '01',
    title: 'FORM',
    subtitle: 'Stepped Volumetric Terraces',
    description:
      'Low-density stepped massing calibrated to the gentle natural slope of the ridge. The horizontal cantilevered overhangs shade full-height glass expanses while preserving unbroken horizon views across the forest canopy.',
    meta: 'Cantilevered Profile • Natural Airflow Pathways',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'light',
    number: '02',
    title: 'LIGHT',
    subtitle: 'Calibrated Sun-Path Inception',
    description:
      'Each residence is oriented to welcome gentle morning illumination while deflecting harsh afternoon solar intensity. Deep recessed balconies, vertical timber louvers, and shaded corridors create comfortable natural daylight throughout.',
    meta: 'Diffused Daylight • Shaded Overhangs',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'landscape',
    number: '03',
    title: 'LANDSCAPE',
    subtitle: '24-Acre Native Canopy',
    description:
      'Over 78% preserved open ground with mature indigenous banyan, teak, and neem trees. Bioswales, sunken gravel walking trails, and reflective water mirrors create a secluded living environment intimately intertwined with living botany.',
    meta: 'Preserved Indigenous Canopy • Reflective Water Mirrors',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'space',
    number: '04',
    title: 'SPACE',
    subtitle: 'Expansive Living Volumes',
    description:
      'Double-height pavilions and generous ceiling heights dissolve the barrier between inside and outside. Private master suites are intentionally separated from entertainment zones to guarantee complete sanctuary.',
    meta: 'Spacious Volumes • Spatial Privacy',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function VerdeDetail({ project }: VerdeDetailProps) {
  const { openBookingModal } = useBookingModal();

  // Hero entrance animation refs
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // States
  const [selectedPlan, setSelectedPlan] = useState<'3bhk' | '4bhk'>('4bhk');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('living');
  const [activeAmenityIndex, setActiveAmenityIndex] = useState<number>(0);
  const [selectedLocationPoint, setSelectedLocationPoint] = useState<string>('International School');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];
  const activeAmenity = amenities[activeAmenityIndex] || amenities[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroImageRef.current && heroContentRef.current) {
        gsap.set(heroImageRef.current, { scale: 1.08, opacity: 0 });
        gsap.set(heroContentRef.current.children, { y: 24, opacity: 0 });

        tl.to(heroImageRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out',
        }).to(
          heroContentRef.current.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=0.8'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleBrochureDownload = () => {
    openBookingModal('Aarvana Verde — Architectural Folio');
  };

  return (
    <article className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* 1. PROJECT DETAIL HERO */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[92vh] flex items-end pb-16 md:pb-24 pt-36 px-6 md:px-10 overflow-hidden border-b border-stone-800"
        aria-label="Aarvana Verde Presentation Hero"
      >
        {/* Full Viewport Architectural Background */}
        <div ref={heroImageRef} className="absolute inset-0 z-0">
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

        {/* Hero Content Overlay */}
        <div ref={heroContentRef} className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Minimal Top Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#cda45e] mb-6">
            <span>AARVANA DEVELOPERS</span>
            <span className="text-stone-500">•</span>
            <span>CHENNAI</span>
            <span className="text-stone-500">•</span>
            <span>3 & 4 BHK RESIDENCES</span>
          </div>

          {/* Large Title */}
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal uppercase leading-[0.88] tracking-tight text-white mb-6">
              Aarvana
              <span className="block italic text-stone-300 font-light">Verde</span>
            </h1>

            {/* Supporting Line */}
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-stone-300 mb-10 max-w-xl">
              Where the city ends. Your life begins.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBookingModal('Aarvana Verde — 3 & 4 BHK')}
                className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book A Private Site Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleBrochureDownload}
                className="px-8 py-4 border border-stone-600 hover:border-stone-300 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer bg-black/40 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-[#cda45e]" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 md:right-10 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-stone-400">
          <span>DISCOVER ARCHITECTURE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#cda45e] animate-bounce" />
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10" aria-label="Project Overview">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            01 / ARCHITECTURAL OVERVIEW
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-stone-100">
              A Home
              <span className="block font-light italic text-stone-400">
                Built Around
              </span>
              Your Life.
            </h2>
            <p className="mt-8 text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              {project.description}
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-stone-400">
              <span className="w-2 h-2 rounded-full bg-[#cda45e]" />
              <span>Regulatory Status: {project.reraNumber}</span>
            </div>
          </div>

          {/* Architectural Facts (Numbers as data points, not generic cards) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-px bg-stone-800 border border-stone-800">
            <div className="bg-[#10100f] p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">CONFIGURATIONS</span>
              <div className="mt-4">
                <span className="font-serif text-3xl sm:text-4xl text-white font-normal block">3 & 4 BHK</span>
                <span className="text-xs text-stone-400 font-light mt-1 block">Sanctuary & Grand Estate</span>
              </div>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">SPATIAL RANGE</span>
              <div className="mt-4">
                <span className="font-serif text-3xl sm:text-4xl text-white font-normal block">2,450–3,850</span>
                <span className="text-xs text-stone-400 font-light mt-1 block">Square Feet Living Area</span>
              </div>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">CANOPY TERRAIN</span>
              <div className="mt-4">
                <span className="font-serif text-3xl sm:text-4xl text-white font-normal block">24 ACRES</span>
                <span className="text-xs text-stone-400 font-light mt-1 block">Preserved Forest Ridge</span>
              </div>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">ENCLAVE DENSITY</span>
              <div className="mt-4">
                <span className="font-serif text-3xl sm:text-4xl text-white font-normal block">36 UNITS</span>
                <span className="text-xs text-stone-400 font-light mt-1 block">Low-Density Intimacy</span>
              </div>
            </div>

            <div className="bg-[#10100f] p-6 sm:p-8 col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">POSSESSION SCHEDULE</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#cda45e] font-normal block mt-1">
                  2028 POSSESSION
                </span>
              </div>
              <button
                onClick={() => openBookingModal('Aarvana Verde — 3 & 4 BHK')}
                className="text-xs uppercase tracking-widest font-mono text-stone-300 hover:text-[#cda45e] transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <span>Request Spatial Folio</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DESIGN STORY (Four Editorial Chapters: Form, Light, Landscape, Space) */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#090908]" aria-label="The Design Story">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              02 / THE DESIGN PHILOSOPHY
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-white">
              Four Pillars.
              <span className="block font-light italic text-stone-400">
                One Cohesive Vision.
              </span>
            </h2>
            <p className="mt-6 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Every curve, overhang, and orientation at Verde was informed by the micro-topography
              of the land. Architecture designed to disappear into landscape.
            </p>
          </div>

          {/* 4 Editorial Chapter Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {designChapters.map((chapter) => (
              <div
                key={chapter.id}
                className="border border-stone-800 bg-[#121211] overflow-hidden rounded-sm group flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-950">
                  <Image
                    src={chapter.image}
                    alt={chapter.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center filter brightness-[0.85] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-stone-800 text-[10px] font-mono uppercase tracking-widest text-[#cda45e]">
                    CHAPTER {chapter.number}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white uppercase mb-1">
                      {chapter.title}
                    </h3>
                    <p className="text-xs font-mono text-[#cda45e] uppercase tracking-wider mb-4">
                      {chapter.subtitle}
                    </p>
                    <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-500">
                    {chapter.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESIDENCES (Vector Blueprint System & Floor Plan Visual) */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#0c0c0b]" aria-label="Residences">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              03 / SPATIAL ARCHITECTURE
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-white">
                Designed Around
                <span className="block font-light italic text-stone-400">
                  How You Live.
                </span>
              </h2>
            </div>

            {/* Residence Plan Switcher */}
            <div className="flex items-center border border-stone-800 bg-stone-900/80 p-1 rounded-sm self-start lg:self-auto">
              <button
                onClick={() => setSelectedPlan('4bhk')}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  selectedPlan === '4bhk'
                    ? 'bg-stone-100 text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                4 BHK Courtyard Villa (3,850 Sq.Ft.)
              </button>
              <button
                onClick={() => setSelectedPlan('3bhk')}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  selectedPlan === '3bhk'
                    ? 'bg-stone-100 text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                3 BHK Pavilion (2,450 Sq.Ft.)
              </button>
            </div>
          </div>

          {/* Blueprint & Zone Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Canvas: Vector CAD Blueprint */}
            <div className="lg:col-span-8 border border-stone-800 p-4 sm:p-8 rounded-sm bg-[#121211] shadow-2xl">
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-6 text-stone-300 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#cda45e]" />
                  <span className="uppercase tracking-widest font-medium">
                    {selectedPlan === '4bhk' ? 'Plan C-04 / Courtyard Villa' : 'Plan B-02 / Pavilion Residence'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#cda45e]" /> North-East Orientation
                  </span>
                  <span>•</span>
                  <span>Scale 1:100 CAD</span>
                </div>
              </div>

              {/* Vector SVG Blueprint Canvas */}
              <div className="relative w-full aspect-[4/3] border border-stone-800/70 overflow-hidden flex items-center justify-center rounded-sm bg-[#0f0f0e]">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#cda45e 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <svg
                  viewBox="0 0 800 700"
                  className="w-full h-full p-6 select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Structural Walls */}
                  <rect
                    x="100"
                    y="60"
                    width="640"
                    height="580"
                    fill="none"
                    stroke="#3e3c38"
                    strokeWidth="6"
                  />

                  {/* Active Room Highlight */}
                  <path
                    d={activeHotspot.highlightPath}
                    fill="rgba(205, 164, 94, 0.20)"
                    stroke="#cda45e"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    className="transition-all duration-500 ease-out"
                  />

                  {/* Interior Walls */}
                  <g stroke="#4a4742" strokeWidth="3" fill="none">
                    <line x1="180" y1="160" x2="720" y2="160" />
                    <line x1="460" y1="160" x2="460" y2="380" strokeDasharray="6 4" />
                    <line x1="480" y1="330" x2="720" y2="330" />
                    <line x1="100" y1="380" x2="460" y2="380" />
                    <line x1="390" y1="380" x2="390" y2="640" />
                  </g>

                  {/* Blueprint Labels */}
                  <g fill="#777" fontSize="11" fontFamily="sans-serif" letterSpacing="1">
                    <text x="280" y="270">LIVING</text>
                    <text x="570" y="250">DINING</text>
                    <text x="210" y="520">MASTER SUITE</text>
                    <text x="420" y="125">VERANDA</text>
                    <text x="570" y="440">KITCHEN</text>
                    <text x="520" y="530">COURTYARD</text>
                  </g>

                  {/* Hotspots */}
                  {hotspots.map((spot) => {
                    const isActive = spot.id === activeHotspotId;
                    const cx = (spot.x / 100) * 800;
                    const cy = (spot.y / 100) * 700;

                    return (
                      <g
                        key={spot.id}
                        onClick={() => setActiveHotspotId(spot.id)}
                        className="cursor-pointer group"
                        tabIndex={0}
                        role="button"
                        aria-label={`Select ${spot.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setActiveHotspotId(spot.id);
                          }
                        }}
                      >
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isActive ? 18 : 10}
                          fill={isActive ? 'rgba(205, 164, 94, 0.25)' : 'rgba(0, 0, 0, 0.04)'}
                          className={isActive ? 'animate-ping' : ''}
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isActive ? 8 : 5}
                          fill={isActive ? '#cda45e' : '#777'}
                          stroke="#000"
                          strokeWidth="1.5"
                          opacity={isActive ? 1 : 0.6}
                          className="transition-all duration-300 group-hover:scale-125"
                        />
                        <rect
                          x={cx - 36}
                          y={cy - 28}
                          width="72"
                          height="18"
                          fill="#111"
                          stroke={isActive ? '#cda45e' : '#333'}
                          strokeWidth="1"
                          rx="2"
                          opacity={isActive ? 1 : 0.4}
                          className="transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <text
                          x={cx}
                          y={cy - 16}
                          textAnchor="middle"
                          fill={isActive ? '#fff' : '#888'}
                          fontSize="9"
                          fontFamily="monospace"
                          letterSpacing="0.5"
                          fontWeight={isActive ? 'bold' : 'normal'}
                        >
                          {spot.id.toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <p className="text-[11px] mt-3 font-mono text-center sm:text-left text-stone-500">
                Interactive Vector Blueprint — Tap any zone to examine spatial dimensions and layout details.
              </p>
            </div>

            {/* Right Column: Zone Inspector */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Zone Switchers */}
              <div className="grid grid-cols-2 gap-2">
                {hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    className={`p-2.5 text-left border text-xs transition-all duration-200 cursor-pointer ${
                      activeHotspotId === spot.id
                        ? 'border-[#cda45e] bg-stone-900 text-white font-medium'
                        : 'border-stone-800 bg-[#121211] text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <span className="block text-[10px] font-mono text-stone-500">{spot.dimensions}</span>
                    <span className="truncate block mt-0.5">{spot.name}</span>
                  </button>
                ))}
              </div>

              {/* Inspector Card */}
              <div className="border border-stone-800 p-6 space-y-5 rounded-sm bg-[#121211] shadow-md">
                <div className="space-y-1 border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#cda45e]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Selected Space</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white">{activeHotspot.name}</h3>
                  <p className="text-xs font-mono text-stone-400">
                    {activeHotspot.dimensions} • {activeHotspot.orientation}
                  </p>
                </div>

                <p className="text-sm leading-relaxed font-light text-stone-300">
                  {activeHotspot.description}
                </p>

                <div className="space-y-2 pt-2 text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#cda45e]" />
                    <span>Spatial Privacy: Thoughtful separation between living suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#cda45e]" />
                    <span>Deep cantilevered overhangs for natural shaded transitions</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800">
                  <button
                    onClick={() => openBookingModal(selectedPlan === '4bhk' ? '4 BHK Grand Estate' : '3 BHK Sanctuary')}
                    className="w-full py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer bg-stone-100 hover:bg-[#cda45e] text-stone-950"
                  >
                    Inquire For This Configuration →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AMENITIES (Cinematic Editorial Presentation & Exploration) */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#090908]" aria-label="Amenities">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              04 / CURATED AMENITIES
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-white">
              More Than
              <span className="block font-light italic text-stone-400">
                Four Walls.
              </span>
            </h2>
            <p className="mt-6 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Eighteen dedicated spaces designed for community, stillness, and vitality.
              A natural extension of your personal residence.
            </p>
          </div>

          {/* Featured Amenity Cinema Frame */}
          <div className="border border-stone-800 bg-[#121211] rounded-sm overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Large Image Frame */}
              <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[380px] sm:min-h-[480px] bg-stone-950 overflow-hidden">
                <Image
                  src={activeAmenity.image}
                  alt={activeAmenity.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm px-3.5 py-1.5 border border-stone-800 text-[10px] font-mono uppercase tracking-widest text-[#cda45e]">
                  {activeAmenity.category.toUpperCase()} ENVIRONMENT
                </div>
              </div>

              {/* Amenity Narrative Sidebar */}
              <div className="lg:col-span-4 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                  <div className="text-xs font-mono text-[#cda45e] uppercase tracking-widest mb-2">
                    {activeAmenity.tagline}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal uppercase mb-4">
                    {activeAmenity.name}
                  </h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                    {activeAmenity.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2 border-t border-stone-800/80 pt-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-2">
                      SPECIFICATIONS
                    </span>
                    {activeAmenity.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-stone-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cda45e]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-stone-800/80 mt-8 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500">
                    {activeAmenityIndex + 1} of {amenities.length}
                  </span>
                  <button
                    onClick={() => openBookingModal('Aarvana Verde — Amenities Tour')}
                    className="text-xs uppercase tracking-widest font-mono text-stone-200 hover:text-[#cda45e] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tour Spaces</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Strip */}
            <div className="border-t border-stone-800 bg-[#0e0e0d] p-3 sm:p-4 overflow-x-auto flex items-center gap-2">
              {amenities.map((item, idx) => (
                <button
                  key={item.slug}
                  onClick={() => setActiveAmenityIndex(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-mono whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeAmenityIndex === idx
                      ? 'bg-stone-100 text-stone-950 font-medium'
                      : 'text-stone-400 hover:text-stone-200 border border-transparent hover:border-stone-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION & CONNECTIVITY */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#0c0c0b]" aria-label="Location">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              05 / GEOGRAPHIC SETTING
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-white">
              Connected To Everything.
              <span className="block font-light italic text-stone-400">
                Away From The Noise.
              </span>
            </h2>
            <p className="mt-6 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Positioned off Old Mahabalipuram Road on a secluded green ridge in Chennai.
              Arrive into natural tranquility while maintaining swift access to key commercial,
              educational, and transit hubs.
            </p>
          </div>

          {/* Cartographic Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Map Canvas */}
            <div className="lg:col-span-7 border border-stone-800 bg-[#121211] p-6 sm:p-8 rounded-sm shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 mb-6 text-xs font-mono text-stone-400">
                <span className="flex items-center gap-2 text-stone-200 font-medium">
                  <Compass className="w-4 h-4 text-[#cda45e]" /> CHENNAI CORRIDOR CARTOGRAPHY
                </span>
                <span>12°54&apos;N 80°13&apos;E</span>
              </div>

              <div className="relative w-full aspect-[4/3] bg-[#10100f] border border-stone-800 rounded-sm overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dark-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dark-map-grid)" />

                  {/* Radial Distance Rings */}
                  <circle cx="380" cy="310" r="80" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="380" cy="310" r="160" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="380" cy="310" r="240" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="5 5" />

                  <text x="390" y="225" fill="#555" fontSize="9" fontFamily="monospace">3 KM</text>
                  <text x="390" y="145" fill="#555" fontSize="9" fontFamily="monospace">6 KM</text>
                  <text x="390" y="65" fill="#555" fontSize="9" fontFamily="monospace">15 KM</text>

                  {/* Arterial Road Lines */}
                  <path d="M 50 480 Q 280 400 380 310 T 700 80" fill="none" stroke="#3a3832" strokeWidth="3" />
                  <path d="M 380 310 L 480 620" fill="none" stroke="#3a3832" strokeWidth="2.5" strokeDasharray="4 2" />
                  <path d="M 100 200 L 720 380" fill="none" stroke="#2f2d29" strokeWidth="1.5" />

                  {/* Road Labels */}
                  <text x="210" y="440" fill="#666" fontSize="9" fontFamily="monospace">OMR EXPRESSWAY</text>
                  <text x="500" y="240" fill="#666" fontSize="9" fontFamily="monospace">ECR LINK ROAD</text>

                  {/* Verde Center Pin */}
                  <circle cx="380" cy="310" r="16" fill="rgba(205, 164, 94, 0.2)" className="animate-ping" />
                  <circle cx="380" cy="310" r="8" fill="#cda45e" stroke="#000" strokeWidth="2" />
                  <rect x="330" y="270" width="100" height="22" fill="#000" stroke="#cda45e" strokeWidth="1" rx="2" />
                  <text x="380" y="284" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                    AARVANA VERDE
                  </text>
                </svg>
              </div>

              <p className="text-[11px] mt-3 font-mono text-stone-500 text-center sm:text-left">
                Secluded 24-acre green sanctuary off the primary OMR arterial route.
              </p>
            </div>

            {/* Travel Time Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-2">
                ILLUSTRATIVE DISTANCES & ESTIMATES
              </span>
              {project.locationPoints.map((point) => (
                <div
                  key={point.name}
                  onClick={() => setSelectedLocationPoint(point.name)}
                  className={`p-4 border transition-all duration-300 rounded-sm cursor-pointer flex items-center justify-between ${
                    selectedLocationPoint === point.name
                      ? 'border-[#cda45e] bg-stone-900/90 text-white'
                      : 'border-stone-800 bg-[#121211] text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#cda45e]" />
                    <div>
                      <h4 className="text-sm font-medium">{point.name}</h4>
                      <span className="text-[11px] font-mono text-stone-500 uppercase">{point.category} • {point.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#cda45e] bg-stone-950 px-3 py-1 border border-stone-800">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{point.duration}</span>
                  </div>
                </div>
              ))}

              <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>Airport: 14.5 KM (15 MIN)</span>
                <span>Metro Station: 2.1 KM (06 MIN)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL GALLERY */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#090908]" aria-label="Architectural Folio Gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              06 / ARCHITECTURAL FOLIO
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-white">
                Captured In Light.
              </h2>
              <p className="mt-2 font-light italic text-stone-400 text-lg">
                Visualizing the materials, water features, and cantilevered volumes.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-500">04 ARCHITECTURAL PLATES</span>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="space-y-8">
            {/* Full-width Hero Frame */}
            <div
              onClick={() => setLightboxImage(project.gallery[0]?.src || null)}
              className="group relative w-full aspect-[21/9] bg-stone-950 overflow-hidden border border-stone-800 rounded-sm cursor-pointer"
            >
              <Image
                src={project.gallery[0]?.src || project.coverImage}
                alt={project.gallery[0]?.alt || 'Aarvana Verde'}
                fill
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="text-xs font-mono text-stone-300">{project.gallery[0]?.caption}</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] bg-black/60 px-3 py-1 border border-stone-800">
                  PLATE 01 / EXTERIOR
                </span>
              </div>
            </div>

            {/* Asymmetric Image Pair */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div
                onClick={() => setLightboxImage(project.gallery[1]?.src || null)}
                className="md:col-span-7 group relative aspect-[16/10] bg-stone-950 overflow-hidden border border-stone-800 rounded-sm cursor-pointer"
              >
                <Image
                  src={project.gallery[1]?.src || project.coverImage}
                  alt={project.gallery[1]?.alt || 'Verde Pool'}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="text-xs font-mono text-stone-300">{project.gallery[1]?.caption}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] bg-black/60 px-3 py-1 border border-stone-800">
                    PLATE 02 / OASIS
                  </span>
                </div>
              </div>

              <div
                onClick={() => setLightboxImage(project.gallery[2]?.src || null)}
                className="md:col-span-5 group relative aspect-[4/5] bg-stone-950 overflow-hidden border border-stone-800 rounded-sm cursor-pointer"
              >
                <Image
                  src={project.gallery[2]?.src || project.coverImage}
                  alt={project.gallery[2]?.alt || 'Verde Interior'}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="text-xs font-mono text-stone-300">{project.gallery[2]?.caption}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] bg-black/60 px-3 py-1 border border-stone-800">
                    PLATE 03 / INTERIOR
                  </span>
                </div>
              </div>
            </div>

            {/* Full-Bleed Final Frame */}
            {project.gallery[3] && (
              <div
                onClick={() => setLightboxImage(project.gallery[3].src)}
                className="group relative w-full aspect-[16/9] bg-stone-950 overflow-hidden border border-stone-800 rounded-sm cursor-pointer"
              >
                <Image
                  src={project.gallery[3].src}
                  alt={project.gallery[3].alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="text-xs font-mono text-stone-300">{project.gallery[3].caption}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] bg-black/60 px-3 py-1 border border-stone-800">
                    PLATE 04 / TERRACE
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white p-2"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-6xl max-h-[85vh] w-full h-full">
              <Image
                src={lightboxImage}
                alt="Architectural Fullscreen View"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* 8. FINAL PROJECT CTA */}
      <section className="py-24 md:py-36 border-t border-stone-800 bg-[#080808] text-center relative overflow-hidden" aria-label="Project Final CTA">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] tracking-[0.35em] text-[#cda45e] uppercase font-mono font-medium block mb-4">
            AARVANA VERDE CHENNAI
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase text-white tracking-tight leading-[0.92] mb-6">
            Your Next Chapter
            <span className="block font-light italic text-stone-400 mt-2">
              Starts Here.
            </span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            A rare enclave of 36 contemporary residences. Arrange a private walk through
            the 24-acre canopy and review architectural blueprints with our senior design advisory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => openBookingModal('Aarvana Verde — 3 & 4 BHK')}
              className="px-8 py-4 bg-stone-100 text-stone-950 hover:bg-[#cda45e] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book A Private Site Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleBrochureDownload}
              className="px-8 py-4 border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#cda45e]" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Contact Channels */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-stone-400 pt-8 border-t border-stone-800/80">
            <a
              href="https://wa.me/919840012345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#cda45e] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#cda45e]" />
              <span>WhatsApp Concierge (Demo)</span>
            </a>
            <a
              href="tel:+914428309000"
              className="flex items-center gap-2 hover:text-[#cda45e] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#cda45e]" />
              <span>Concierge (Demo): +91 44 2830 9000</span>
            </a>
            <Link
              href="/projects"
              className="flex items-center gap-2 hover:text-[#cda45e] transition-colors"
            >
              <Layers className="w-4 h-4 text-[#cda45e]" />
              <span>View Full Project Archive</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
