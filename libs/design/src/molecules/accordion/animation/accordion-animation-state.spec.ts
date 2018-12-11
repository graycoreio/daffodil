import { getAnimationState } from "./accordion-animation-state";

describe('accordionAnimationState Calculation', () => {
  
    it('should return `open` if it is open', () => {
        expect(getAnimationState(true)).toEqual('open');
    });

    it('should return `void` if it is not show', () => {
        expect(getAnimationState(false)).toEqual('void');
    });
});