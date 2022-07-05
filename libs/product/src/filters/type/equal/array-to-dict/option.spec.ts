import { TestBed } from '@angular/core/testing';



import { DaffProductFilterEqualOption } from '@daffodil/product';
import { DaffProductFilterEqualOptionFactory } from '@daffodil/product/testing';

import { daffProductFilterEqualOptionArrayToDict } from './option';

describe('@daffodil/product | daffProductFilterEqualOptionArrayToDict', () => {
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let equalOption: DaffProductFilterEqualOption;

  beforeEach(() => {
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    equalOption = equalOptionFactory.create();
  });

  describe('transforming an array of equal options into a dict', () => {
    let dict: Record<DaffProductFilterEqualOption['value'], DaffProductFilterEqualOption>;

    beforeEach(() => {
      dict = daffProductFilterEqualOptionArrayToDict([equalOption]);
    });

    it('should return an object with keys set to the value of the option', () => {
      expect(dict).toEqual({
        [equalOption.value]: equalOption,
      });
    });
  });
});
