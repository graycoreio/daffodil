import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
  group,
} from '@angular/animations';

export type DaffDropdownAnimationState = 'open' | 'closed';
export const DAFF_DROPDOWN_OPEN_ANIMATION_TIMING = '150ms cubic-bezier(0.55, 0.085, 0.68, 0.53)';
export const DAFF_DROPDOWN_CLOSE_ANIMATION_TIMING = '150ms cubic-bezier(0.645, 0.045, 0.355, 1)';
export const DAFF_DROPDOWN_OPEN_TO_CLOSE_OVERFLOW_TIMING = '150ms step-start';
export const DAFF_DROPDOWN_CLOSE_TO_OPEN_OVERFLOW_TIMING = '150ms step-end';

export const daffDropdownAnimations: {
  readonly openDropdown: AnimationTriggerMetadata;
} = {
  openDropdown: trigger('openDropdown', [
    state('open', style({
      height: '*',
      overflow: 'visible',
    })),
    state('closed', style({
      height: '0',
      overflow: 'hidden',
    })),
    transition('open => closed',
      group([
        animate(DAFF_DROPDOWN_CLOSE_ANIMATION_TIMING, style({ height: 0 })),
        animate(DAFF_DROPDOWN_OPEN_TO_CLOSE_OVERFLOW_TIMING, style({ overflow: 'hidden' })),
      ]),
    ),
    transition('closed => open',
      group([
        animate(DAFF_DROPDOWN_OPEN_ANIMATION_TIMING, style({ height: '*' })),
        animate(DAFF_DROPDOWN_CLOSE_TO_OPEN_OVERFLOW_TIMING, style({ overflow: 'visible' })),
      ]),
    ),
  ]),
};
