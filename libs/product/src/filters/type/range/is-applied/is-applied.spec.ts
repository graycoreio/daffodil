import { TestBed } from '@angular/core/testing';

import { daffProductFilterRangePairArrayToDict } from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffIsFilterRangeApplied } from './is-applied';

describe('@daffodil/product | filters | range | daffIsFilterRangeApplied', () => {
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
  });

  it('should return true for an applied range filter', () => {
    const options = daffProductFilterRangePairArrayToDict([rangePairFactory.create()]);
    const appliedRangeFilter = rangeFilterFactory.create({
      options,
    });

    expect(daffIsFilterRangeApplied(appliedRangeFilter)).toBeTrue();
  });

  it('should return false for an unapplied range filter', () => {
    const unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });

    expect(daffIsFilterRangeApplied(unappliedRangeFilter)).toBeFalse();
  });
});
