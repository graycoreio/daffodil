import { TestBed } from '@angular/core/testing';

import { daffCategoryFilterRangePairArrayToDict } from '@daffodil/category';
import {
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';

import { daffIsFilterRangeApplied } from './is-applied';

describe('@daffodil/category | filters | range | daffIsFilterRangeApplied', () => {
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;

  beforeEach(() => {
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
  });

  it('should return true for an applied range filter', () => {
    const options = daffCategoryFilterRangePairArrayToDict([rangePairFactory.create()]);
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
