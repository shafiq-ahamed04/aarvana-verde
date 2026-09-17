'use client';

import { useState } from 'react';
import { locationHighlights, type LocationHighlight } from '@/data/location';
import { Compass, Navigation } from 'lucide-react';

export default function LocationSection() {
  const [selectedHighlight, setSelectedHighlight] = useState<string>('International School');

  return (
    <section
      id="location"
      className="relative w-full py-28 md:py-36 bg-[#f4f1ea] text-stone-900 border-t border-stone-300/80 overflow-hidden"
      aria-label="Location and Connectivity"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] text-[#a16207] uppercase font-mono font-medium">
            07 / GEOGRAPHIC PROXIMITY
          </span>
          <div className="h-[1px] w-12 bg-[#a16207]/40" />
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] text-stone-950 tracking-tight">
            Connected To Everything.
            <span className="block font-light italic text-stone-600">Away From The Noise.</span>
          </h2>
          <p className="mt-6 text-stone-700 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Tucked onto a secluded green ridge along the OMR arterial corridor. Arrive home into
            natural tranquility while maintaining swift access to key commercial,
            educational, and transit arteries.
          </p>
        </div>

        {/* Map & Proximity Grid on Architectural Paper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Refined Architectural Paper Cartography */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-300 p-6 sm:p-8 rounded-sm relative shadow-sm overflow-hidden">
            {/* Map Header Bar */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4 text-xs font-mono text-stone-600">
              <span className="flex items-center gap-2 text-stone-900 font-medium">
                <Compass className="w-4 h-4 text-[#a16207]" />
                CHENNAI CORRIDOR CARTOGRAPHY
              </span>
              <span>12°54&apos;N 80°13&apos;E</span>
            </div>

            {/* Stylized Vector Map Canvas */}
            <div className="relative w-full aspect-[4/3] bg-[#eae5db] border border-stone-300/90 rounded-sm overflow-hidden flex items-center justify-center">
              {/* Topographic Grid Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="light-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ddd7cc" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#light-map-grid)" />

                {/* Radial Distance Rings from Verde */}
                <circle cx="380" cy="310" r="80" fill="none" stroke="#c8c1b3" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="380" cy="310" r="160" fill="none" stroke="#c8c1b3" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="380" cy="310" r="240" fill="none" stroke="#beb6a7" strokeWidth="1" strokeDasharray="5 5" />

                {/* Radial Distance Labels */}
                <text x="390" y="225" fill="#888175" fontSize="9" fontFamily="monospace">3 KM</text>
                <text x="390" y="145" fill="#888175" fontSize="9" fontFamily="monospace">6 KM</text>
                <text x="390" y="65" fill="#888175" fontSize="9" fontFamily="monospace">15 KM</text>

                {/* Coastline Water on East */}
                <path
                  d="M 680 0 Q 640 200 660 400 T 670 600"
                  fill="none"
                  stroke="#8fa5b5"
                  strokeWidth="8"
                  opacity="0.8"
                />
                <text x="700" y="300" fill="#607687" fontSize="10" fontFamily="monospace" transform="rotate(90 700 300)">
                  BAY OF BENGAL
                </text>

                {/* Main Arterial Road Lines (OMR / ECR) */}
                <path
                  d="M 120 540 Q 300 420 380 310 T 580 80"
                  fill="none"
                  stroke="#3d3934"
                  strokeWidth="3.5"
                />
                <path
                  d="M 40 260 L 760 260"
                  fill="none"
                  stroke="#68635c"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />

                {/* Central Site Pin — Aarvana Verde */}
                <g>
                  {/* Radar Pulse */}
                  <circle cx="380" cy="310" r="28" fill="rgba(161, 98, 7, 0.18)" className="animate-ping" />
                  <circle cx="380" cy="310" r="10" fill="#a16207" stroke="#fff" strokeWidth="2" />
                  <rect x="330" y="270" width="100" height="20" rx="3" fill="#24211e" stroke="#a16207" strokeWidth="1" />
                  <text x="380" y="284" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    AARVANA VERDE
                  </text>
                </g>

                {/* Surrounding Landmark Markers */}
                {[
                  { name: 'International School', x: 310, y: 220, min: '08 MIN' },
                  { name: 'IT Corridor', x: 490, y: 220, min: '12 MIN' },
                  { name: 'Airport', x: 200, y: 120, min: '15 MIN' },
                  { name: 'Metro Station', x: 330, y: 390, min: '06 MIN' },
                  { name: 'Hospital', x: 480, y: 410, min: '10 MIN' },
                ].map((pt) => {
                  const isSelected = selectedHighlight === pt.name;
                  return (
                    <g
                      key={pt.name}
                      onClick={() => setSelectedHighlight(pt.name)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? '#a16207' : '#5c5750'}
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 10}
                        textAnchor="middle"
                        fill={isSelected ? '#784603' : '#44403a'}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {pt.name} ({pt.min})
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono mt-3">
              <span>Map rendering and travel times are illustrative demo estimates.</span>
              <span className="text-[#a16207] flex items-center gap-1 font-medium">
                <Navigation className="w-3 h-3" /> Illustrative Coordinates
              </span>
            </div>
          </div>

          {/* Right: Key Proximity Markers List */}
          <div className="lg:col-span-5 space-y-3">
            {locationHighlights.map((loc: LocationHighlight) => {
              const isSelected = selectedHighlight === loc.name;
              return (
                <div
                  key={loc.name}
                  onClick={() => setSelectedHighlight(loc.name)}
                  className={`p-4 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-stone-50 border-[#a16207] shadow-md ring-1 ring-[#a16207]/30'
                      : 'bg-stone-50/70 border-stone-300 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-3xl text-stone-950 font-normal">
                        {loc.minutes}
                      </span>
                      <span className="text-xs font-mono text-[#a16207] font-semibold uppercase">
                        MIN
                      </span>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-stone-600 font-medium">
                      {loc.distance} • {loc.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-stone-900 font-medium">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-stone-600 font-light mt-1.5 leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
