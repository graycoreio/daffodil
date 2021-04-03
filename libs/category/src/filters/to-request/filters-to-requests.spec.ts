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
  DaffCategoryFilter,
} from '../../models/public_api';
import { daffCategoryFiltersToRequests } from './filters-to-requests';

describe('@daffodil/category | daffCategoryFiltersToRequests', () => {
  let equalFilterFactory: DaffCategoryEqualFilterFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryRangeFilterFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangePairFactory;

  let filters: DaffCategoryFilter[];
  let appliedRangeFilter: DaffCategoryRangeFilter;
  let unappliedRangeFilter: DaffCategoryRangeFilter;
  let appliedEqualFilter: DaffCategoryEqualFilter;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;
  let unappliedEqualFilter: DaffCategoryEqualFilter;
  let unappliedEqualFilterOption: DaffCategoryFilterEqualOption;

  let appliedRangeFilterRequest: DaffCategoryFilterRangeRequest;
  let unappliedRangeFilterRequest: DaffCategoryFilterRangeRequest;
  let appliedEqualFilterRequest: DaffCategoryFilterEqualRequest;
  let unappliedEqualFilterRequest: DaffCategoryFilterEqualRequest;

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

    filters = [
      appliedRangeFilter,
      unappliedRangeFilter,
      appliedEqualFilter,
      unappliedEqualFilter,
    ];

    appliedRangeFilterRequest = {
      type: DaffCategoryFilterType.Range,
      name: appliedRangeFilter.name,
      value: {
        min: appliedRangeFilter.options[0].min,
        max: appliedRangeFilter.options[0].max,
      },
    };
    unappliedRangeFilterRequest = {
      type: DaffCategoryFilterType.Range,
      name: appliedRangeFilter.name,
      value: null,
    };
    appliedEqualFilterRequest = {
      type: DaffCategoryFilterType.Equal,
      name: appliedRangeFilter.name,
      value: [
        appliedEqualFilterOption0.value,
        appliedEqualFilterOption1.value,
      ],
    };
    unappliedEqualFilterRequest = {
      type: DaffCategoryFilterType.Equal,
      name: appliedRangeFilter.name,
      value: [
        unappliedEqualFilterOption.value,
      ],
    };
  });

  describe('building filter requests', () => {
    let result: DaffCategoryFilterRequest[];

    beforeEach(() => {
      result = daffCategoryFiltersToRequests(filters);
    });

    it('should return requests built from applied options', () => {
      expect(result).toContain(jasmine.objectContaining(appliedEqualFilterRequest));
      expect(result).toContain(jasmine.objectContaining(appliedRangeFilterRequest));
    });

    it('should not return requests with unapplied options', () => {
      expect(result).not.toContain(jasmine.objectContaining(unappliedEqualFilterRequest));
      expect(result).not.toContain(jasmine.objectContaining(unappliedRangeFilterRequest));
    });
  });
});
