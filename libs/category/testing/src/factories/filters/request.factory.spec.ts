import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRequestReplacement } from '@daffodil/category';

import { DaffCategoryFilterRequestReplacementFactory } from './request.factory';

describe('Category | Testing | Factories | DaffCategoryFilterRequestReplacementFactory', () => {

  let factory: DaffCategoryFilterRequestReplacementFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFilterRequestReplacementFactory],
    });

    factory = TestBed.inject(DaffCategoryFilterRequestReplacementFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRequestReplacement;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
