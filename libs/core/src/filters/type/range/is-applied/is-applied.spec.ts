import { TestBed } from '@angular/core/testing';

import { daffFilterRangePairArrayToDict } from '@daffodil/core';
import {
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
} from '@daffodil/core/testing';

import { daffIsFilterRangeApplied } from './is-applied';

describe('@daffodil/core | filters | range | daffIsFilterRangeApplied', () => {
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
  });

  it('should return true for an applied range filter', () => {
    const options = daffFilterRangePairArrayToDict([rangePairFactory.create()]);
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
