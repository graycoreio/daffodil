import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRequestTypeMismatch,
  DaffProductFilter,
  DaffProductFilterEqualRequest,
} from '@daffodil/product';
import {
  DaffProductFilterRequestEqualFactory,
  DaffProductFilterEqualFactory,
  DaffProductFilterRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffProductValidateFilterRequestTypeMatch } from './request-type-match';

describe('@daffodil/product | filters | validators | daffProductValidateFilterRequestTypeMatch', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let equalFilterRequestFactory: DaffProductFilterRequestEqualFactory;

  let equalFilterRequest: DaffProductFilterEqualRequest;
  let filter: DaffProductFilter;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);

    equalFilterRequest = equalFilterRequestFactory.create();
  });

  describe('when the types do not match', () => {
    beforeEach(() => {
      filter = rangeFilterFactory.create();
    });

    it('should throw a DaffProductFilterRequestTypeMismatch', () => {
      expect(() => daffProductValidateFilterRequestTypeMatch(equalFilterRequest, filter)).toThrow(jasmine.any(DaffProductFilterRequestTypeMismatch));
    });
  });

  describe('when the types match', () => {
    beforeEach(() => {
      filter = equalFilterFactory.create();
    });

    it('should not throw', () => {
      expect(() => daffProductValidateFilterRequestTypeMatch(equalFilterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
