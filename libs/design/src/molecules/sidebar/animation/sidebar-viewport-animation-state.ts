import { AnimationStateWithParams } from '../../../core/public_api';
import { DaffSidebarAnimationState } from './sidebar-animation-state';

export interface DaffSidebarAnimationStateParams {
  shift: string;
};

export type DaffSidebarViewportAnimationState = AnimationStateWithParams<DaffSidebarAnimationState, DaffSidebarAnimationStateParams>;
