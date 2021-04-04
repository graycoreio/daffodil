import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRequest } from '@daffodil/category';

import { DaffCategoryFilterRequestFactory } from './request.factory';

describe('Category | Testing | Factories | DaffCategoryFilterRequestFactory', () => {

  let factory: DaffCategoryFilterRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFilterRequestFactory],
    });

    factory = TestBed.inject(DaffCategoryFilterRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
