/** Project statistics display — TODO: Implement during UI phase */
import type { Project } from '@/types/project';

export interface ProjectStatsProps { project: Project; }
export default function ProjectStats({ project }: ProjectStatsProps) {
  return <section aria-label="Project Statistics" data-project={project.name} />;
}
