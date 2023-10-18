import { DaffSidebarAnimationState } from './sidebar-animation-state';
import { AnimationStateWithParams } from '../../../core/public_api';

export interface DaffSidebarAnimationStateParams {
  shift: string;
};

export type DaffSidebarViewportAnimationState = AnimationStateWithParams<DaffSidebarAnimationState, DaffSidebarAnimationStateParams>;
