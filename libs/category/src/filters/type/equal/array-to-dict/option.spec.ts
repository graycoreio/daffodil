import { TestBed } from '@angular/core/testing';


import { DaffCategoryFilterEqualOption } from '@daffodil/category';
import { DaffCategoryFilterEqualOptionFactory } from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffCategoryFilterEqualOptionArrayToDict } from './option';

describe('@daffodil/category | daffCategoryFilterEqualOptionArrayToDict', () => {
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let equalOption: DaffCategoryFilterEqualOption;

  beforeEach(() => {
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    equalOption = equalOptionFactory.create();
  });

  describe('transforming an array of equal options into a dict', () => {
    let dict: Dict<DaffCategoryFilterEqualOption>;

    beforeEach(() => {
      dict = daffCategoryFilterEqualOptionArrayToDict([equalOption]);
    });

    it('should return an object with keys set to the value of the option', () => {
      expect(dict).toEqual({
        [equalOption.value]: equalOption,
      });
    });
  });
});
