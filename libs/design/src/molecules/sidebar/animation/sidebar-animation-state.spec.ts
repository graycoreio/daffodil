import { getAnimationState } from "./sidebar-animation-state";
import { DaffSidebarAnimationStates } from "./sidebar-animation";

describe('SidebarAnimationState Calculation', () => {
    it('should return `open` if it is open', () => {
        expect(getAnimationState(true)).toEqual(DaffSidebarAnimationStates.OPEN);
    })

    it('should return `open` if it is disabled`', () => {
        expect(getAnimationState(false, false)).toEqual(DaffSidebarAnimationStates.OPEN);
        expect(getAnimationState(true, false)).toEqual(DaffSidebarAnimationStates.OPEN);
    });

    it('should return `closed` if it is not open', () => {
        expect(getAnimationState(false, true)).toEqual(DaffSidebarAnimationStates.CLOSED);
    })
})