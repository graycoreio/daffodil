import { DaffSidebarMode } from '../helper/sidebar-mode';

export type DaffSidebarAnimationState =
'open' | 'closed' | 'under-open' | 'under-closed' | 'side-fixed-open' | 'side-fixed-closed' | 'none';

export const getAnimationState = (open: boolean, mode: DaffSidebarMode): DaffSidebarAnimationState => {
  if(mode === 'side') {
    return 'none';
  }

  if(mode === 'side-fixed' && open) {
    return 'side-fixed-open';
  }

  if(mode === 'side-fixed' && !open) {
    return 'side-fixed-closed';
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
