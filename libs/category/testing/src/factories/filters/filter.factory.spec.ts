import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilter } from '@daffodil/category';

import { DaffCategoryFilterFactory } from './filter.factory';

describe('Category | Testing | Factories | DaffCategoryFilterFactory', () => {

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

  describe('createMany', () => {
    let result: DaffCategoryFilter[];

    it('should create as many category filters as desired', () => {
      result = categoryFilterFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = categoryFilterFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
