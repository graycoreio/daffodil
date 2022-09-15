import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangePair,
  DaffFilterFromToFilterSeparator,
} from '@daffodil/core';
import { DaffFilterRangeNumericPairFactory } from '@daffodil/core/testing';

import { daffFilterComputeRangePairLabel } from './compute-pair-label';

describe('@daffodil/core | filters | range | daffFilterComputeRangePairLabel', () => {
  let rangeFilterPairFactory: DaffFilterRangeNumericPairFactory;

  let rangeFilterPair: DaffFilterRangePair<number>;

  beforeEach(() => {
    rangeFilterPairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create({
      applied: true,
    });
  });

  it('should return a label from the pair\'s min, followed by the separator, followed by the max', () => {
    const result = daffFilterComputeRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);

    expect(result).toEqual(`${rangeFilterPair.min.value}${DaffFilterFromToFilterSeparator}${rangeFilterPair.max.value}`);
  });
});
