import { DaffSidebarAnimationStates } from './sidebar-animation';
import { getAnimationState } from './sidebar-animation-state';

describe('SidebarAnimationState Calculation', () => {
  it('should return `open` if it is open', () => {
    expect(getAnimationState(true)).toEqual(DaffSidebarAnimationStates.OPEN);
  });

  it('should return `none` if it is disabled`', () => {
    expect(getAnimationState(false, false)).toEqual(DaffSidebarAnimationStates.NONE);
    expect(getAnimationState(true, false)).toEqual(DaffSidebarAnimationStates.NONE);
  });

  it('should return `closed` if it is not open', () => {
    expect(getAnimationState(false, true)).toEqual(DaffSidebarAnimationStates.CLOSED);
  });
});
