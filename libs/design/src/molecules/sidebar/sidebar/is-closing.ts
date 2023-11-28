import { DaffSidebarAnimationState } from '../animation/sidebar-animation-state';

/**
 * Determine whether or animation states are going to a closed state from a non-closed state.
 */
export const isClosing = (fromState: DaffSidebarAnimationState, toState: DaffSidebarAnimationState) =>
  !(fromState === 'under-closed' || fromState === 'closed' || fromState === 'none')
    && (toState === 'under-closed' || toState === 'closed' || toState === 'none');
