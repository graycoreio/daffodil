import { randomSlice } from './random-slice';

describe('Core | Utils | random-slice', () => {

  it('should return an empty array if given an empty array', () => {
    const initialArray = [];
    const result = randomSlice(initialArray);
    expect(result).toEqual([]);
  });

  it('should return a slice of the given array of the specified length', () => {
    const length = 4;
    const initialArray = [1,2,3,4,5,6,7,8,9];
    const result = randomSlice(initialArray, length);
    const start = initialArray.indexOf(result[0]);
    const end = start + length;
    expect(initialArray.slice(start, end)).toEqual(result);
  });

  it('should throw an error if the given length is greater than the length of the array', () => {
    const initialArray = [1,2,3,4,5,6,7,8,9];
    expect(() => randomSlice(initialArray, initialArray.length + 1))
      .toThrowError('Requested length is longer than array length.');
  });

  it('should return a random slice if a length is not given', () => {
    const initialArray = [1,2,3,4,5,6,7,8,9];
    const result = randomSlice(initialArray);
    const start = initialArray.indexOf(result[0]);
    const end = start + result.length;
    expect(initialArray.slice(start, end)).toEqual(result);
  });
});
