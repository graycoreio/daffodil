import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
  } from '@angular/animations';
  
  export const daffProgressIndicatorAnimation: {
    readonly fill: AnimationTriggerMetadata,
  } = {
    fill: trigger('fill', [
        state('*', style({ width: '{{ percentage }}%'}), { params: { percentage: 0 } }),
        transition('* <=> *', animate(1000))
    ])
  };
  