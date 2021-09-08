import { sample } from './sample';

describe('@daffodil/core | sample', () => {
  it('should return a random element of the given array', () => {
    const initialArray = [1,2,3,4,5,6,7,8,9];
    const result = sample(initialArray);
    expect(initialArray).toContain(result);
  });
});
