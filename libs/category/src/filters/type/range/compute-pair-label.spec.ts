import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangePair,
  DaffCategoryFromToFilterSeparatorReplacement,
} from '@daffodil/category';
import { DaffCategoryFilterRangeNumericPairFactory } from '@daffodil/category/testing';

import { daffCategoryComputeFilterRangePairLabel } from './compute-pair-label';

describe('@daffodil/category | filters | range | daffCategoryComputeFilterRangePairLabel', () => {
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let rangeFilterPair: DaffCategoryFilterRangePair<number>;

  beforeEach(() => {
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create({
      applied: true,
    });
  });

  it('should return a label from the pair\'s min, followed by the separator, followed by the max', () => {
    const result = daffCategoryComputeFilterRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);

    expect(result).toEqual(`${rangeFilterPair.min.value}${DaffCategoryFromToFilterSeparatorReplacement}${rangeFilterPair.max.value}`);
  });
});
