import { TestBed } from '@angular/core/testing';

import { DaffCategoryRangeFilter } from '@daffodil/category';

import {
  DaffCategoryRangeFilterFactory,
  DAFF_CATEGORY_TESTING_MINIMUM_RANGE_SIZE,
} from './category-range-filter.factory';

describe('@daffodil/category/testing | Factories | DaffCategoryRangeFilterFactory', () => {

  let categoryRangeFilterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryRangeFilterFactory],
    });

    categoryRangeFilterFactory = TestBed.inject(DaffCategoryRangeFilterFactory);
  });

  it('should be created', () => {
    expect(categoryRangeFilterFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryRangeFilter;

    beforeEach(() => {
      result = categoryRangeFilterFactory.create();
    });

    it('should return a CategoryRangeFilter with all required fields defined', () => {
      expect(result.type).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.min).toBeDefined();
      expect(result.max).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
