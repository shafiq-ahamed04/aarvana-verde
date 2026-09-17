import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { createProjectMetadata } from '@/lib/metadata';
import VerdeDetail from '@/components/projects/VerdeDetail';
import RegionalProjectDetail from '@/components/projects/RegionalProjectDetail';

/** Generate static params for all project slugs */
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

/** Generate metadata per project */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createProjectMetadata({
    name: project.name,
    description: project.description,
    image: project.coverImage,
    slug: project.slug,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === 'aarvana-verde') {
    return <VerdeDetail project={project} />;
  }

  return <RegionalProjectDetail project={project} />;
}
