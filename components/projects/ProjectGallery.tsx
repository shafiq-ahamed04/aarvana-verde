/** Project gallery — TODO: Implement during UI phase */
import type { GalleryImage } from '@/types/project';

export interface ProjectGalleryProps { images: GalleryImage[]; }
export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return <section aria-label="Project Gallery" data-count={images.length} />;
}
