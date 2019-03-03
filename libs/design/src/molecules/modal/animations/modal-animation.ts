import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const daffFadeAnimations: {
  readonly fade: AnimationTriggerMetadata,
} = {
  fade: trigger('fade', [
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
