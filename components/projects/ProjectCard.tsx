/**
 * Project card for listing pages.
 * TODO: Implement with image, status badge, configuration tags, and CTA.
 */

import type { Project } from '@/types/project';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
        <h3>{project.name}</h3>
        <p>{project.location}</p>
      </Link>
    </article>
  );
}
