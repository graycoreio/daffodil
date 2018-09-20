import { getAnimationState } from "./backdrop-animation-state";

describe('BackdropAnimationState Calculation', () => {
  
    it('should return `show` if it is show', () => {
        expect(getAnimationState(true)).toEqual('show');
    });

    it('should return `void` if it is not show', () => {
        expect(getAnimationState(false)).toEqual('void');
    });
});