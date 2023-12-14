import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
  group,
} from '@angular/animations';

import { DaffSelectAnimationState } from './state.enum';

export const DAFF_SELECT_OPEN_ANIMATION_TIMING = '150ms cubic-bezier(0.55, 0.085, 0.68, 0.53)';
export const DAFF_SELECT_CLOSE_ANIMATION_TIMING = '150ms cubic-bezier(0.645, 0.045, 0.355, 1)';
export const DAFF_SELECT_OPEN_TO_CLOSE_OVERFLOW_TIMING = '150ms step-start';
export const DAFF_SELECT_CLOSE_TO_OPEN_OVERFLOW_TIMING = '150ms step-end';

export const daffSelectAnimations: {
  readonly openSelect: AnimationTriggerMetadata;
} = {
  openSelect: trigger('openSelect', [
    state(DaffSelectAnimationState.OPEN, style({
      height: '*',
      overflow: 'visible',
    })),
    state(DaffSelectAnimationState.CLOSED, style({
      height: '0',
      overflow: 'hidden',
    })),
    transition(`${DaffSelectAnimationState.OPEN} => ${DaffSelectAnimationState.CLOSED}`,
      group([
        animate(DAFF_SELECT_CLOSE_ANIMATION_TIMING, style({ height: 0 })),
        animate(DAFF_SELECT_OPEN_TO_CLOSE_OVERFLOW_TIMING, style({ overflow: 'hidden' })),
      ]),
    ),
    transition(`${DaffSelectAnimationState.CLOSED} => ${DaffSelectAnimationState.OPEN}`,
      group([
        animate(DAFF_SELECT_OPEN_ANIMATION_TIMING, style({ height: '*' })),
        animate(DAFF_SELECT_CLOSE_TO_OPEN_OVERFLOW_TIMING, style({ overflow: 'visible' })),
      ]),
    ),
  ]),
};
