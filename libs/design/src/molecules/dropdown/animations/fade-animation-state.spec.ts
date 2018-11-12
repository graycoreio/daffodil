import { getAnimationState } from "./fade-animation-state";

describe('FadeAnimationState Calculation', () => {
  
    it('should return `show` if it is show', () => {
        expect(getAnimationState(true)).toEqual('show');
    });

    it('should return `void` if it is not show', () => {
        expect(getAnimationState(false)).toEqual('void');
    });
});