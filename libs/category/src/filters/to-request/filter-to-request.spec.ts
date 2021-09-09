import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
  DaffCategoryUnknownFilterType,
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
  DaffCategoryFilterRangePair,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
} from '@daffodil/category/testing';

import { daffCategoryFilterToRequest } from './filter-to-request';

describe('@daffodil/category | filters | daffCategoryFilterToRequest', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffCategoryFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let unappliedRangeFilter: DaffCategoryFilterRangeNumeric;
  let rangeFilterPair: DaffCategoryFilterRangePair<number>;
  let appliedEqualFilter: DaffCategoryFilterEqual;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;
  let unappliedEqualFilter: DaffCategoryFilterEqual;
  let unappliedEqualFilterOption: DaffCategoryFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);

    rangeFilterPair = rangeFilterPairFactory.create();
    appliedRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([
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
      options: daffCategoryFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([unappliedEqualFilterOption]),
    });
  });

  describe('building a range filter request', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffCategoryFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeNumericRequest>daffCategoryFilterToRequest(appliedRangeFilter);
      });

      it('should set the request type to range', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
      });

      it('should build the request from that applied option', () => {
        expect(result.name).toEqual(appliedRangeFilter.name);
        expect(result.value.min).toEqual(rangeFilterPair.min.value);
        expect(result.value.max).toEqual(rangeFilterPair.max.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeNumericRequest>daffCategoryFilterToRequest(unappliedRangeFilter);
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
        result = <DaffCategoryFilterEqualRequest>daffCategoryFilterToRequest(appliedEqualFilter);
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
        result = <DaffCategoryFilterEqualRequest>daffCategoryFilterToRequest(unappliedEqualFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('for an unknown filter type', () => {
    it('should throw a DaffCategoryUnknownFilterType error', () => {
      expect(() => daffCategoryFilterToRequest(<any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffCategoryUnknownFilterType));
    });
  });
});
