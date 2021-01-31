import {
  daffAdd,
  daffSubtract,
  daffMultiply,
  daffDivide,
} from './long-arithmetic';

describe('Core | Utils | Long Arithmetic', () => {

  describe('daffAdd', () => {

    it('should add long decimals and return the expected value', () => {
      expect(1.005 + 0.99 + 0.002).not.toEqual(1.997);
      expect(daffAdd(1.005, 0.99, 0.002)).toEqual(1.997);
    });

    it('should return NaN if given an undefined value', () => {
      expect(daffAdd(undefined, 1)).toEqual(NaN);
    });

    it('should treat null values as zero', () => {
      expect(daffAdd(null, 1)).toEqual(1);
    });
  });

  describe('daffSubtract', () => {

    it('should subtract long decimals and return the expected value', () => {
      expect(1.005 - 0.99 - 0.002).not.toEqual(0.013);
      expect(daffSubtract(1.005, 0.99, 0.002)).toEqual(0.013);
    });

    it('should return NaN if given an undefined value', () => {
      expect(daffSubtract(undefined, 1)).toEqual(NaN);
    });

    it('should treat null values as zero', () => {
      expect(daffSubtract(null, 1)).toEqual(-1);
    });
  });

  describe('daffMultiply', () => {

    it('should multiply long decimals and return the expected value', () => {
      expect(1.005 * 0.99 * 0.002).not.toEqual(0.0019899);
      expect(daffMultiply(1.005, 0.99, 0.002)).toEqual(0.0019899);
    });

    it('should return NaN if given an undefined value', () => {
      expect(daffMultiply(undefined, 1)).toEqual(NaN);
    });

    it('should treat null values as zero', () => {
      expect(daffMultiply(null, 1)).toEqual(0);
    });
  });

  describe('daffDivide', () => {

    it('should divide long decimals and return the expected value', () => {
      expect(1.005 / 5 / 0.001).not.toEqual(201);
      expect(daffDivide(1.005, 5, 0.001)).toEqual(201);
    });

    it('should return NaN if given an undefined value', () => {
      expect(daffDivide(undefined, 1)).toEqual(NaN);
    });

    it('should treat null values as zero', () => {
      expect(daffDivide(null, 1)).toEqual(0);
    });
  });
});
