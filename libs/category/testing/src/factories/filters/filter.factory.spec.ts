import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
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

    let result: DaffCategoryFilterReplacement;

    beforeEach(() => {
      result = categoryFilterFactory.create();
    });

    describe('when the partial type is equal', () => {
      beforeEach(() => {
        result = categoryFilterFactory.create({
          type: DaffCategoryFilterTypeReplacement.Equal,
        });
      });

      it('should return an equal filter', () => {
        expect(result.type).toEqual(DaffCategoryFilterTypeReplacement.Equal);
      });
    });

    describe('when the partial type is range numeric', () => {
      beforeEach(() => {
        result = categoryFilterFactory.create({
          type: DaffCategoryFilterTypeReplacement.RangeNumeric,
        });
      });

      it('should return a range numeric filter', () => {
        expect(result.type).toEqual(DaffCategoryFilterTypeReplacement.RangeNumeric);
      });
    });

    it('should return a category filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
