import {
  InjectionToken,
  Signal,
} from '@angular/core';

/**
 * The public shape of an RTI boundary, exposed to descendant RTI targets.
 */
export interface DaffRovingTabIndexBoundary {
  /**
   * The name of the group defined by this boundary.
   */
  readonly effectiveBoundary: Signal<string>;
}

/**
 * Allows RTI targets to inject their nearest ancestor boundary without
 * creating a circular import with the boundary directive.
 */
export const DAFF_ROVING_TAB_INDEX_BOUNDARY = new InjectionToken<DaffRovingTabIndexBoundary>('DaffRovingTabIndexBoundary');
