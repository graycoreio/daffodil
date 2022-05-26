import { TestBed } from '@angular/core/testing';

import {
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterRangePairArrayToDict,
  DaffProductUnknownFilterType,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffIsFilterApplied } from './is-filter-applied';

describe('@daffodil/product | filters | daffIsFilterApplied', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
  });

  it('should return false for an unapplied equal filter', () => {
    const unappliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: false })]),
    });

    expect(daffIsFilterApplied(unappliedEqualFilter)).toBeFalse();
  });

  it('should return true for an applied equal filter', () => {
    const appliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: true })]),
    });

    expect(daffIsFilterApplied(appliedEqualFilter)).toBeTrue();
  });

  it('should return true for an applied range filter', () => {
    const appliedRangeFilter = rangeFilterFactory.create({
      options: daffProductFilterRangePairArrayToDict([rangePairFactory.create({ applied: true })]),
    });

    expect(daffIsFilterApplied(appliedRangeFilter)).toBeTrue();
  });

  it('should return false for an unapplied range filter', () => {
    const unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });

    expect(daffIsFilterApplied(unappliedRangeFilter)).toBeFalse();
  });

  describe('for an unknown filter type', () => {
    it('should throw a DaffProductUnknownFilterType error', () => {
      expect(() => daffIsFilterApplied(<any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffProductUnknownFilterType));
    });
  });
});
