import { TestBed } from '@angular/core/testing';

import {
  daffCategoryFilterRangePairArrayToDict,
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeNumericToggleRequest,
} from '@daffodil/category';
import {
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
  DaffCategoryFilterToggleRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffIsRequestedFilterRangeOptionApplied } from './is-requested-option-applied';


describe('@daffodil/category | filters | range | daffIsRequestedFilterRangeOptionApplied', () => {
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;
  let rangeToggleRequestFactory: DaffCategoryFilterToggleRequestRangeNumericFactory;

  let rangeFilter: DaffCategoryFilterRangeNumeric;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;
  let filterRequest: DaffCategoryFilterRangeNumericToggleRequest;

  let result: boolean;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestRangeNumericFactory);
  });

  describe('when the requested filter option does not exist', () => {
    beforeEach(() => {
      rangeFilter = rangeFilterFactory.create({
        options: {},
      });
      filterRequest = rangeToggleRequestFactory.create({
        name: rangeFilter.name,
      });

      result = daffIsRequestedFilterRangeOptionApplied(filterRequest, rangeFilter);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the requested filter option is applied', () => {
    beforeEach(() => {
      rangeFilterPair = rangePairFactory.create({ applied: true });
      rangeFilter = rangeFilterFactory.create({
        options: daffCategoryFilterRangePairArrayToDict([rangeFilterPair]),
      });
      filterRequest = rangeToggleRequestFactory.create({
        name: rangeFilter.name,
        value: {
          min: rangeFilterPair.min.value,
          max: rangeFilterPair.max.value,
        },
      });

      result = daffIsRequestedFilterRangeOptionApplied(filterRequest, rangeFilter);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });
});
