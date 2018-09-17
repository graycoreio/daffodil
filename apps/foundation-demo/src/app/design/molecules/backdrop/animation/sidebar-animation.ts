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
    readonly transformSidebar: AnimationTriggerMetadata,
    readonly transformContent: AnimationTriggerMetadata,
    readonly fadeBackdrop: AnimationTriggerMetadata,
  } = {
    /** Animation that slides a drawer in and out. */
    transformSidebar: trigger('transformSidebar', [
      // We remove the `transform` here completely, rather than setting it to zero, because:
      // 1. Having a transform can cause elements with ripples or an animated
      //    transform to shift around in Chrome with an RTL layout (see #10023).
      // 2. 3d transforms causes text to appear blurry on IE and Edge.
      state('open', style({
        'transform': 'none',
        'visibility': 'visible',
      })),
      transition('void <=> open',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ]),
    transformContent: trigger('transformContent', [
      state('void', style({
        'transform': 'none',
      })),
      transition('void <=> open',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ]),
    fadeBackdrop: trigger('fadeBackdrop', [
      state('open', style({
        opacity: '1',
      })),
      state('void',style({
        opacity: 0
      })),
      transition('void <=> open',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  };

export enum DaffSidebarAnimationStates {
    OPEN =  'open',
    VOID = 'void'
}