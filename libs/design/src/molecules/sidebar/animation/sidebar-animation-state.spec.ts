import { DaffSidebarModeEnum } from '../helper/sidebar-mode';
import { DaffSidebarAnimationStates } from './sidebar-animation';
import { getAnimationState } from './sidebar-animation-state';

describe('SidebarAnimationState Calculation', () => {
  it('should return `none` if the sidebar mode is `side`', () => {
    expect(getAnimationState(false, DaffSidebarModeEnum.Side)).toEqual(DaffSidebarAnimationStates.NONE);
    expect(getAnimationState(true, DaffSidebarModeEnum.Side)).toEqual(DaffSidebarAnimationStates.NONE);
  });

  it('should return `under-open` if it is open and the sidebar mode is `under', () => {
    expect(getAnimationState(true, DaffSidebarModeEnum.Under)).toEqual(DaffSidebarAnimationStates.UNDEROPEN);
  });

  it('should return `under-closed` if it is not open and the sidebar mode is `under', () => {
    expect(getAnimationState(false, DaffSidebarModeEnum.Under)).toEqual(DaffSidebarAnimationStates.UNDERCLOSED);
  });

  it('should return `closed` if it is not open', () => {
    expect(getAnimationState(false, DaffSidebarModeEnum.Over)).toEqual(DaffSidebarAnimationStates.CLOSED);
  });

  it('should return `open` if it is open', () => {
    expect(getAnimationState(true, DaffSidebarModeEnum.Over)).toEqual(DaffSidebarAnimationStates.OPEN);
  });
});
