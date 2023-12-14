import { DaffSidebarAnimationStates } from './sidebar-animation';
import { DaffSidebarAnimationState } from './sidebar-animation-state';
import { AnimationStateWithParams } from '../../../core/public_api';

export type DaffSidebarViewportAnimationState = DaffSidebarAnimationStates.OPEN | DaffSidebarAnimationStates.CLOSED;


export interface DaffSidebarAnimationStateParams {
  shift: string;
};

export type DaffSidebarViewportAnimationStateWithParams = AnimationStateWithParams<DaffSidebarViewportAnimationState, DaffSidebarAnimationStateParams>;


export const getSidebarViewportAnimationState = (open: boolean): DaffSidebarViewportAnimationState =>
  open ? DaffSidebarAnimationStates.OPEN : DaffSidebarAnimationStates.CLOSED;
