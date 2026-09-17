import type { Project } from '@/types/project';

/**
 * Project data — Aligned with Aarvana Verde Flagship and Project Collection.
 */
export const projects: Project[] = [
  {
    slug: 'aarvana-verde',
    name: 'Aarvana Verde',
    tagline: 'Where the city ends. Your life begins.',
    description:
      'Designed around light, landscape and privacy, Verde brings the calm of a retreat into the rhythm of the city. A rare low-density enclave of 36 contemporary residences crafted across 24 acres of verdant terrain.',
    location: 'Off Old Mahabalipuram Road, Chennai',
    city: 'Chennai',
    status: 'under-construction',
    reraNumber: 'TN/RERA/2024/0942',
    configurations: ['3 BHK Sanctuary', '4 BHK Grand Estate'],
    areaRange: '2,450 – 3,850',
    areaUnit: 'sqft',
    priceRange: '₹4.8 Cr – ₹8.5 Cr',
    possession: '2028 Possession',
    totalFloors: 6,
    totalUnits: 36,
    highlights: [
      {
        title: 'Form & Massing',
        description: 'Terraced volumes stepped back to invite panoramic natural airflow and uninterrupted horizon views.',
      },
      {
        title: 'Architectural Light',
        description: 'Custom sun-path orientation ensuring diffused daylight throughout living spaces with zero harsh glare.',
      },
      {
        title: '24-Acre Canopy',
        description: 'Over 78% preserved open earth, indigenous mature trees, sensory bioswales, and reflective water bodies.',
      },
    ],
    amenities: [
      'the-courtyard',
      'the-club',
      'the-gardens',
      'the-fitness-studio',
      'the-rooftop',
      'the-pool',
      'the-childrens-zone',
    ],
    floorPlans: [
      {
        name: 'The Pavilion Residence — 3 BHK',
        bedrooms: 3,
        bathrooms: 3,
        area: '2,450',
        areaUnit: 'sqft',
      },
      {
        name: 'The Courtyard Villa — 4 BHK',
        bedrooms: 4,
        bathrooms: 5,
        area: '3,850',
        areaUnit: 'sqft',
      },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
        alt: 'Aarvana Verde architectural facade at dusk',
        caption: 'Cantilevered architectural wings over landscaped water court',
      },
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
        alt: 'Verde private villa pool and deck',
        caption: 'Sunken stone plunge pool bordered by native flora',
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
        alt: 'Verde double-height master living pavilion',
        caption: 'Double-height living pavilion with warm limestone and teak finishes',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85',
        alt: 'Verde private terrace overlooking canopy',
        caption: 'Seamless indoor-outdoor terrace with integrated planters',
      },
    ],
    locationPoints: [
      { name: 'International School', category: 'education', distance: '3.2 km', duration: '08 MIN' },
      { name: 'IT Corridor (OMR/ECR)', category: 'commercial', distance: '5.8 km', duration: '12 MIN' },
      { name: 'Chennai International Airport', category: 'transport', distance: '14.5 km', duration: '15 MIN' },
      { name: 'Metro Interchange Station', category: 'transport', distance: '2.1 km', duration: '06 MIN' },
      { name: 'Multi-Specialty Hospital', category: 'healthcare', distance: '4.6 km', duration: '10 MIN' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    order: 1,
  },
  {
    slug: 'altura',
    name: 'Altura',
    tagline: 'High-Altitude Sanctuary',
    description: 'Elevated contemporary residences nestled amidst Coimbatore’s Western Ghats foothills, marrying minimalist concrete with timber.',
    location: 'Race Course Foothills, Coimbatore',
    city: 'Coimbatore',
    status: 'completed',
    reraNumber: 'TN/RERA/2022/0311',
    configurations: ['3 BHK Sky Suites', '4 BHK Duplex Penthouses'],
    areaRange: '2,800 – 4,200',
    areaUnit: 'sqft',
    priceRange: '₹3.9 Cr – ₹6.8 Cr',
    possession: 'Completed (2024)',
    totalFloors: 14,
    totalUnits: 28,
    highlights: [
      { title: 'Panoramic Ridge Views', description: 'Unobstructed vistas of the Nilgiri foothills.' },
      { title: 'Sheltered Foothill Setting', description: 'Thoughtful orientation and natural terrain maintaining comfortable ambient living conditions.' },
    ],
    amenities: ['the-club', 'the-pool', 'the-fitness-studio', 'the-rooftop'],
    floorPlans: [],
    gallery: [],
    locationPoints: [],
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    order: 2,
  },
  {
    slug: 'aurelia',
    name: 'Aurelia',
    tagline: 'Refined Urban Synthesis',
    description: 'A curated mixed-use sanctuary in Bengaluru combining boutique luxury residences with tranquil open-air culinary courtyards.',
    location: 'Indiranagar Extended, Bengaluru',
    city: 'Bengaluru',
    status: 'upcoming',
    reraNumber: 'KA/RERA/2024/1108',
    configurations: ['3 BHK Garden Residences', '4 BHK Sky Villas'],
    areaRange: '2,600 – 4,500',
    areaUnit: 'sqft',
    priceRange: '₹5.5 Cr – ₹9.2 Cr',
    possession: '2027 Possession',
    totalFloors: 18,
    totalUnits: 48,
    highlights: [
      { title: 'Private Atrium Gardens', description: 'Triple-height indoor tropical gardens inside each residence.' },
      { title: 'Curated Artisan Arcade', description: 'Ground floor promenade housing private galleries and dining.' },
    ],
    amenities: ['the-courtyard', 'the-club', 'the-gardens', 'the-rooftop'],
    floorPlans: [],
    gallery: [],
    locationPoints: [],
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    order: 3,
  },
];

/** Get all projects sorted by order */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** Get featured projects */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.isFeatured);
}

/** Get a single project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Get all project slugs (for static generation) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
