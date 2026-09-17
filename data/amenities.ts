import type { Amenity } from '@/types/common';

export interface AmenitySpace extends Amenity {
  image: string;
  tagline: string;
  specs: string[];
}

/**
 * 18 Spaces Designed Around How You Live — Key Curated Amenities.
 */
export const amenities: AmenitySpace[] = [
  {
    slug: 'the-courtyard',
    name: 'The Courtyard',
    tagline: 'Open Earth & Water Mirror',
    description: 'A tranquil stone courtyard centered around a sacred reflecting pool and indigenous banyan canopy, establishing an atmosphere of stillness.',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    specs: ['12,000 sq.ft. open sky', 'Reflective stone pool', 'Landscaped buffer'],
  },
  {
    slug: 'the-club',
    name: 'The Club',
    tagline: 'Residents’ Private Lounge',
    description: 'An understated private members’ lounge with bespoke wood millwork, private dining salon, screening room, and sommelier cellar.',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    specs: ['Curated library lounge', '16-seat private dining room', 'Private screening salon'],
  },
  {
    slug: 'the-gardens',
    name: 'The Gardens',
    tagline: 'Botanical Sanctuary',
    description: 'Tiered sensory gardens featuring over 40 species of native trees, meditative gravel pathways, and twilight aromatic flora.',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1600&q=80',
    specs: ['24 acres contiguous greenery', 'Organic herb & tea garden', 'Quiet meditation pavilions'],
  },
  {
    slug: 'the-fitness-studio',
    name: 'The Fitness Studio',
    tagline: 'Holistic Movement Space',
    description: 'Panoramic glass-walled wellness pavilion equipped with Technogym Artis series, Reformer Pilates alcove, and outdoor yoga terrace.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    specs: ['Technogym bio-circuit', 'Pilates reformer studio', 'Open-air morning deck'],
  },
  {
    slug: 'the-rooftop',
    name: 'The Rooftop',
    tagline: 'Horizon Observatory',
    description: 'An expansive open-air observatory deck framing Chennai’s coastal horizon, star-gazing telescope points, and sunken fire lounges.',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    specs: ['360° horizon views', 'Sunken conversation pit', 'Stargazing telescope deck'],
  },
  {
    slug: 'the-pool',
    name: 'The Pool',
    tagline: 'Thermal Infinity Basin',
    description: 'A 50-meter cantilevered basalt infinity lap pool that seems to spill into the forest canopy, complemented by submerged sun loungers.',
    category: 'recreation',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80',
    specs: ['50m Olympic lap length', 'Natural saline filtration', 'Private poolside cabanas'],
  },
  {
    slug: 'the-childrens-zone',
    name: 'The Children’s Zone',
    tagline: 'Nature Discovery Park',
    description: 'An imaginative timber playground embedded into the undulating earth, encouraging natural tactile play, treehouses, and sand basins.',
    category: 'recreation',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80',
    specs: ['Zero-plastic natural timber', 'Sensory splash stream', 'Shaded toddler glen'],
  },
];

/** Get amenities for a project by slugs */
export function getAmenitiesBySlugs(slugs: string[]): AmenitySpace[] {
  return slugs
    .map((slug) => amenities.find((a) => a.slug === slug))
    .filter((a): a is AmenitySpace => a !== undefined);
}
