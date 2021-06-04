import { daffArrayToDict } from './array-to-dict';

describe('daffArrayToDict', () => {
  let array;
  let notKeyArray;

  beforeEach(() => {
    array = [
      { key: '1', val: 1 },
      { key: '2', val: 2 },
      { key: '3', val: 3 },
    ];
    notKeyArray = [
      { notkey: '1', val: 1 },
      { notkey: '2', val: 2 },
      { notkey: '3', val: 3 },
    ];
  });

  describe('when getKey is not provided', () => {
    it('should convert the array to a dict, keying by the key field', () => {
      const expected = {
        1: { key: '1', val: 1 },
        2: { key: '2', val: 2 },
        3: { key: '3', val: 3 },
      };
      expect(daffArrayToDict<typeof array[0]>(array)).toEqual(expected);
    });
  });

  describe('when getKey is provided', () => {
    it('should convert the array to a dict, keying with the provided getter', () => {
      const expected = {
        1: { notkey: '1', val: 1 },
        2: { notkey: '2', val: 2 },
        3: { notkey: '3', val: 3 },
      };
      expect(daffArrayToDict<typeof notKeyArray[0]>(notKeyArray, val => val.notkey)).toEqual(expected);
    });
  });
});
