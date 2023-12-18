import { AnimationStateWithParams } from '@daffodil/design';

import { DaffSidebarAnimationStates } from './sidebar-animation';

export type DaffSidebarViewportAnimationState = DaffSidebarAnimationStates.OPEN | DaffSidebarAnimationStates.CLOSED;


export interface DaffSidebarAnimationStateParams {
  shift: string;
};

export type DaffSidebarViewportAnimationStateWithParams = AnimationStateWithParams<DaffSidebarViewportAnimationState, DaffSidebarAnimationStateParams>;


export const getSidebarViewportAnimationState = (open: boolean): DaffSidebarViewportAnimationState =>
  open ? DaffSidebarAnimationStates.OPEN : DaffSidebarAnimationStates.CLOSED;
