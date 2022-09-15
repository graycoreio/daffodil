import { TestBed } from '@angular/core/testing';


import {
  DaffFilter,
  DaffFilterRangeNumeric,
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterRangeNumericRequest,
  DaffFilterEqualRequest,
  daffFilterArrayToDict,
  DaffFilterType,
  DaffFilterRequest,
  DaffFilterRangePair,
  DaffFilters,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
  DaffFilterFactory,
} from '@daffodil/core/testing';

import { daffFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffFilterRangePairArrayToDict } from '../type/range/public_api';
import { daffFiltersToRequests } from './filters-to-requests';

describe('@daffodil/core | filters | daffFiltersToRequests', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalFilterOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffFilterRangeNumericPairFactory;
  let filterFactory: DaffFilterFactory;

  let filters: DaffFilter[];
  let filterDict: DaffFilters;
  let appliedRangeFilter: DaffFilterRangeNumeric;
  let unappliedRangeFilter: DaffFilterRangeNumeric;
  let rangeFilterPair: DaffFilterRangePair<number>;
  let appliedEqualFilter: DaffFilterEqual;
  let appliedEqualFilterOption0: DaffFilterEqualOption;
  let appliedEqualFilterOption1: DaffFilterEqualOption;
  let unappliedEqualFilter: DaffFilterEqual;
  let unappliedEqualFilterOption: DaffFilterEqualOption;

  let appliedRangeFilterRequest: DaffFilterRangeNumericRequest;
  let unappliedRangeFilterRequest: DaffFilterRangeNumericRequest;
  let appliedEqualFilterRequest: DaffFilterEqualRequest;
  let unappliedEqualFilterRequest: DaffFilterEqualRequest;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);

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

    filters = [
      appliedRangeFilter,
      unappliedRangeFilter,
      appliedEqualFilter,
      unappliedEqualFilter,
    ];

    filterDict = daffFilterArrayToDict(filters);

    appliedRangeFilterRequest = {
      type: DaffFilterType.RangeNumeric,
      name: appliedRangeFilter.name,
      value: {
        min: rangeFilterPair.min.value,
        max: rangeFilterPair.max.value,
      },
    };
    unappliedRangeFilterRequest = {
      type: DaffFilterType.RangeNumeric,
      name: unappliedRangeFilter.name,
      value: null,
    };
    appliedEqualFilterRequest = {
      type: DaffFilterType.Equal,
      name: appliedEqualFilter.name,
      value: [
        appliedEqualFilterOption0.value,
        appliedEqualFilterOption1.value,
      ],
    };
    unappliedEqualFilterRequest = {
      type: DaffFilterType.Equal,
      name: unappliedEqualFilter.name,
      value: [
        unappliedEqualFilterOption.value,
      ],
    };
  });

  describe('building filter requests', () => {
    let result: DaffFilterRequest[];

    beforeEach(() => {
      result = daffFiltersToRequests(filterDict);
    });

    it('should return no requests if there are no applied options on the filters', () => {
      result = daffFiltersToRequests(daffFilterArrayToDict(filterFactory.createMany(3)));
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
