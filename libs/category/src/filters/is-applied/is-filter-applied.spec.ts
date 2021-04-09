import { TestBed } from '@angular/core/testing';

import {
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';

import { daffIsFilterApplied } from './is-filter-applied';

describe('@daffodil/category | filters | daffIsFilterApplied', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
  });

  it('should return false for an unapplied equal filter', () => {
    const unappliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: false })]),
    });

    expect(daffIsFilterApplied(unappliedEqualFilter)).toBeFalse();
  });

  it('should return true for an applied equal filter', () => {
    const appliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: true })]),
    });

    expect(daffIsFilterApplied(appliedEqualFilter)).toBeTrue();
  });

  it('should return true for an applied range filter', () => {
    const appliedRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([rangePairFactory.create({ applied: true })]),
    });

    expect(daffIsFilterApplied(appliedRangeFilter)).toBeTrue();
  });

  it('should return false for an unapplied range filter', () => {
    const unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });

    expect(daffIsFilterApplied(unappliedRangeFilter)).toBeFalse();
  });
});
