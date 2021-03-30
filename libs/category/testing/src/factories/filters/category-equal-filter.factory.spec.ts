import { TestBed } from '@angular/core/testing';

import { DaffCategoryEqualFilter } from '@daffodil/category';

import { DaffCategoryEqualFilterFactory } from './category-equal-filter.factory';

describe('@daffodil/category/testing | Factories | DaffCategoryEqualFilterFactory', () => {

  let categoryEqualFilterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryEqualFilterFactory],
    });

    categoryEqualFilterFactory = TestBed.inject(DaffCategoryEqualFilterFactory);
  });

  it('should be created', () => {
    expect(categoryEqualFilterFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryEqualFilter;

    beforeEach(() => {
      result = categoryEqualFilterFactory.create();
    });

    it('should return a CategoryEqualFilter with all required fields defined', () => {
      expect(result.type).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
