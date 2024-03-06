import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const daffProgressBarAnimation: {
  readonly fill: AnimationTriggerMetadata;
} = {
  fill: trigger('fill', [
    state('*', style({ transform: 'scaleX(calc({{ percentage }}/100))' }), { params: { percentage: 0 }}),
    transition('void <=> *', animate(0)),
    transition('* <=> *', animate(1000)),
  ]),
};
