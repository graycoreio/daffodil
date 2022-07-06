import { TestBed } from '@angular/core/testing';


import {
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangePair,
  daffProductFilterEqualOptionArrayToDict,
  DaffProductFilter,
  daffProductFilterRangePairArrayToDict,
  daffProductComputeFilterRangePairLabel,
  daffProductFilterArrayToDict,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffProductComputeAppliedFilters } from './compute-applied-filters';

describe('@daffodil/product/state | daffProductComputeAppliedFilters', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;

  let appliedEqualFilter: DaffProductFilterEqual;
  let unappliedEqualFilter: DaffProductFilterEqual;
  let appliedEqualFilterOption: DaffProductFilterEqualOption;
  let unappliedEqualFilterOption: DaffProductFilterEqualOption;
  let appliedRangeFilter: DaffProductFilterRangeNumeric;
  let unappliedRangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;
  let rangeFilterPairLabel: string;

  let result: Record<DaffProductFilter['name'], DaffProductFilter>;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);

    appliedEqualFilterOption = equalOptionFactory.create({
      applied: true,
    });
    unappliedEqualFilterOption = equalOptionFactory.create({
      applied: false,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([
        appliedEqualFilterOption,
        unappliedEqualFilterOption,
      ]),
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: {},
    });

    rangeFilterPair = rangePairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffProductFilterRangePairArrayToDict([rangeFilterPair]),
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });
    rangeFilterPairLabel = daffProductComputeFilterRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);
  });

  describe('when there are applied filters', () => {
    beforeEach(() => {
      result = daffProductComputeAppliedFilters(daffProductFilterArrayToDict([
        appliedRangeFilter,
        unappliedRangeFilter,
        appliedEqualFilter,
        unappliedEqualFilter,
      ]));
    });

    it('will not return filters that have no applied options', () => {
      expect(result[unappliedEqualFilter.name]).toBeUndefined();
      expect(result[unappliedRangeFilter.name]).toBeUndefined();
    });

    it('will return applied filters and their applied options', () => {
      expect(result[appliedEqualFilter.name]).toBeDefined();
      expect(result[appliedRangeFilter.name]).toBeDefined();
      expect(result[appliedEqualFilter.name].options[appliedEqualFilterOption.value]).toBeDefined();
      expect(result[appliedRangeFilter.name].options[rangeFilterPairLabel]).toBeDefined();
    });

    it('will not return unapplied options with applied filters', () => {
      expect(result[appliedEqualFilter.name].options[unappliedEqualFilterOption.value]).toBeUndefined();
    });
  });

  describe('when there are no applied filters', () => {
    beforeEach(() => {
      result = daffProductComputeAppliedFilters(daffProductFilterArrayToDict([
        unappliedRangeFilter,
        unappliedEqualFilter,
      ]));
    });

    it('will return an empty dict', () => {
      expect(result).toEqual({});
    });
  });
});
