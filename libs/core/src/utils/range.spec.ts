import { range } from './range';

describe('Core | Utils | range', () => {
    it('should return an array of a single element if both start and end are the same', () => {
        expect(range(5,5)).toEqual([5]);
    });

    it('should return an array of length `end - start + 1`', () => {
        expect(range(0,5).length).toBe(6);
    });

    it('should contain no undefined elements', () => {
        const arr = range(0,5);
        const filteredArr = range(0,5).filter((x) => x !== undefined);
        expect(filteredArr.length).toEqual(arr.length);
    });

    it('should be able to accept negative numbers as input', () => {
        expect(range(-1, 2)).toEqual([-1,0,1,2]);
    })
});