import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterOption,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterRangePairArrayToDict,
  DaffProductFilterRangePair,
} from '@daffodil/product';
import {
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterEqualFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffProductFindAppliedFilterOptions } from './find-applied-options';

describe('@daffodil/product | daffProductFindAppliedFilterOptions', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalFilterOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffProductFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffProductFilterRangeNumeric;
  let unappliedRangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;
  let appliedEqualFilter: DaffProductFilterEqual;
  let appliedEqualFilterOption0: DaffProductFilterEqualOption;
  let appliedEqualFilterOption1: DaffProductFilterEqualOption;
  let unappliedEqualFilter: DaffProductFilterEqual;
  let unappliedEqualFilterOption: DaffProductFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffProductFilterRangePairArrayToDict([
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
      options: daffProductFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([unappliedEqualFilterOption]),
    });
  });

  describe('finding applied range option', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffProductFilterOption[];

      beforeEach(() => {
        result = daffProductFindAppliedFilterOptions(appliedRangeFilter);
      });

      it('should return an array containing the applied option', () => {
        expect(result).toContain(rangeFilterPair);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffProductFilterOption[];

      beforeEach(() => {
        result = daffProductFindAppliedFilterOptions(unappliedRangeFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });

  describe('finding applied equal options', () => {
    describe('when the filter has applied options', () => {
      let result: DaffProductFilterOption[];

      beforeEach(() => {
        result = daffProductFindAppliedFilterOptions(appliedEqualFilter);
      });

      it('should return an array containing the applied options', () => {
        expect(result).toContain(appliedEqualFilterOption0);
        expect(result).toContain(appliedEqualFilterOption1);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffProductFilterOption[];

      beforeEach(() => {
        result = daffProductFindAppliedFilterOptions(unappliedEqualFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });
});
