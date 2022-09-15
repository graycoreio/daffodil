import { TestBed } from '@angular/core/testing';

import {
  daffFilterEqualOptionArrayToDict,
  daffFilterRangePairArrayToDict,
  DaffFilterUnknownType,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
} from '@daffodil/core/testing';

import { daffIsFilterApplied } from './is-filter-applied';

describe('@daffodil/core | filters | daffIsFilterApplied', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
  });

  it('should return false for an unapplied equal filter', () => {
    const unappliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: false })]),
    });

    expect(daffIsFilterApplied(unappliedEqualFilter)).toBeFalse();
  });

  it('should return true for an applied equal filter', () => {
    const appliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: true })]),
    });

    expect(daffIsFilterApplied(appliedEqualFilter)).toBeTrue();
  });

  it('should return true for an applied range filter', () => {
    const appliedRangeFilter = rangeFilterFactory.create({
      options: daffFilterRangePairArrayToDict([rangePairFactory.create({ applied: true })]),
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
    it('should throw a DaffFilterUnknownType error', () => {
      expect(() => daffIsFilterApplied(<any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffFilterUnknownType));
    });
  });
});
