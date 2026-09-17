'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { useBookingModal } from '@/components/forms/BookingModalContext';

interface Hotspot {
  id: string;
  name: string;
  dimensions: string;
  orientation: string;
  description: string;
  x: number; // percentage on SVG canvas
  y: number;
  highlightPath: string; // SVG path coordinates
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

export default function ResidenceExplorer() {
  const [selectedPlan, setSelectedPlan] = useState<'3bhk' | '4bhk'>('4bhk');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('living');
  const { openBookingModal } = useBookingModal();

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];

  return (
    <section
      id="residences"
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#0c0c0b] text-stone-100 overflow-hidden"
      aria-label="Residence and Floor Plan Explorer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            05 / RESIDENCE BLUEPRINT EXPLORER
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Headline & Plan Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] tracking-tight text-stone-100">
              Every Space
              <span className="block font-light italic text-stone-400">
                Has a Purpose.
              </span>
            </h2>
          </div>

          {/* Residence Switcher */}
          <div className="flex items-center border border-stone-800 bg-stone-900/80 p-1 rounded-sm">
            <button
              onClick={() => setSelectedPlan('4bhk')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                selectedPlan === '4bhk'
                  ? 'bg-stone-100 text-stone-950 font-medium'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              4 BHK Courtyard Villa (3,850 Sq.Ft.)
            </button>
            <button
              onClick={() => setSelectedPlan('3bhk')}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                selectedPlan === '3bhk'
                  ? 'bg-stone-100 text-stone-950 font-medium'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              3 BHK Pavilion (2,450 Sq.Ft.)
            </button>
          </div>
        </div>

        {/* Interactive Floor Plan Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Canvas: Architectural Vector Blueprint */}
          <div className="lg:col-span-8 border border-stone-800 p-4 sm:p-8 relative rounded-sm shadow-xl overflow-hidden bg-[#141413]">
            {/* Blueprint Meta Header */}
            <div className="flex items-center justify-between border-b border-stone-800/80 text-stone-300 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#cda45e]" />
                <span className="text-xs uppercase tracking-widest font-mono font-medium">
                  {selectedPlan === '4bhk' ? 'Plan C-04 / Courtyard Villa' : 'Plan B-02 / Pavilion Suite'}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#cda45e]" /> North-East Exposure
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">CAD Vector Scale 1:100</span>
              </div>
            </div>

            {/* SVG Architectural Canvas */}
            <div className="relative w-full aspect-[4/3] border border-stone-800/60 overflow-hidden flex items-center justify-center rounded-sm bg-[#10100f]">
              {/* Fine CAD Coordinate Grid */}
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
                {/* Outer Boundary Structural Walls */}
                <rect
                  x="100"
                  y="60"
                  width="640"
                  height="580"
                  fill="none"
                  stroke="#3e3c38"
                  strokeWidth="6"
                />

                {/* Highlighted Selected Room Zone */}
                <path
                  d={activeHotspot.highlightPath}
                  fill="rgba(205, 164, 94, 0.18)"
                  stroke="#cda45e"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="transition-all duration-500 ease-out"
                />

                {/* Architectural Internal Room Partitions */}
                <g stroke="#4a4742" strokeWidth="3" fill="none">
                  {/* Balcony front */}
                  <line x1="180" y1="160" x2="720" y2="160" />
                  {/* Living / Dining divide */}
                  <line x1="460" y1="160" x2="460" y2="380" strokeDasharray="6 4" />
                  {/* Dining / Kitchen wall */}
                  <line x1="480" y1="330" x2="720" y2="330" />
                  {/* Living / Master divide */}
                  <line x1="100" y1="380" x2="460" y2="380" />
                  {/* Master / Garden divide */}
                  <line x1="390" y1="380" x2="390" y2="640" />
                </g>

                {/* Architectural Dimension Annotations */}
                <g stroke="#333" strokeWidth="1" strokeDasharray="2 2" fill="none">
                  <line x1="80" y1="60" x2="80" y2="640" />
                  <line x1="100" y1="660" x2="740" y2="660" />
                </g>
                <text
                  x="50"
                  y="350"
                  fill="#666"
                  fontSize="11"
                  fontFamily="monospace"
                  transform="rotate(-90 50 350)"
                >
                  62&apos; 0&quot; TOTAL LENGTH
                </text>
                <text
                  x="360"
                  y="680"
                  fill="#666"
                  fontSize="11"
                  fontFamily="monospace"
                >
                  48&apos; 6&quot; TOTAL WIDTH
                </text>

                {/* Room Names on Blueprint */}
                <g fill="#777" fontSize="11" fontFamily="sans-serif" letterSpacing="1">
                  <text x="280" y="270">LIVING</text>
                  <text x="570" y="250">DINING</text>
                  <text x="210" y="520">MASTER SUITE</text>
                  <text x="420" y="125">VERANDA</text>
                  <text x="570" y="440">KITCHEN</text>
                  <text x="520" y="530">COURTYARD</text>
                </g>

                {/* Hotspot Interactive Pins */}
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
                      {/* Pulse Circle for active hotspot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 18 : 10}
                        fill={isActive ? 'rgba(205, 164, 94, 0.25)' : 'rgba(0, 0, 0, 0.04)'}
                        className={isActive ? 'animate-ping' : ''}
                      />
                      {/* Core Circle */}
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
                      {/* Label Badge */}
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

            {/* Hint bar */}
            <p className="text-[11px] mt-3 font-mono text-center sm:text-left text-stone-400">
              Click or tap any zone to inspect architectural dimensions and layout notes.
            </p>
          </div>

          {/* Right Column: Hotspot Details & Selector List */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Selector Pills */}
            <div className="grid grid-cols-2 gap-2">
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  className={`p-2.5 text-left border text-xs transition-all duration-200 cursor-pointer ${
                    activeHotspotId === spot.id
                      ? 'border-[#cda45e] bg-stone-900 text-white font-medium'
                      : 'border-stone-800 bg-[#121211] text-stone-400 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  <span className="block text-[10px] font-mono text-stone-500">
                    {spot.dimensions}
                  </span>
                  <span className="truncate block mt-0.5">{spot.name}</span>
                </button>
              ))}
            </div>

            {/* Active Hotspot Inspector Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="border border-stone-800 p-6 space-y-5 rounded-sm shadow-sm bg-[#141413]"
              >
                <div className="space-y-1 border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#cda45e]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Selected Space</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    {activeHotspot.name}
                  </h3>
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
                    <span>Thoughtful spatial planning and customizable interior partitions</span>
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
