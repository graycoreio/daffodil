import { getAnimationState } from './select-animation-state';

describe('selectAnimationState Calculation', () => {
  it('should return `open` if the input is true', () => {
    expect(getAnimationState(true)).toEqual('open');
  });

  it('should return `closed` if the input is false', () => {
    expect(getAnimationState(false)).toEqual('closed');
  });
});
