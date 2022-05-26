import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRequest,
  DaffProductFilterNotFound,
  DaffProductFilter,
} from '@daffodil/product';
import {
  DaffProductFilterFactory,
  DaffProductFilterRequestFactory,
} from '@daffodil/product/testing';

import { DaffProductFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';
import { daffProductValidateFilterRequestNameMatch } from './request-name-match';

describe('@daffodil/product | filters | validators | daffProductValidateFilterRequestNameMatch', () => {
  let filterFactory: DaffProductFilterFactory;
  let filterRequestFactory: DaffProductFilterRequestFactory;

  let filterRequest: DaffProductFilterRequest;
  let filter: DaffProductFilter;

  beforeEach(() => {
    filterFactory = TestBed.inject(DaffProductFilterFactory);
    filterRequestFactory = TestBed.inject(DaffProductFilterRequestFactory);

    filterRequest = filterRequestFactory.create();
  });

  describe('when the filter is not present', () => {
    it('should throw a DaffProductFilterNotFound', () => {
      expect(() => daffProductValidateFilterRequestNameMatch(filterRequest, null)).toThrow(jasmine.any(DaffProductFilterNotFound));
    });
  });

  describe('when the names do not match', () => {
    beforeEach(() => {
      filter = filterFactory.create();
    });

    it('should throw a DaffProductFilterNotFound', () => {
      expect(() => daffProductValidateFilterRequestNameMatch(filterRequest, filter)).toThrow(jasmine.any(DaffProductFilterRequestNameMismatch));
    });
  });

  describe('when the names match', () => {
    beforeEach(() => {
      filter = filterFactory.create({
        name: filterRequest.name,
      });
    });

    it('should not throw', () => {
      expect(() => daffProductValidateFilterRequestNameMatch(filterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
