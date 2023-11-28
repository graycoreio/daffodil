import { DaffSidebarMode } from '../helper/sidebar-mode';

export type DaffSidebarAnimationState = 'open' | 'closed' | 'under-open' | 'under-closed' | 'none';

export const getAnimationState = (open: boolean, mode: DaffSidebarMode): DaffSidebarAnimationState => {
  if(mode === 'side' || mode === 'side-fixed') {
    return 'none';
  }

  if(open && mode === 'under') {
    return 'under-open';
  }

  if(!open && mode === 'under') {
    return 'under-closed';
  }

  if(open) {
    return 'open';
  } else {
    return 'closed';
  }
};
