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
    transition(':enter', [
      style({ opacity: 0 }),
      animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('150ms', style({ opacity: 0 }))
    ])
  ])
};
