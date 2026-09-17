/** Core project data types for AARVANA VERDE */

export interface FloorPlan {
  name: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  areaUnit: 'sqft' | 'sqm';
  price?: string;
  image?: string;
  pdf?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  category?: 'exterior' | 'interior' | 'amenity' | 'aerial' | 'construction';
}

export interface LocationPoint {
  name: string;
  category: 'transport' | 'education' | 'healthcare' | 'shopping' | 'recreation' | 'dining' | 'commercial';
  distance: string;
  duration?: string;
}

export interface ProjectHighlight {
  icon?: string;
  title: string;
  description: string;
}

export type ProjectStatus = 'upcoming' | 'under-construction' | 'nearing-possession' | 'ready-to-move' | 'completed';

export interface Project {
  /** URL-friendly identifier */
  slug: string;
  /** Display name */
  name: string;
  /** Tagline or short description */
  tagline?: string;
  /** Full description (supports markdown) */
  description: string;
  /** Project location */
  location: string;
  /** City */
  city: string;
  /** Current construction/sales status */
  status: ProjectStatus;
  /** RERA registration number */
  reraNumber?: string;
  /** Available configurations (e.g., ["2 BHK", "3 BHK"]) */
  configurations: string[];
  /** Area range (e.g., "1200 - 2400") */
  areaRange: string;
  /** Area unit */
  areaUnit: 'sqft' | 'sqm';
  /** Starting price display string (e.g., "₹1.2 Cr onwards") */
  priceRange: string;
  /** Expected possession date */
  possession: string;
  /** Number of floors/towers */
  totalFloors?: number;
  /** Total units */
  totalUnits?: number;
  /** Key highlights */
  highlights: ProjectHighlight[];
  /** Amenity slugs (reference to amenities data) */
  amenities: string[];
  /** Floor plans */
  floorPlans: FloorPlan[];
  /** Image gallery */
  gallery: GalleryImage[];
  /** Nearby points of interest */
  locationPoints: LocationPoint[];
  /** Hero/cover image */
  coverImage: string;
  /** Thumbnail image for cards */
  thumbnail: string;
  /** Featured project flag */
  isFeatured: boolean;
  /** Sort order */
  order: number;
}
