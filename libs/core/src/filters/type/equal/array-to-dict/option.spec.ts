import { TestBed } from '@angular/core/testing';



import { DaffFilterEqualOption } from '@daffodil/core';
import { DaffFilterEqualOptionFactory } from '@daffodil/core/testing';

import { daffFilterEqualOptionArrayToDict } from './option';

describe('@daffodil/core | daffFilterEqualOptionArrayToDict', () => {
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let equalOption: DaffFilterEqualOption;

  beforeEach(() => {
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    equalOption = equalOptionFactory.create();
  });

  describe('transforming an array of equal options into a dict', () => {
    let dict: Record<DaffFilterEqualOption['value'], DaffFilterEqualOption>;

    beforeEach(() => {
      dict = daffFilterEqualOptionArrayToDict([equalOption]);
    });

    it('should return an object with keys set to the value of the option', () => {
      expect(dict).toEqual({
        [equalOption.value]: equalOption,
      });
    });
  });
});
