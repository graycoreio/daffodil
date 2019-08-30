import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
  query,
  sequence,
} from '@angular/animations';

export const sidebarDuration = "400ms";
export const sidebarTransition = sidebarDuration + " cubic-bezier(0.25, 0.8, 0.25, 1)";

export const daffSidebarAnimations: {
  readonly transformSidebar: AnimationTriggerMetadata,
  readonly transformContent: AnimationTriggerMetadata
} = {
  transformSidebar: trigger('transformSidebar', [
    state('closed_over', style({
      'transform': 'translate3d(-{{ sidebarWidth }},0,0)',
      'visibility': 'hidden',
    }), { params: { sidebarWidth: 0 } }),
    state('closed_push', style({
      'transform': 'translate3d(-{{ sidebarWidth }},0,0)',
      'visibility': 'hidden',
    }), { params: { sidebarWidth: 0 } }),
    state('open', style({
      'transform': 'none',
      'visibility': 'visible',
    })),
    transition('void <=> *', animate('0s')),
    transition('* <=> *', animate(sidebarTransition)),
  ]),
  transformContent: trigger('transformContent', [
    state('closed_push', style({
      'transform': 'none'
    })),
    state('closed_over', style({
      'transform': 'none'
    })),
    state('open_push', style({
      'transform': 'translate3d({{ sidebarWidth }},0,0)',
    }), { params: { sidebarWidth: 0 } }),
    state('open_side', style({
      'transform': 'none',
      'margin-left': '{{ sidebarWidth }}'
    }), { params: { sidebarWidth: 0 } }),
    transition('void <=> *', animate('0s')),
    transition('open_side => *', [
      query(':self', [
        style({ visibility: 'hidden', opacity: 0, 'margin-left': 0 }),
        animate(sidebarTransition, style({ visibility: "visible", opacity: 1 })),
      ])
    ], { params: { sidebarWidth: '0' } }),
    transition('closed_push => open_side', [
      query(':self', [
        style({ visibility: 'hidden', opacity: 0, 'margin-left': '{{ sidebarWidth }}' }),
        animate(sidebarTransition, style({ visibility: "visible", opacity: 1 })),
      ])
    ], { params: { sidebarWidth: '0' } }),
    transition('* <=> *', [
      animate(sidebarTransition),
    ]),
  ])
};

export type DaffSidebarAnimationStatesType = "open" | "open_side" | "open_push" | "closed_push" | "closed_over";
export enum DaffSidebarAnimationStates {
  OPEN = 'open',
  OPEN_SIDE = 'open_side',
  OPEN_PUSH = 'open_push',
  CLOSED_PUSH = 'closed_push',
  CLOSED_OVER = 'closed_over'
}


export interface DaffSidebarAnimationState {
  value: DaffSidebarAnimationStatesType,
  params: {
    sidebarWidth: string
  }
}