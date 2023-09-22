import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

const duration = '200ms';
const sidebarAnimateInTransition = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
const sidebarAnimateOutTransition = 'cubic-bezier(0.4, 0.0, 1, 1)';

export const daffSidebarAnimations: {
  readonly transformSidebar: AnimationTriggerMetadata;
  readonly transformContent: AnimationTriggerMetadata;
  readonly backdropTrigger: AnimationTriggerMetadata;
} = {
  transformSidebar: trigger('transformSidebar', [
    // We remove the `transform` here completely, rather than setting it to zero, because:
    // 1. 3d transforms causes text to appear blurry on IE and Edge.
    state('open', style({
      transform: 'none',
    })),
    state('closed', style({
      transform: 'translateX({{width}})',
    }), { params: { width: '-240px' }}),
    transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
    transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition)),
  ]),
  transformContent: trigger('transformContent', [
    // We remove the `transform` here completely, rather than setting it to zero, because:
    // 1. 3d transforms causes text to appear blurry on IE and Edge.
    state('closed', style({
      transform: 'none',
    })),
    state('open', style({
      transform: 'translateX({{shift}})',
    }), { params: { shift: '-240px' }}),
    transition('open => closed', animate(duration + ' ' + sidebarAnimateInTransition)),
    transition('closed => open', animate(duration + ' ' + sidebarAnimateOutTransition)),
  ]),
  backdropTrigger: trigger('backdropTrigger', [
    state('open', style({
      opacity: 1,
    })),
    state('closed', style({
      opacity: 0,
    })),
    transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
    transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition)),
  ]),
};

export enum DaffSidebarAnimationStates {
  OPEN = 'open',
  CLOSED = 'closed',
  UNDEROPEN = 'under-open',
  UNDERCLOSED = 'under-closed',
  NONE = 'none'
}
