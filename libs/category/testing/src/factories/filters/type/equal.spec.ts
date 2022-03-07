import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterType,
  DaffCategoryFilterEqual,
} from '@daffodil/category';

import { DaffCategoryFilterEqualFactory } from './equal';

describe('@daffodil/category/testing | DaffCategoryFilterEqualFactory', () => {

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
    });

    it('should create options', () => {
      expect(Object.keys(result.options).length).toBeGreaterThan(0);
    });
  });
});
