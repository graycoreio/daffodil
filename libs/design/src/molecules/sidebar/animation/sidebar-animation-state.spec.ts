import { getAnimationState } from "./sidebar-animation-state";
import { DaffSidebarAnimationStates } from "./sidebar-animation";

fdescribe('SidebarAnimationState Calculation', () => {
    describe('push mode', () => {
        it('should return `open` if it is open', () => {
            expect(getAnimationState(true, "push")).toEqual(DaffSidebarAnimationStates.OPEN);
        });

        it('should return `closed_push` if it is closed', () => {
            expect(getAnimationState(false, "push")).toEqual(DaffSidebarAnimationStates.CLOSED_PUSH);
        });
    });

    describe('side mode', () => {
        it('should return `open` if it is open', () => {
            expect(getAnimationState(true, "side")).toEqual(DaffSidebarAnimationStates.OPEN);
        });
    
        it('should return `open` if it is closed', () => {
            expect(getAnimationState(false, "side")).toEqual(DaffSidebarAnimationStates.OPEN);
        });
    })
    
    describe('over mode', () => {
        it('should return `open` if it is open', () => {
            expect(getAnimationState(true, "over")).toEqual(DaffSidebarAnimationStates.OPEN);
        })
    
        it('should return `closed_over` if it is not open', () => {
            expect(getAnimationState(false, "over")).toEqual(DaffSidebarAnimationStates.CLOSED_OVER);
        })
    });
})