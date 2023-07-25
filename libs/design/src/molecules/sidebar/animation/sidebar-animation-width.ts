import { DaffSidebarSide } from '../helper/sidebar-side';

export const getSidebarAnimationWidth =
  (side: DaffSidebarSide, width: number): string => side === 'left' ? -1 * width + 'px' : width + 'px';
