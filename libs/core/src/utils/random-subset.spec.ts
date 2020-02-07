import { randomSubset } from './random-subset';

describe('Core | Utils | random-subset', () => {
	it('should return a random subset of the given array', () => {
		const initialArray = [1,2,3,4,5,6,7,8,9];
		const result = randomSubset(initialArray, 7);
		for (let i = 0; i < result.length; i++) {
			expect(initialArray.includes(result[i])).toBeTruthy();
		};
	});

	it('should throw an error if the given length is greater than the length of the array', () => {
		const initialArray = [1,2,3,4,5,6,7,8,9];
		expect(() => randomSubset(initialArray, initialArray.length + 1))
			.toThrowError('Requested length is longer than array length.');
	});

	it('should return a random subset if a length is not given', () => {
		const initialArray = [1,2,3,4,5,6,7,8,9];
		const result = randomSubset(initialArray);
		for (let i = 0; i < result.length; i++) {
			expect(initialArray.includes(result[i])).toBeTruthy();
		};
	});
});
