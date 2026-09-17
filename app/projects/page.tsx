import { createMetadata } from '@/lib/metadata';
import { getAllProjects } from '@/data/projects';
import ProjectsArchive from '@/components/projects/ProjectsArchive';

export const metadata = createMetadata({
  title: 'Project Collection — Architectural Archive',
  description:
    'Explore the residential sanctuaries crafted by Aarvana Developers — Verde (Chennai), Altura (Coimbatore), and Aurelia (Bengaluru).',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return <ProjectsArchive projects={projects} />;
}
