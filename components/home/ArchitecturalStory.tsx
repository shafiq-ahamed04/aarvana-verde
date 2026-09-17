'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aspect: string;
  descriptor: string;
}

const stages: Stage[] = [
  {
    id: 'form',
    number: '01',
    title: 'FORM',
    subtitle: 'Architecture and Massing',
    description:
      'Low-slung geometric volumes stepped rhythmically along the natural ridge. Cantilevered structural floor slabs frame the horizon while shielding living spaces from direct tropical sun.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    aspect: 'Cantilevered Terraces & Exposed Granite',
    descriptor: 'SHADED TRANSITIONS',
  },
  {
    id: 'light',
    number: '02',
    title: 'LIGHT',
    subtitle: 'Atmosphere and Diurnal Rhythm',
    description:
      'Engineered sun-path orientation channels soft morning illumination into dining alcoves while louvered teak brise-soleil buffers the afternoon glare. Daylight becomes an active architectural element.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    aspect: 'Diurnal Sun Studies & Louvered Lounges',
    descriptor: 'CONTROLLED DAYLIGHT',
  },
  {
    id: 'landscape',
    number: '03',
    title: 'LANDSCAPE',
    subtitle: 'Canopy and Water Mirrors',
    description:
      'Architecture that yields to 24 acres of conserved flora. Vegetation and shaded transitions shape a calmer relationship between architecture and outdoors.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    aspect: '24-Acre Canopy & Basalt Reflecting Pools',
    descriptor: 'LANDSCAPED EDGES',
  },
  {
    id: 'space',
    number: '04',
    title: 'SPACE',
    subtitle: 'Sanctuary and Thresholds',
    description:
      'Fluid transitions between expansive entertaining pavilions and quiet private suites. High clear ceiling volumes and column-free spans offer absolute sanctuary and privacy.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    aspect: 'Spacious Living Volumes & Quiet Courtyards',
    descriptor: 'PRIVATE INTERIORS',
  },
];

export default function ArchitecturalStory() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section
      id="architecture"
      className="relative w-full py-28 md:py-36 border-t border-stone-800/80 bg-[#0d0d0c] text-stone-100 overflow-hidden"
      aria-label="Architectural Storytelling"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            03 / ARCHITECTURAL PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.95] tracking-tight text-stone-100">
            Architecture
            <span className="block font-light italic text-stone-400">
              That Breathes.
            </span>
          </h2>
          <p className="mt-6 text-sm sm:text-base font-light leading-relaxed max-w-xl text-stone-300">
            A continuous architectural dialogue between mass, illumination, earth, and spatial restraint.
            Discover how thoughtful spatial planning enhances daily living.
          </p>
        </div>

        {/* Interactive Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Stage Selector & Copy */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            {/* Stage Selector Tabs */}
            <div className="flex items-center gap-2 border-b border-stone-800 pb-4">
              {stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex-1 py-2 text-left transition-all duration-300 relative ${
                    activeStageIndex === idx
                      ? 'text-white'
                      : 'text-stone-500 hover:text-stone-300'
                  }`}
                  aria-label={`View stage ${stage.number}: ${stage.title}`}
                >
                  <span className="text-xs font-mono font-medium block">
                    {stage.number}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans hidden sm:block">
                    {stage.title}
                  </span>
                  {activeStageIndex === idx && (
                    <motion.div
                      layoutId="stage-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cda45e]"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-[#cda45e]">
                      {activeStage.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] font-mono text-stone-400">
                      {activeStage.subtitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 border text-stone-300 border-stone-800 bg-stone-900/60">
                    {activeStage.descriptor}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-white">
                  {activeStage.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed font-light max-w-lg text-stone-300">
                  {activeStage.description}
                </p>

                <div className="pt-4 flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#cda45e]">
                  <span>Aspect:</span>
                  <span className="font-normal text-stone-300">
                    {activeStage.aspect}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Stepper */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-800/80">
              <span className="text-xs font-mono text-stone-500">
                Chapter 0{activeStageIndex + 1} of 0{stages.length}
              </span>
              <button
                onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors py-2 text-stone-300 hover:text-[#cda45e]"
              >
                <span>Next Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Editorial Image Presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeStage.image}
                    alt={`${activeStage.title} — ${activeStage.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-stone-300">
                    <span className="bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-stone-700 uppercase tracking-widest text-[11px] font-mono">
                      {activeStage.number} • {activeStage.title}
                    </span>
                    <span className="text-stone-300 hidden sm:inline text-[11px] tracking-wider font-light">
                      Aarvana Architectural Study
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
