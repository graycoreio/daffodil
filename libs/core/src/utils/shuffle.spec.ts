import { shuffle } from './shuffle';

describe('Core | Utils | shuffle', () => {
	it('should return the array given with the items in a different order', () => {
		// this array is really long to make it really unlikely that this test fails,
		// i.e. that the result ends up being in the same order as the original array.
		const initialArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
		const result = shuffle(initialArray);
		result.forEach(item => {
			expect(initialArray.includes(item)).toBeTruthy();
		})
		expect(initialArray).not.toEqual(result);
	});
});
