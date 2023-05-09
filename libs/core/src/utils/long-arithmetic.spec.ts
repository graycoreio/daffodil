import {
  daffAdd,
  daffSubtract,
  daffMultiply,
  daffDivide,
  daffPrecision,
} from './long-arithmetic';

describe('Core | Utils | Long Arithmetic', () => {

  const testEdgeCases = [];
  const specialCases  = [[], [1]];
  const edges = [0, -0, 1, -1, undefined, null, NaN, Infinity, -Infinity];
  edges.forEach((num) => {
    edges.forEach((denom) => {
      testEdgeCases.push({ i: [num, denom], o: undefined, c: '' });
    });
  });

  specialCases.forEach((i) => {
    testEdgeCases.push({ i, o: undefined, c: '' });
  });

  describe('daffAdd', () => {
    const testIntegerCases = [
      { i: [1,2], o: 3, c: 'Integer Addition' },
      { i: [3,3], o: 6, c: 'Integer Addition' },
      { i: [3,3,4], o: 10, c: 'Integer Addition' },
    ];

    const testLongCases = [
      { i: [0.2, 0.1], o: 0.3, c: 'Rational Addition' },
      { i: [.333, 3], o: 3.333, c: 'Rational Addition' },
      { i: [.333, 3, 0.3], o: 3.633, c: 'Rational Addition' },
    ];

    it('should add long decimals and return the expected value', () => {
      expect(0.2 + 0.1).not.toEqual(0.3);
      expect(daffAdd(0.2, 0.1)).toEqual(0.3);
    });

    [...testLongCases, ...testIntegerCases].forEach(test => {
      it(`should add long decimals correctly: ${test.i} - ${test.c}`, () => {
        expect(daffAdd(...test.i)).toEqual(test.o);
      });
    });

    [...testIntegerCases, ...testEdgeCases].forEach(test => {
      it(`should add integers and edgeCases the same as native js:  ${test.i} - ${test.c}`, () => {
        expect(daffAdd(...test.i))
          .toEqual(test.i.slice(1).reduce((acc, i) => acc + i, test.i[0]));
      });
    });
  });

  describe('daffSubtract', () => {
    const testIntegerCases = [
      { i: [1,2], o: -1, c: 'Integer Subtraction' },
      { i: [3,3], o: 0, c: 'Integer Subtraction' },
    ];

    const testLongCases = [
      { i: [0.2, 0.1], o: 0.1, c: 'Rational Subtraction' },
      { i: [.333, 3], o: -2.667, c: 'Rational Subtraction' },
    ];

    it('should subtract long decimals and return the expected value', () => {
      expect(1.005 - 0.99 - 0.002).not.toEqual(0.013);
      expect(daffSubtract(1.005, 0.99, 0.002)).toEqual(0.013);
    });

    [...testLongCases, ...testIntegerCases].forEach(test => {
      it(`should subtract long decimals correctly: ${test.i} - ${test.c}`, () => {
        expect(daffSubtract(...test.i)).toEqual(test.o);
      });
    });

    [...testIntegerCases, ...testEdgeCases].forEach(test => {
      it(`should subtract integers and edgeCases the same as native js:  ${test.i} - ${test.c}`, () => {
        expect(daffSubtract(...test.i))
          .toEqual(test.i.slice(1).reduce((acc, i) => acc - i, test.i[0]));
      });
    });
  });

  describe('daffMultiply', () => {
    const testIntegerCases = [
      { i: [1,2], o: 2, c: 'Integer Multiplication' },
      { i: [3,3], o: 9, c: 'Integer Multiplication' },
    ];

    const testLongCases = [
      { i: [0.2, 0.1], o: 0.02, c: 'Rational Multiplication' },
      { i: [.333, 3], o: 0.999, c: 'Rational Multiplication' },
    ];

    [...testLongCases, ...testIntegerCases].forEach(test => {
      it(`should multiply long decimals correctly: ${test.i} - ${test.c}`, () => {
        expect(daffMultiply(...test.i)).toEqual(test.o);
      });
    });

    [...testIntegerCases, ...testEdgeCases].forEach(test => {
      it(`should multiple integers and edgeCases the same as native js:  ${test.i} - ${test.c}`, () => {
        expect(daffMultiply(...test.i))
          .toEqual(test.i.slice(1).reduce((acc, i) => acc * i, test.i[0]));
      });
    });
  });

  describe('daffDivide', () => {
    const testIntegerCases = [
      { i: [1,2], o: 0.5, c: 'Finite Rational Division' },
      { i: [2,3], o: 0.6666666666666666, c: 'Infinite Rational Division' },
    ];

    const testLongCases = [
      { i: [1.005, 5, 0.001], o: 201, c: '' },
    ];

    [...testLongCases, ...testIntegerCases].forEach(test => {
      it(`should divide long decimals correctly: ${test.i} - ${test.c}`, () => {
        expect(daffDivide(...test.i)).toEqual(test.o);
      });
    });

    [...testIntegerCases, ...testEdgeCases].forEach(test => {
      it(`should divide integers and edgeCases the same as native js:  ${test.i} - ${test.c}`, () => {
        expect(daffDivide(...test.i))
          .toEqual(test.i.slice(1).reduce((acc, i) => acc / i, test.i[0]));
      });
    });
  });

  describe('daffPrecision', () => {
    const testCases = [
      { i: 0, o: 1 },
      { i: 1, o: 1 },
      { i: 1.1, o: 1e1 },
      { i: 1.11, o: 1e2 },
      { i: 1.111, o: 1e3 },
      { i: -0, o: 1 },
      { i: undefined, o: 1 },
      { i: null, o: 1 },
      { i: NaN, o: 1 },
      { i: Infinity, o: 1 },
      { i: Math.PI, o: 1e11 },
      { i: -Infinity, o: 1 },
    ];

    testCases.forEach(test => {
      it(`should compute daffPrecision of ${test.i} correctly`, () => {
        expect(daffPrecision(test.i)).toEqual(test.o);
      });
    });
  });
});
