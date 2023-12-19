import { DaffSidebarAnimationState } from '../animation/sidebar-animation-state';

/**
 * Determine whether or animation states are going to an open state from a non-open state.
 */
export const isOpening = (fromState: DaffSidebarAnimationState, toState: DaffSidebarAnimationState): boolean => {
  if(fromState === 'under-open' && toState === 'open' || fromState === 'open' && toState === 'under-open') {
    return false;
  }

  if(toState === 'under-open' || toState === 'open') {
    return true;
  }
  return false;
};
