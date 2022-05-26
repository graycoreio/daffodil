import { TestBed } from '@angular/core/testing';

import {
  daffProductFilterRangePairArrayToDict,
  DaffProductFilterRangePair,
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangeNumericToggleRequest,
} from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
  DaffProductFilterToggleRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffIsRangeToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/product | filters | range | daffIsRequestedFilterRangeOptionApplied', () => {
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;
  let rangeToggleRequestFactory: DaffProductFilterToggleRequestRangeNumericFactory;

  let rangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;
  let filterRequest: DaffProductFilterRangeNumericToggleRequest;

  let result: boolean;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
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
        options: daffProductFilterRangePairArrayToDict([rangeFilterPair]),
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
