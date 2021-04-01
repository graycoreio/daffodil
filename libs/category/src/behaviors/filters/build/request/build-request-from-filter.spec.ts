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
  DaffCategoryFilterRequest,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
} from '../../../../models/public_api';
import { daffCategoryBuildRequestFromFilter } from './build-request-from-filter';

describe('@daffodil/category | daffCategoryBuildRequestFromFilter', () => {
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

  describe('building a range filter request', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffCategoryFilterRangeRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeRequest>daffCategoryBuildRequestFromFilter(appliedRangeFilter);
      });

      it('should set the request type to range', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.Range);
      });

      it('should build the request from that applied option', () => {
        expect(result.name).toEqual(appliedRangeFilter.name);
        expect(result.value.min).toEqual(appliedRangeFilter.options[0].min);
        expect(result.value.max).toEqual(appliedRangeFilter.options[0].max);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterRangeRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeRequest>daffCategoryBuildRequestFromFilter(unappliedRangeFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('building a equal filter request', () => {
    describe('when the filter has applied options', () => {
      let result: DaffCategoryFilterEqualRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterEqualRequest>daffCategoryBuildRequestFromFilter(appliedEqualFilter);
      });

      it('should set the request type to equal', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.Equal);
      });

      it('should build the request from the applied options', () => {
        expect(result.name).toEqual(appliedEqualFilter.name);
        expect(result.value).toContain(appliedEqualFilterOption0.value);
        expect(result.value).toContain(appliedEqualFilterOption1.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterEqualRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterEqualRequest>daffCategoryBuildRequestFromFilter(unappliedEqualFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });
});
