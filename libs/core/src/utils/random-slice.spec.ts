import { randomSlice } from './random-slice';

describe('Core | Utils | random-slice', () => {

	it('should return an empty array if given an empty array', () => {
		const initialArray = [];
		const result = randomSlice(initialArray);
		expect(result).toEqual([]);
	});

	it('should return a slice of the given array', () => {
		const initialArray = [1,2,3,4,5,6,7,8,9];
		const result = randomSlice(initialArray);
		const start = initialArray.indexOf(result[0]);
		const end = start + result.length;
		expect(initialArray.slice(start, end)).toEqual(result);
	});
});
