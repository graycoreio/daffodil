import { getAnimationState } from "./sidebar-animation-state";
import { DaffSidebarAnimationStates } from "./sidebar-animation";

describe('SidebarAnimationState Calculation', () => {

    it('should return `open` if it is open', () => {
        expect(getAnimationState(true)).toBe(DaffSidebarAnimationStates.OPEN);
    })

    it('should return `void` if it is disabled`', () => {
        expect(getAnimationState(false, false)).toBe(DaffSidebarAnimationStates.VOID);
        expect(getAnimationState(true, false)).toBe(DaffSidebarAnimationStates.VOID);
    });

    it('should return `void` if it is not open', () => {
        expect(getAnimationState(false, true)).toBe(DaffSidebarAnimationStates.VOID);
    })
})