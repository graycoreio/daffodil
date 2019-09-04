import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

const animationDuration = "350ms";
const backdropTransitionOut = "cubic-bezier(0.4, 0.0, 1, 1)";
const backdropTransitionIn = "cubic-bezier(0.0, 0.0, 0.2, 1)"

export const daffBackdropAnimations: {
  readonly fadeBackdrop: AnimationTriggerMetadata,
} = {
  fadeBackdrop: trigger('fadeBackdrop', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(animationDuration + " " + backdropTransitionIn, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate(animationDuration + " " + backdropTransitionOut, style({ opacity: 0 }))
    ])
  ])
};
