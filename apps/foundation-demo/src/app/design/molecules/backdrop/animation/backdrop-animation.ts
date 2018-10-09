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
export const daffBackdropAnimations: {
  readonly fadeBackdrop: AnimationTriggerMetadata,
} = {
  fadeBackdrop: trigger('fadeBackdrop', [
    state('show', style({
      opacity: '1',
    })),
    state('void',style({
      opacity: 0
    })),
    transition('void <=> show',
        animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
  ])
};
