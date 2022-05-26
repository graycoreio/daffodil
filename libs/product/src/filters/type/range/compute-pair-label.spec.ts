import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangePair,
  DaffProductFromToFilterSeparator,
} from '@daffodil/product';
import { DaffProductFilterRangeNumericPairFactory } from '@daffodil/product/testing';

import { daffProductComputeFilterRangePairLabel } from './compute-pair-label';

describe('@daffodil/product | filters | range | daffProductComputeFilterRangePairLabel', () => {
  let rangeFilterPairFactory: DaffProductFilterRangeNumericPairFactory;

  let rangeFilterPair: DaffProductFilterRangePair<number>;

  beforeEach(() => {
    rangeFilterPairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create({
      applied: true,
    });
  });

  it('should return a label from the pair\'s min, followed by the separator, followed by the max', () => {
    const result = daffProductComputeFilterRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);

    expect(result).toEqual(`${rangeFilterPair.min.value}${DaffProductFromToFilterSeparator}${rangeFilterPair.max.value}`);
  });
});
