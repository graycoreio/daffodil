import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangePair,
  daffCategoryFilterEqualOptionArrayToDict,
  DaffCategoryFilterReplacement,
  daffCategoryFilterRangePairArrayToDict,
  daffCategoryComputeFilterRangePairLabel,
  daffCategoryFilterArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffCategoryComputeAppliedFilters } from './compute-applied-filters';

describe('@daffodil/category/state | daffCategoryComputeAppliedFilters', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let appliedEqualFilter: DaffCategoryFilterEqual;
  let unappliedEqualFilter: DaffCategoryFilterEqual;
  let appliedEqualFilterOption: DaffCategoryFilterEqualOption;
  let unappliedEqualFilterOption: DaffCategoryFilterEqualOption;
  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let unappliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;
  let rangeFilterPairLabel: string;

  let result: Dict<DaffCategoryFilterReplacement>;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

    appliedEqualFilterOption = equalOptionFactory.create({
      applied: true,
    });
    unappliedEqualFilterOption = equalOptionFactory.create({
      applied: false,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([
        appliedEqualFilterOption,
        unappliedEqualFilterOption,
      ]),
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: {},
    });

    rangeFilterPair = rangePairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([rangeFilterPair]),
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: {},
    });
    rangeFilterPairLabel = daffCategoryComputeFilterRangePairLabel(rangeFilterPair.min.value, rangeFilterPair.max.value);
  });

  describe('when there are applied filters', () => {
    beforeEach(() => {
      result = daffCategoryComputeAppliedFilters(daffCategoryFilterArrayToDict([
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
      result = daffCategoryComputeAppliedFilters(daffCategoryFilterArrayToDict([
        unappliedRangeFilter,
        unappliedEqualFilter,
      ]));
    });

    it('will return an empty dict', () => {
      expect(result).toEqual({});
    });
  });
});
