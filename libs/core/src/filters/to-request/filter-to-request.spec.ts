import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumeric,
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterRangeNumericRequest,
  DaffFilterType,
  DaffFilterEqualRequest,
  DaffFilterUnknownType,
  daffFilterEqualOptionArrayToDict,
  daffFilterRangePairArrayToDict,
  DaffFilterRangePair,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
} from '@daffodil/core/testing';

import { daffFilterToRequest } from './filter-to-request';

describe('@daffodil/core | filters | daffFilterToRequest', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalFilterOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangeFilterPairFactory: DaffFilterRangeNumericPairFactory;

  let appliedRangeFilter: DaffFilterRangeNumeric;
  let unappliedRangeFilter: DaffFilterRangeNumeric;
  let rangeFilterPair: DaffFilterRangePair<number>;
  let appliedEqualFilter: DaffFilterEqual;
  let appliedEqualFilterOption0: DaffFilterEqualOption;
  let appliedEqualFilterOption1: DaffFilterEqualOption;
  let unappliedEqualFilter: DaffFilterEqual;
  let unappliedEqualFilterOption: DaffFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangeFilterPairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);

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
  });

  describe('building a range filter request', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffFilterRangeNumericRequest>daffFilterToRequest(appliedRangeFilter);
      });

      it('should set the request type to range', () => {
        expect(result.type).toEqual(DaffFilterType.RangeNumeric);
      });

      it('should build the request from that applied option', () => {
        expect(result.name).toEqual(appliedRangeFilter.name);
        expect(result.value.min).toEqual(rangeFilterPair.min.value);
        expect(result.value.max).toEqual(rangeFilterPair.max.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffFilterRangeNumericRequest;

      beforeEach(() => {
        result = <DaffFilterRangeNumericRequest>daffFilterToRequest(unappliedRangeFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('building a equal filter request', () => {
    describe('when the filter has applied options', () => {
      let result: DaffFilterEqualRequest;

      beforeEach(() => {
        result = <DaffFilterEqualRequest>daffFilterToRequest(appliedEqualFilter);
      });

      it('should set the request type to equal', () => {
        expect(result.type).toEqual(DaffFilterType.Equal);
      });

      it('should build the request from the applied options', () => {
        expect(result.name).toEqual(appliedEqualFilter.name);
        expect(result.value).toContain(appliedEqualFilterOption0.value);
        expect(result.value).toContain(appliedEqualFilterOption1.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffFilterEqualRequest;

      beforeEach(() => {
        result = <DaffFilterEqualRequest>daffFilterToRequest(unappliedEqualFilter);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('for an unknown filter type', () => {
    it('should throw a DaffFilterUnknownType error', () => {
      expect(() => daffFilterToRequest(<any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffFilterUnknownType));
    });
  });
});
