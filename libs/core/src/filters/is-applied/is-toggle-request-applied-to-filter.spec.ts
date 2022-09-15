import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqualToggleRequest,
  DaffFilterEqual,
  DaffFilterEqualOption,
  daffFilterEqualOptionArrayToDict,
  daffFilterRangePairArrayToDict,
  DaffFilterRangePair,
  DaffFilterRangeNumeric,
  DaffFilterRangeNumericToggleRequest,
  DaffFilterUnknownType,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
  DaffFilterToggleRequestEqualFactory,
  DaffFilterToggleRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffIsToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/core | filters | daffIsToggleRequestAppliedToFilter', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;
  let equalToggleRequestFactory: DaffFilterToggleRequestEqualFactory;
  let rangeToggleRequestFactory: DaffFilterToggleRequestRangeNumericFactory;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
    equalToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
  });

  describe('for equal filters', () => {
    let equalFilter: DaffFilterEqual;
    let equalFilterOption: DaffFilterEqualOption;
    let filterRequest: DaffFilterEqualToggleRequest;

    describe('when the requested filter option does not exist', () => {
      beforeEach(() => {
        equalFilter = equalFilterFactory.create({
          options: {},
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
        });

        result = daffIsToggleRequestAppliedToFilter(filterRequest, equalFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is not applied', () => {
      beforeEach(() => {
        equalFilterOption = equalOptionFactory.create({ applied: false });
        equalFilter = equalFilterFactory.create({
          options: daffFilterEqualOptionArrayToDict([equalFilterOption]),
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
          value: equalFilterOption.value,
        });

        result = daffIsToggleRequestAppliedToFilter(filterRequest, equalFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is applied', () => {
      beforeEach(() => {
        equalFilterOption = equalOptionFactory.create({ applied: true });
        equalFilter = equalFilterFactory.create({
          options: daffFilterEqualOptionArrayToDict([equalFilterOption]),
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
          value: equalFilterOption.value,
        });

        result = daffIsToggleRequestAppliedToFilter(filterRequest, equalFilter);
      });

      it('should return true', () => {
        expect(result).toBeTrue();
      });
    });
  });

  describe('for range filters', () => {
    let rangeFilter: DaffFilterRangeNumeric;
    let rangeFilterPair: DaffFilterRangePair<number>;
    let filterRequest: DaffFilterRangeNumericToggleRequest;

    describe('when the requested filter option does not exist', () => {
      beforeEach(() => {
        rangeFilter = rangeFilterFactory.create({
          options: {},
        });
        filterRequest = rangeToggleRequestFactory.create({
          name: rangeFilter.name,
        });

        result = daffIsToggleRequestAppliedToFilter(filterRequest, rangeFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is applied', () => {
      beforeEach(() => {
        rangeFilterPair = rangePairFactory.create({ applied: true });
        rangeFilter = rangeFilterFactory.create({
          options: daffFilterRangePairArrayToDict([rangeFilterPair]),
        });
        filterRequest = rangeToggleRequestFactory.create({
          name: rangeFilter.name,
          value: {
            min: rangeFilterPair.min.value,
            max: rangeFilterPair.max.value,
          },
        });

        result = daffIsToggleRequestAppliedToFilter(filterRequest, rangeFilter);
      });

      it('should return true', () => {
        expect(result).toBeTrue();
      });
    });
  });

  describe('for an unknown filter type', () => {
    it('should throw a DaffFilterUnknownType error', () => {
      expect(() => daffIsToggleRequestAppliedToFilter(<any>{
        name: 'name',
        type: null,
        value: '',
      }, <any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffFilterUnknownType));
    });
  });
});
