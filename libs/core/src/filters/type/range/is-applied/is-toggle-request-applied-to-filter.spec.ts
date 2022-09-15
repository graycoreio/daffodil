import { TestBed } from '@angular/core/testing';

import {
  daffFilterRangePairArrayToDict,
  DaffFilterRangePair,
  DaffFilterRangeNumeric,
  DaffFilterRangeNumericToggleRequest,
} from '@daffodil/core';
import {
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
  DaffFilterToggleRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffIsRangeToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/core | filters | range | daffIsRequestedFilterRangeOptionApplied', () => {
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;
  let rangeToggleRequestFactory: DaffFilterToggleRequestRangeNumericFactory;

  let rangeFilter: DaffFilterRangeNumeric;
  let rangeFilterPair: DaffFilterRangePair<number>;
  let filterRequest: DaffFilterRangeNumericToggleRequest;

  let result: boolean;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
  });

  describe('when the requested filter option does not exist', () => {
    beforeEach(() => {
      rangeFilter = rangeFilterFactory.create({
        options: {},
      });
      filterRequest = rangeToggleRequestFactory.create({
        name: rangeFilter.name,
      });

      result = daffIsRangeToggleRequestAppliedToFilter(filterRequest, rangeFilter);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the requested filter option is applied', () => {
    beforeEach(() => {
      rangeFilterPair = rangePairFactory.create({ applied: true });
      rangeFilter = rangeFilterFactory.create({
        options: daffFilterRangePairArrayToDict([rangeFilterPair]),
      });
      filterRequest = rangeToggleRequestFactory.create({
        name: rangeFilter.name,
        value: {
          min: rangeFilterPair.min.value,
          max: rangeFilterPair.max.value,
        },
      });

      result = daffIsRangeToggleRequestAppliedToFilter(filterRequest, rangeFilter);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });
});
