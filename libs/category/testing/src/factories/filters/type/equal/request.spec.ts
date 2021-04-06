import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { DaffCategoryFilterRequestEqualFactory } from './request';

describe('Category | Testing | Factories | DaffCategoryFilterRequestEqualFactory', () => {

  let factory: DaffCategoryFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterEqualRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffCategoryFilterType.Equal);
      expect(result.value.length).toEqual(1);
    });
  });
});
