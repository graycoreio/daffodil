import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterNotFound,
  DaffCategoryFilterReplacement,
} from '@daffodil/category';
import {
  DaffCategoryFilterFactory,
  DaffCategoryFilterRequestReplacementFactory,
} from '@daffodil/category/testing';

import { DaffCategoryFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';
import { daffCategoryValidateFilterRequestNameMatch } from './request-name-match';

describe('@daffodil/category | filters | validators | daffCategoryValidateFilterRequestNameMatch', () => {
  let filterFactory: DaffCategoryFilterFactory;
  let filterRequestFactory: DaffCategoryFilterRequestReplacementFactory;

  let filterRequest: DaffCategoryFilterRequestReplacement;
  let filter: DaffCategoryFilterReplacement;

  beforeEach(() => {
    filterFactory = TestBed.inject(DaffCategoryFilterFactory);
    filterRequestFactory = TestBed.inject(DaffCategoryFilterRequestReplacementFactory);

    filterRequest = filterRequestFactory.create();
  });

  describe('when the filter is not present', () => {
    it('should throw a DaffCategoryFilterNotFound', () => {
      expect(() => daffCategoryValidateFilterRequestNameMatch(filterRequest, null)).toThrow(jasmine.any(DaffCategoryFilterNotFound));
    });
  });

  describe('when the names do not match', () => {
    beforeEach(() => {
      filter = filterFactory.create();
    });

    it('should throw a DaffCategoryFilterNotFound', () => {
      expect(() => daffCategoryValidateFilterRequestNameMatch(filterRequest, filter)).toThrow(jasmine.any(DaffCategoryFilterRequestNameMismatch));
    });
  });

  describe('when the names match', () => {
    beforeEach(() => {
      filter = filterFactory.create({
        name: filterRequest.name,
      });
    });

    it('should not throw', () => {
      expect(() => daffCategoryValidateFilterRequestNameMatch(filterRequest, filter)).not.toThrow(jasmine.anything());
    });
  });
});
