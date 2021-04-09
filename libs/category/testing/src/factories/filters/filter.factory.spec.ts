import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';

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

    describe('when the partial type is equal', () => {
      beforeEach(() => {
        result = categoryFilterFactory.create({
          type: DaffCategoryFilterType.Equal,
        });
      });

      it('should return an equal filter', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.Equal);
      });
    });

    describe('when the partial type is range numeric', () => {
      beforeEach(() => {
        result = categoryFilterFactory.create({
          type: DaffCategoryFilterType.RangeNumeric,
        });
      });

      it('should return a range numeric filter', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
      });
    });

    it('should return a category filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
