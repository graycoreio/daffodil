import {
    animate,
    state,
    style,
    transition,
    trigger,
    AnimationTriggerMetadata,
  } from '@angular/animations';
  
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
      transition('void <=> open',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ]),
    transformContent: trigger('transformContent', [
      state('void', style({
        'transform': 'none',
      })),
      transition('void <=> open',
          animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  };

export enum DaffSidebarAnimationStates {
    OPEN =  'open',
    VOID = 'void'
}