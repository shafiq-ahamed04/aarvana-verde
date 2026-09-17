/** Amenity gallery for project pages — TODO: Implement during UI phase */
import type { Amenity } from '@/types/common';

export interface AmenityGalleryProps { amenities: Amenity[]; }
export default function AmenityGallery({ amenities }: AmenityGalleryProps) {
  return <section aria-label="Amenity Gallery" data-count={amenities.length} />;
}
