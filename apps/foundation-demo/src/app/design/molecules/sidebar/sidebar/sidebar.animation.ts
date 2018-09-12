/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
  } from '@angular/animations';
  
  /** Animations used by the Material drawers. */
  export const daffSidebarAnimations: {
    readonly transformSidebar: AnimationTriggerMetadata;
  } = {
    /** Animation that slides a drawer in and out. */
    transformSidebar: trigger('transform', [
      // We remove the `transform` here completely, rather than setting it to zero, because:
      // 1. Having a transform can cause elements with ripples or an animated
      //    transform to shift around in Chrome with an RTL layout (see #10023).
      // 2. 3d transforms causes text to appear blurry on IE and Edge.
      state('open, open-instant', style({
        'transform': 'none',
        'visibility': 'visible',
      })),
      state('void', style({
        'visibility': 'hidden',
      })),
      transition('void => open-instant', animate('0ms')),
      transition('void <=> open, open-instant => void',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  };

export enum DaffSidebarAnimationStates {
    OPEN =  'open',
    OPEN_INSTANT =  'open-sinstant',
    VOID = 'void'
}