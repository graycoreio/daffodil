import { TestBed } from '@angular/core/testing';


import {
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterRangeNumeric,
  DaffFilterRangePair,
  daffFilterEqualOptionArrayToDict,
  DaffFilters,
  daffFilterRangePairArrayToDict,
  daffFilterComputeRangePairLabel,
  daffFilterArrayToDict,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
} from '@daffodil/core/testing';

import { daffComputeAppliedFilters } from './compute-applied-filters';

describe('@daffodil/core/state | daffComputeAppliedFilters', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;

  let appliedEqualFilter: DaffFilterEqual;
  let unappliedEqualFilter: DaffFilterEqual;
  let appliedEqualFilterOption: DaffFilterEqualOption;
  let unappliedEqualFilterOption: DaffFilterEqualOption;
  let appliedRangeFilter: DaffFilterRangeNumeric;
  let unappliedRangeFilter: DaffFilterRangeNumeric;
  let rangeFilterPair: DaffFilterRangePair<number>;
  let rangeFilterPairLabel: string;

  let result: DaffFilters;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);

    appliedEqualFilterOption = equalOptionFactory.create({
      applied: true,
    });
    unappliedEqualFilterOption = equalOptionFactory.create({
      applied: false,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([
        appliedEqualFilterOption,
        unappliedEqualFilterOption,
      ]),
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: {},
    });

    rangeFilterPair = rangePairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffFilterRangePairArrayToDict([rangeFilterPair]),
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });
    rangeFilterPairLabel = daffFilterComputeRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);
  });

  describe('when there are applied filters', () => {
    beforeEach(() => {
      result = daffComputeAppliedFilters(daffFilterArrayToDict([
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
      result = daffComputeAppliedFilters(daffFilterArrayToDict([
        unappliedRangeFilter,
        unappliedEqualFilter,
      ]));
    });

    it('will return an empty dict', () => {
      expect(result).toEqual({});
    });
  });
});
