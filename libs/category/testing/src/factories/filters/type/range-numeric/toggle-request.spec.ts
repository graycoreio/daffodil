import { TestBed } from '@angular/core/testing';

import { DaffToggleCategoryFilterRangeNumericRequest } from '@daffodil/category';
import { DaffCategoryFilterType } from '@daffodil/category';

import { DaffCategoryFilterToggleRequestRangeNumericFactory } from './toggle-request';

describe('Category | Testing | Factories | DaffCategoryFilterToggleRequestRangeNumericFactory', () => {

  let factory: DaffCategoryFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterToggleRequestRangeNumericFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffToggleCategoryFilterRangeNumericRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a range numeric toggle-request', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
      expect(typeof result.value).toEqual('number');
      expect(result.value.min).toBeDefined();
      expect(result.value.max).toBeDefined();
    });
  });
});
