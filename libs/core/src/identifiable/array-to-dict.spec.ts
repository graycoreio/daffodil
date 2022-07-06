import { DaffIdentifiable } from '@daffodil/core';

import { daffIdentifiableArrayToDict } from './array-to-dict';

describe('@daffodil/core | daffIdentifiableArrayToDict', () => {
  let array: DaffIdentifiable[];

  beforeEach(() => {
    array = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];
  });

  describe('when getKey is not provided', () => {
    it('should convert the array to a dict, keying by the id field', () => {
      const expected = {
        1: { id: '1' },
        2: { id: '2' },
        3: { id: '3' },
      };
      expect(daffIdentifiableArrayToDict(array)).toEqual(expected);
    });
  });
});
