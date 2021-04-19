import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterToggleRequest } from '@daffodil/category';
import { DaffCategoryFilterTypeReplacement } from '@daffodil/category';

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

    let result: DaffCategoryFilterToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a toggle-request', () => {
      expect(result.value).toBeDefined();
      expect([DaffCategoryFilterTypeReplacement.RangeNumeric, DaffCategoryFilterTypeReplacement.Equal]).toContain(result.type);
    });
  });
});
