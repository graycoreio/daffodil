import { DaffSidebarAnimationState } from '../animation/sidebar-animation-state';

/**
 * Determine whether or animation states are going to an open state from a non-open state.
 */
export const isOpening = (fromState: DaffSidebarAnimationState, toState: DaffSidebarAnimationState): boolean =>
  !(fromState === 'open' || fromState === 'under-open') && (toState === 'under-open' || toState === 'open');
