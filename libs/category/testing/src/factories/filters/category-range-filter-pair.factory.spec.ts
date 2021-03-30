import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangePair } from '@daffodil/category';

import { DaffCategoryFilterRangePairFactory } from './category-range-filter-pair.factory';

describe('@daffodil/category/testing | Factories | DaffCategoryFilterRangePairFactory', () => {

  let categoryRangeFilterPairFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFilterRangePairFactory],
    });

    categoryRangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangePairFactory);
  });

  it('should be created', () => {
    expect(categoryRangeFilterPairFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangePair;

    beforeEach(() => {
      result = categoryRangeFilterPairFactory.create();
    });

    it('should return a CategoryFilterRangePair with all required fields defined', () => {
      expect(result.min).toBeDefined();
      expect(result.max).toBeDefined();
      expect(result.applied).toBeDefined();
    });

    it('should set max to be greater than min', () => {
      expect(Number(result.max)).toBeGreaterThan(Number(result.min));
    });
  });
});
