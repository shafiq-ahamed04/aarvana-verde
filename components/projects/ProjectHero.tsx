/** Project detail hero — TODO: Implement during UI phase */
import type { Project } from '@/types/project';

export interface ProjectHeroProps { project: Project; }
export default function ProjectHero({ project }: ProjectHeroProps) {
  return <section aria-label="Project Hero" data-project={project.name} />;
}
