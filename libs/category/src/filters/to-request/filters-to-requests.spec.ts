import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilter,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterEqualRequest,
  daffCategoryFilterArrayToDict,
  DaffCategoryFilterType,
  DaffCategoryFilterRequest,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
  DaffCategoryFilterFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffCategoryFiltersToRequests } from './filters-to-requests';

describe('@daffodil/category | filters | daffCategoryFiltersToRequests', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;
  let categoryFilterFactory: DaffCategoryFilterFactory;

  let filters: DaffCategoryFilter[];
  let filterDict: Dict<DaffCategoryFilter>;
  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let unappliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let appliedEqualFilter: DaffCategoryFilterEqual;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;
  let unappliedEqualFilter: DaffCategoryFilterEqual;
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
    categoryFilterFactory = TestBed.inject(DaffCategoryFilterFactory);

    appliedRangeFilter = rangeFilterFactory.create({
      options: [
        rangeFilterPairFactory.create(),
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
        min: appliedRangeFilter.options[0].min.value,
        max: appliedRangeFilter.options[0].max.value,
      },
    };
    unappliedRangeFilterRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: unappliedRangeFilter.name,
      value: null,
    };
    appliedEqualFilterRequest = {
      type: DaffCategoryFilterType.Equal,
      name: appliedEqualFilter.name,
      value: [
        appliedEqualFilterOption0.value,
        appliedEqualFilterOption1.value,
      ],
    };
    unappliedEqualFilterRequest = {
      type: DaffCategoryFilterType.Equal,
      name: unappliedEqualFilter.name,
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

    it('should return no requests if there are no applied options on the filters', () => {
      result = daffCategoryFiltersToRequests(daffCategoryFilterArrayToDict(categoryFilterFactory.createMany(3)));
      expect(result.length).toEqual(0);
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
