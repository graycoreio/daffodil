import { getAnimationState } from './animation-state';

describe('DaffMenuComponent | Animation State Calculation', () => {
  it('should return `open` when passed true', () => {
    expect(getAnimationState(true)).toEqual('open');
  });

  it('should return `closed` when passed false', () => {
    expect(getAnimationState(false)).toEqual('closed');
  });
});
