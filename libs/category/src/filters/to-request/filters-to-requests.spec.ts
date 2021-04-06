import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRequest,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilter,
} from '../../models/public_api';
import { daffCategoryFilterArrayToDict } from '../array-to-dict/array-to-dict';
import { daffCategoryFiltersToRequests } from './filters-to-requests';

describe('@daffodil/category | daffCategoryFiltersToRequests', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let filters: DaffCategoryFilter[];
  let filterDict: Dict<DaffCategoryFilter>;
  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let unappliedRangeFilter: DaffCategoryFilterRangeNumeric;
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
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

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

    filterDict = daffCategoryFilterArrayToDict(filters);

    appliedRangeFilterRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: appliedRangeFilter.name,
      value: {
        min: appliedRangeFilter.options[0].min,
        max: appliedRangeFilter.options[0].max,
      },
    };
    unappliedRangeFilterRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
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
      result = daffCategoryFiltersToRequests(filterDict);
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
