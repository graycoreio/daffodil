import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterOption,
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
  DaffCategoryFilterRangePair,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';

import { daffCategoryFindAppliedFilterOptions } from './find-applied-options';

describe('@daffodil/category | daffCategoryFindAppliedFilterOptions', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let unappliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;
  let appliedEqualFilter: DaffCategoryFilterEqual;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;
  let unappliedEqualFilter: DaffCategoryFilterEqual;
  let unappliedEqualFilterOption: DaffCategoryFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([
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
      options: daffCategoryFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([unappliedEqualFilterOption]),
    });
  });

  describe('finding applied range option', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffCategoryFilterOption[];

      beforeEach(() => {
        result = daffCategoryFindAppliedFilterOptions(appliedRangeFilter);
      });

      it('should return an array containing the applied option', () => {
        expect(result).toContain(rangeFilterPair);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterOption[];

      beforeEach(() => {
        result = daffCategoryFindAppliedFilterOptions(unappliedRangeFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });

  describe('finding applied equal options', () => {
    describe('when the filter has applied options', () => {
      let result: DaffCategoryFilterOption[];

      beforeEach(() => {
        result = daffCategoryFindAppliedFilterOptions(appliedEqualFilter);
      });

      it('should return an array containing the applied options', () => {
        expect(result).toContain(appliedEqualFilterOption0);
        expect(result).toContain(appliedEqualFilterOption1);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterOption[];

      beforeEach(() => {
        result = daffCategoryFindAppliedFilterOptions(unappliedEqualFilter);
      });

      it('should return an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });
});
