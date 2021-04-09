import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterType,
  DaffCategoryFilterEqual,
} from '@daffodil/category';

import { DaffCategoryFilterEqualFactory } from './equal';

describe('Category | Testing | Factories | DaffCategoryFilterEqualFactory', () => {

  let factory: DaffCategoryFilterEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterEqual;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category filter of type equal', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.Equal);
      expect(result.options).toBeDefined();
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
