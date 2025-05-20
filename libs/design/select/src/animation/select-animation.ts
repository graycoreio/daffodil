import {
  state,
  style,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

import { DaffSelectAnimationState } from './state.enum';

export const daffSelectAnimations: {
  readonly openSelect: AnimationTriggerMetadata;
} = {
  openSelect: trigger('openSelect', [
    state(DaffSelectAnimationState.OPEN, style({
      height: '*',
    })),
    state(DaffSelectAnimationState.CLOSED, style({
      height: '0',
    })),
  ]),
};
