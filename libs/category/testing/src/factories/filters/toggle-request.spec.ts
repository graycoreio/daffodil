import { TestBed } from '@angular/core/testing';

import { DaffToggleCategoryFilterRequest } from '@daffodil/category';
import { DaffCategoryFilterType } from '@daffodil/category';

import { DaffCategoryFilterToggleRequestFactory } from './toggle-request';

describe('Category | Testing | Factories | DaffCategoryFilterToggleRequestFactory', () => {

  let factory: DaffCategoryFilterToggleRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffToggleCategoryFilterRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a toggle-request', () => {
      expect(result.value).toBeDefined();
      expect([DaffCategoryFilterType.RangeNumeric, DaffCategoryFilterType.Equal]).toContain(result.type);
    });
  });
});
