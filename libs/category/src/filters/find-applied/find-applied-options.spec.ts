import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryEqualFilterFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryRangeFilterFactory,
  DaffCategoryFilterRangePairFactory,
} from '@daffodil/category/testing';

import {
  DaffCategoryRangeFilter,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterOption,
} from '../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from './find-applied-options';

describe('@daffodil/category | daffCategoryFindAppliedFilterOptions', () => {
  let equalFilterFactory: DaffCategoryEqualFilterFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryRangeFilterFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangePairFactory;

  let appliedRangeFilter: DaffCategoryRangeFilter;
  let unappliedRangeFilter: DaffCategoryRangeFilter;
  let appliedEqualFilter: DaffCategoryEqualFilter;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;
  let unappliedEqualFilter: DaffCategoryEqualFilter;
  let unappliedEqualFilterOption: DaffCategoryFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryEqualFilterFactory);
    equalFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryRangeFilterFactory);
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangePairFactory);

    appliedRangeFilter = rangeFilterFactory.create({
      options: [
        rangeFilterPairFactory.create({
          applied: true,
        }),
      ],
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: [],
    });

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: [appliedEqualFilterOption0, appliedEqualFilterOption1],
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: [unappliedEqualFilterOption],
    });
  });

  describe('finding applied range option', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffCategoryFilterOption[];

      beforeEach(() => {
        result = daffCategoryFindAppliedFilterOptions(appliedRangeFilter);
      });

      it('should return an array containing the applied option', () => {
        expect(result).toContain(appliedRangeFilter.options[0]);
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
