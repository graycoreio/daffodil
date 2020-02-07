import { getAnimationState } from './modal-animation-state';

describe('DaffModal | Animation state calculation', () => {
	it('should return `open` when passed true', () => {
		expect(getAnimationState(true)).toEqual('open');
	});

	it('should return `closed` when passed false', () => {
		expect(getAnimationState(false)).toEqual('closed');
	});
});
