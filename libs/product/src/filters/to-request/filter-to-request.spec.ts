import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterType,
  DaffProductFilterEqualRequest,
  DaffProductUnknownFilterType,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterRangePairArrayToDict,
  DaffProductFilterRangePair,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
} from '@daffodil/product/testing';

import { daffProductFilterToRequest } from './filter-to-request';

describe('@daffodil/product | filters | daffProductFilterToRequest', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalFilterOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffProductFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffProductFilterRangeNumeric;
  let unappliedRangeFilter: DaffProductFilterRangeNumeric;
  let rangeFilterPair: DaffProductFilterRangePair<number>;
  let appliedEqualFilter: DaffProductFilterEqual;
  let appliedEqualFilterOption0: DaffProductFilterEqualOption;
  let appliedEqualFilterOption1: DaffProductFilterEqualOption;
  let unappliedEqualFilter: DaffProductFilterEqual;
  let unappliedEqualFilterOption: DaffProductFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);

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
  });

  describe('building a range filter request', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffProductFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffProductFilterRangeNumericRequest>daffProductFilterToRequest(appliedRangeFilter);
      });

      it('should set the request type to range', () => {
        expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
      });

      it('should build the request from that applied option', () => {
        expect(result.name).toEqual(appliedRangeFilter.name);
        expect(result.value.min).toEqual(rangeFilterPair.min.value);
        expect(result.value.max).toEqual(rangeFilterPair.max.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffProductFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffProductFilterRangeNumericRequest>daffProductFilterToRequest(unappliedRangeFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('building a equal filter request', () => {
    describe('when the filter has applied options', () => {
      let result: DaffProductFilterEqualRequest;

      beforeEach(() => {
        result = <DaffProductFilterEqualRequest>daffProductFilterToRequest(appliedEqualFilter);
      });

      it('should set the request type to equal', () => {
        expect(result.type).toEqual(DaffProductFilterType.Equal);
      });

      it('should build the request from the applied options', () => {
        expect(result.name).toEqual(appliedEqualFilter.name);
        expect(result.value).toContain(appliedEqualFilterOption0.value);
        expect(result.value).toContain(appliedEqualFilterOption1.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffProductFilterEqualRequest;

      beforeEach(() => {
        result = <DaffProductFilterEqualRequest>daffProductFilterToRequest(unappliedEqualFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('for an unknown filter type', () => {
    it('should throw a DaffProductUnknownFilterType error', () => {
      expect(() => daffProductFilterToRequest(<any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffProductUnknownFilterType));
    });
  });
});
