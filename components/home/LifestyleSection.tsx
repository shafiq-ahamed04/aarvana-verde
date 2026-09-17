import Image from 'next/image';

interface LifestyleMoment {
  title: string;
  time: string;
  caption: string;
  image: string;
  span: string;
}

const moments: LifestyleMoment[] = [
  {
    title: 'The Morning Glow',
    time: '06:45 AM',
    caption: 'Soft diurnal dawn light washes over the private east-facing breakfast terrace as the conserved forest canopy awakens.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    span: 'lg:col-span-7',
  },
  {
    title: 'The Living Sanctuary',
    time: '11:30 AM',
    caption: 'Generous ceiling heights and open cross-ventilation bring fresh air into the living pavilion throughout the day.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    span: 'lg:col-span-5',
  },
  {
    title: 'Family Courtyard Moments',
    time: '04:15 PM',
    caption: 'Children cycling along vehicle-free garden trails while elders recline beside the shallow reflecting fountain.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    span: 'lg:col-span-5',
  },
  {
    title: 'Twilight Over the Canopy',
    time: '06:45 PM',
    caption: 'Subdued architectural uplighting illuminates the basalt walkways as evening sea breezes sweep through the veranda.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    span: 'lg:col-span-7',
  },
];

export default function LifestyleSection() {
  return (
    <section
      className="relative w-full py-28 md:py-36 bg-[#f7f5f0] text-stone-900 border-t border-stone-300/80 overflow-hidden"
      aria-label="Lifestyle Experience"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] text-[#a16207] uppercase font-mono font-medium">
            04 / LIVING ATMOSPHERE
          </span>
          <div className="h-[1px] w-12 bg-[#a16207]/40" />
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.92] text-stone-950 tracking-tight">
              More Than
              <span className="block font-light italic text-stone-600">Four Walls.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed max-w-md">
              A home is an emotional sanctuary. Here, daily rituals unfold against a backdrop
              of birdsong, stone textures, and uninterrupted horizon skies.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid on Warm Paper Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {moments.map((moment) => (
            <div
              key={moment.title}
              className={`${moment.span} group relative overflow-hidden bg-stone-100 border border-stone-300 shadow-sm`}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-stone-950/70 backdrop-blur-sm px-3 py-1 border border-stone-700 text-[10px] font-mono tracking-widest text-[#f5d082]">
                  {moment.time}
                </div>

                {/* Bottom Story */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    {moment.title}
                  </h3>
                  <p className="text-stone-200 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                    {moment.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
