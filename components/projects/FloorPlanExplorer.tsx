/** Floor plan explorer — TODO: Implement during UI phase */
import type { FloorPlan } from '@/types/project';

export interface FloorPlanExplorerProps { floorPlans: FloorPlan[]; }
export default function FloorPlanExplorer({ floorPlans }: FloorPlanExplorerProps) {
  return <section aria-label="Floor Plan Explorer" data-count={floorPlans.length} />;
}
