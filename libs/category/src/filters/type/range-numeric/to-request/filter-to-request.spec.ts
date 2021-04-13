import { TestBed } from '@angular/core/testing';
import { DaffCategoryFilterRangePair } from 'libs/category/src/models/public_api';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  daffCategoryFilterRangePairArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';

import { daffCategoryFilterRangeNumericToRequest } from './filter-to-request';

describe('@daffodil/category | filters | range numeric | daffCategoryFilterRangeNumericToRequest', () => {
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create({
      applied: true,
    });
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([rangeFilterPair]),
    });
  });

  describe('when the filter has an applied option', () => {
    let result: DaffCategoryFilterRangeRequest;

    beforeEach(() => {
      result = daffCategoryFilterRangeNumericToRequest(
        appliedRangeFilter,
        [rangeFilterPair],
      );
    });

    it('should set the request type to range', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
    });

    it('should build the request from that applied option', () => {
      expect(result.name).toEqual(appliedRangeFilter.name);
      expect(result.value.min).toEqual(rangeFilterPair.min.value);
      expect(result.value.max).toEqual(rangeFilterPair.max.value);
    });
  });
});
