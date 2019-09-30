import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
  } from '@angular/animations';

const duration = '350ms';
const sidebarAnimateRemainTransition = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
const sidebarAnimateInTransition = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
const sidebarAnimateOutTransition = 'cubic-bezier(0.4, 0.0, 1, 1)';
  
export const daffSidebarAnimations: {
    readonly transformSidebar: AnimationTriggerMetadata,
    readonly transformContent: AnimationTriggerMetadata,
  } = {
    transformSidebar: trigger('transformSidebar', [
      // We remove the `transform` here completely, rather than setting it to zero, because:
      // 1. 3d transforms causes text to appear blurry on IE and Edge.
      state('open', style({
        'transform': 'none',
        'visibility': 'visible',
      })),
      transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
      transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ]),
    transformContent: trigger('transformContent', [
      state('closed', style({
        'transform': 'none',
      })),
      transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
      transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ])
  };

export enum DaffSidebarAnimationStates {
    OPEN =  'open',
    CLOSED = 'closed'
}