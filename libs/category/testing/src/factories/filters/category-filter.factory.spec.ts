import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilter } from '@daffodil/category';

import { DaffCategoryFilterFactory } from './category-filter.factory';

fdescribe('Category | Testing | Factories | DaffCategoryFilterFactory', () => {

  let categoryFilterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFilterFactory],
    });

    categoryFilterFactory = TestBed.inject(DaffCategoryFilterFactory);
  });

  it('should be created', () => {
    expect(categoryFilterFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilter;

    beforeEach(() => {
      result = categoryFilterFactory.create();
    });

    it('should return a category filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
