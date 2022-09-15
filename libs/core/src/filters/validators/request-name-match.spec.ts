import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRequest,
  DaffFilterNotFound,
  DaffFilter,
} from '@daffodil/core';
import {
  DaffFilterFactory,
  DaffFilterRequestFactory,
} from '@daffodil/core/testing';

import { DaffFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';
import { daffFilterValidateRequestNameMatch } from './request-name-match';

describe('@daffodil/core | filters | validators | daffFilterValidateRequestNameMatch', () => {
  let filterFactory: DaffFilterFactory;
  let filterRequestFactory: DaffFilterRequestFactory;

  let filterRequest: DaffFilterRequest;
  let filter: DaffFilter;

  beforeEach(() => {
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterRequestFactory = TestBed.inject(DaffFilterRequestFactory);

    filterRequest = filterRequestFactory.create();
  });

  describe('when the filter is not present', () => {
    it('should throw a DaffFilterNotFound', () => {
      expect(() => daffFilterValidateRequestNameMatch(filterRequest, null)).toThrow(jasmine.any(DaffFilterNotFound));
    });
  });

  describe('when the names do not match', () => {
    beforeEach(() => {
      filter = filterFactory.create();
    });

    it('should throw a DaffFilterNotFound', () => {
      expect(() => daffFilterValidateRequestNameMatch(filterRequest, filter)).toThrow(jasmine.any(DaffFilterRequestNameMismatch));
    });
  });

  describe('when the names match', () => {
    beforeEach(() => {
      filter = filterFactory.create({
        name: filterRequest.name,
      });
    });

    it('should not throw', () => {
      expect(() => daffFilterValidateRequestNameMatch(filterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
