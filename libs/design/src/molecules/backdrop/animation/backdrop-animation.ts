import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

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
