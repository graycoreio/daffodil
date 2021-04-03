import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
} from '@daffodil/category';

import { DaffCategoryFilterEqualFactory } from './equal';

fdescribe('Category | Testing | Factories | DaffCategoryFilterEqualFactory', () => {

  let factory: DaffCategoryFilterEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryEqualFilter;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category filter of type equal', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.Equal);
    });
  });
});
