import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { DaffCategoryFilterRangeNumericFactory } from './range-numeric';

describe('Category | Testing | Factories | DaffCategoryFilterRangeNumericFactory', () => {

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

    it('should return a category filter of type range numeric', () => {
      expect(result.max).toBeDefined();
      expect(result.min).toBeDefined();
      expect(typeof result.min).toEqual('number');
      expect(typeof result.max).toEqual('number');
      expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
