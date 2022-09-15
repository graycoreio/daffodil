import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumeric,
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterOption,
  daffFilterEqualOptionArrayToDict,
  daffFilterRangePairArrayToDict,
  DaffFilterRangePair,
} from '@daffodil/core';
import {
  DaffFilterEqualOptionFactory,
  DaffFilterEqualFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
} from '@daffodil/core/testing';

import { daffFilterFindAppliedOptions } from './find-applied-options';

describe('@daffodil/core | daffFilterFindAppliedOptions', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalFilterOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffFilterRangeNumeric;
  let unappliedRangeFilter: DaffFilterRangeNumeric;
  let rangeFilterPair: DaffFilterRangePair<number>;
  let appliedEqualFilter: DaffFilterEqual;
  let appliedEqualFilterOption0: DaffFilterEqualOption;
  let appliedEqualFilterOption1: DaffFilterEqualOption;
  let unappliedEqualFilter: DaffFilterEqual;
  let unappliedEqualFilterOption: DaffFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffFilterRangePairArrayToDict([
        rangeFilterPair,
      ]),
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([unappliedEqualFilterOption]),
    });
  });

  describe('finding applied range option', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffFilterOption[];

      beforeEach(() => {
        result = daffFilterFindAppliedOptions(appliedRangeFilter);
      });

      it('should return an array containing the applied option', () => {
        expect(result).toContain(rangeFilterPair);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffFilterOption[];

      beforeEach(() => {
        result = daffFilterFindAppliedOptions(unappliedRangeFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });

  describe('finding applied equal options', () => {
    describe('when the filter has applied options', () => {
      let result: DaffFilterOption[];

      beforeEach(() => {
        result = daffFilterFindAppliedOptions(appliedEqualFilter);
      });

      it('should return an array containing the applied options', () => {
        expect(result).toContain(appliedEqualFilterOption0);
        expect(result).toContain(appliedEqualFilterOption1);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffFilterOption[];

      beforeEach(() => {
        result = daffFilterFindAppliedOptions(unappliedEqualFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });
});
