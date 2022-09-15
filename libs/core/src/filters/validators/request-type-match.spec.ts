import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRequestTypeMismatch,
  DaffFilter,
  DaffFilterEqualRequest,
} from '@daffodil/core';
import {
  DaffFilterRequestEqualFactory,
  DaffFilterEqualFactory,
  DaffFilterRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffFilterValidateRequestTypeMatch } from './request-type-match';

describe('@daffodil/core | filters | validators | daffFilterValidateRequestTypeMatch', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;

  let equalFilterRequest: DaffFilterEqualRequest;
  let filter: DaffFilter;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);

    equalFilterRequest = equalFilterRequestFactory.create();
  });

  describe('when the types do not match', () => {
    beforeEach(() => {
      filter = rangeFilterFactory.create();
    });

    it('should throw a DaffFilterRequestTypeMismatch', () => {
      expect(() => daffFilterValidateRequestTypeMatch(equalFilterRequest, filter)).toThrow(jasmine.any(DaffFilterRequestTypeMismatch));
    });
  });

  describe('when the types match', () => {
    beforeEach(() => {
      filter = equalFilterFactory.create();
    });

    it('should not throw', () => {
      expect(() => daffFilterValidateRequestTypeMatch(equalFilterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
