import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangeNumericRequest } from '@daffodil/category';
import { DaffCategoryFilterTypeReplacement } from '@daffodil/category';

import { DaffCategoryFilterRequestRangeNumericFactory } from './request';

describe('Category | Testing | Factories | DaffCategoryFilterRequestRangeNumericFactory', () => {

  let factory: DaffCategoryFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangeNumericRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an range numeric request', () => {
      expect(result.type).toEqual(DaffCategoryFilterTypeReplacement.RangeNumeric);
      expect(typeof result.value.min).toEqual('number');
      expect(typeof result.value.max).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
