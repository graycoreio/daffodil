import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRequestTypeMismatch,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterEqualRequestReplacement,
} from '@daffodil/category';
import {
  DaffCategoryFilterRequestEqualFactory,
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffCategoryValidateFilterRequestTypeMatch } from './request-type-match';

describe('@daffodil/category | filters | validators | daffCategoryValidateFilterRequestTypeMatch', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;

  let equalFilterRequest: DaffCategoryFilterEqualRequestReplacement;
  let filter: DaffCategoryFilterReplacement;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);

    equalFilterRequest = equalFilterRequestFactory.create();
  });

  describe('when the types do not match', () => {
    beforeEach(() => {
      filter = rangeFilterFactory.create();
    });

    it('should throw a DaffCategoryFilterRequestTypeMismatch', () => {
      expect(() => daffCategoryValidateFilterRequestTypeMatch(equalFilterRequest, filter)).toThrow(jasmine.any(DaffCategoryFilterRequestTypeMismatch));
    });
  });

  describe('when the types match', () => {
    beforeEach(() => {
      filter = equalFilterFactory.create();
    });

    it('should not throw', () => {
      expect(() => daffCategoryValidateFilterRequestTypeMatch(equalFilterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
