/** Location map — TODO: Implement during UI phase */
import type { LocationPoint } from '@/types/project';

export interface LocationMapProps { points?: LocationPoint[]; mapUrl?: string; }
export default function LocationMap({ points = [], mapUrl }: LocationMapProps) {
  return (
    <section aria-label="Location Map" data-points-count={points.length} data-map-url={mapUrl} />
  );
}
