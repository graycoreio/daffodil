import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangePair } from '@daffodil/category';

import { DaffCategoryFilterRangeNumericPairFactory } from './pair';

describe('Category | Testing | Factories | DaffCategoryFilterRangeNumericPairFactory', () => {

  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
  });

  it('should be created', () => {
    expect(rangePairFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangePair<number>;

    beforeEach(() => {
      result = rangePairFactory.create();
    });

    it('should return a numeric DaffCategoryFilterRangePair', () => {
      expect(result.max).toBeDefined();
      expect(typeof result.max.value).toEqual('number');
      expect(typeof result.min.value).toEqual('number');
      expect(result.min.value).toBeLessThanOrEqual(result.max.value);
    });
  });
});
