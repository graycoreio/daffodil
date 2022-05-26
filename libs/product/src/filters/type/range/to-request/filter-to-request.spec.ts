import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterType,
  daffProductFilterRangePairArrayToDict,
  DaffProductFilterRangePair,
  DaffProductFilterRangeRequestBase,
} from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffProductFilterRangeToRequest } from './filter-to-request';

describe('@daffodil/product | filters | range | daffProductFilterRangeToRequest', () => {
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffProductFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create({
      applied: true,
    });
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffProductFilterRangePairArrayToDict([rangeFilterPair]),
    });
  });

  describe('when the filter has an applied option', () => {
    let result: DaffProductFilterRangeRequestBase<number>;

    beforeEach(() => {
      result = daffProductFilterRangeToRequest(
        appliedRangeFilter,
      );
    });

    it('should set the request type to range', () => {
      expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
    });

    it('should build the request from that applied option', () => {
      expect(result.name).toEqual(appliedRangeFilter.name);
      expect(result.value.min).toEqual(rangeFilterPair.min.value);
      expect(result.value.max).toEqual(rangeFilterPair.max.value);
    });
  });
});
