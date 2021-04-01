import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { DaffCategoryFilterRangeNumericFactory } from './range-numeric';

fdescribe('Category | Testing | Factories | DaffCategoryFilterRangeNumericFactory', () => {

  let factory: DaffCategoryFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangeNumeric;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category filter of type range', () => {
      expect(result.max).toBeDefined();
      expect(result.min).toBeDefined();
      expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
    });
  });
});
