import { TestBed } from '@angular/core/testing';


import {
  DaffProductFilter,
  DaffProductFilterRangeNumeric,
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterEqualRequest,
  daffProductFilterArrayToDict,
  DaffProductFilterType,
  DaffProductFilterRequest,
  DaffProductFilterRangePair,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
  DaffProductFilterFactory,
} from '@daffodil/product/testing';

import { daffProductFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffProductFilterRangePairArrayToDict } from '../type/range/public_api';
import { daffProductFiltersToRequests } from './filters-to-requests';

describe('@daffodil/product | filters | daffProductFiltersToRequests', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalFilterOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffProductFilterRangeNumericPairFactory;
  let productFilterFactory: DaffProductFilterFactory;

  let filters: DaffProductFilter[];
  let filterDict: Record<DaffProductFilter['name'], DaffProductFilter>;
  let appliedRangeFilter: DaffProductFilterRangeNumeric;
  let unappliedRangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;
  let appliedEqualFilter: DaffProductFilterEqual;
  let appliedEqualFilterOption0: DaffProductFilterEqualOption;
  let appliedEqualFilterOption1: DaffProductFilterEqualOption;
  let unappliedEqualFilter: DaffProductFilterEqual;
  let unappliedEqualFilterOption: DaffProductFilterEqualOption;

  let appliedRangeFilterRequest: DaffProductFilterRangeNumericRequest;
  let unappliedRangeFilterRequest: DaffProductFilterRangeNumericRequest;
  let appliedEqualFilterRequest: DaffProductFilterEqualRequest;
  let unappliedEqualFilterRequest: DaffProductFilterEqualRequest;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    productFilterFactory = TestBed.inject(DaffProductFilterFactory);

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

    filters = [
      appliedRangeFilter,
      unappliedRangeFilter,
      appliedEqualFilter,
      unappliedEqualFilter,
    ];

    filterDict = daffProductFilterArrayToDict(filters);

    appliedRangeFilterRequest = {
      type: DaffProductFilterType.RangeNumeric,
      name: appliedRangeFilter.name,
      value: {
        min: rangeFilterPair.min.value,
        max: rangeFilterPair.max.value,
      },
    };
    unappliedRangeFilterRequest = {
      type: DaffProductFilterType.RangeNumeric,
      name: unappliedRangeFilter.name,
      value: null,
    };
    appliedEqualFilterRequest = {
      type: DaffProductFilterType.Equal,
      name: appliedEqualFilter.name,
      value: [
        appliedEqualFilterOption0.value,
        appliedEqualFilterOption1.value,
      ],
    };
    unappliedEqualFilterRequest = {
      type: DaffProductFilterType.Equal,
      name: unappliedEqualFilter.name,
      value: [
        unappliedEqualFilterOption.value,
      ],
    };
  });

  describe('building filter requests', () => {
    let result: DaffProductFilterRequest[];

    beforeEach(() => {
      result = daffProductFiltersToRequests(filterDict);
    });

    it('should return no requests if there are no applied options on the filters', () => {
      result = daffProductFiltersToRequests(daffProductFilterArrayToDict(productFilterFactory.createMany(3)));
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
