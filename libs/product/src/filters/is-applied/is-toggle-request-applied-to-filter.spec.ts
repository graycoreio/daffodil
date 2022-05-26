import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterRangePairArrayToDict,
  DaffProductFilterRangePair,
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangeNumericToggleRequest,
  DaffProductUnknownFilterType,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
  DaffProductFilterToggleRequestEqualFactory,
  DaffProductFilterToggleRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffIsToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/product | filters | daffIsToggleRequestAppliedToFilter', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;
  let equalToggleRequestFactory: DaffProductFilterToggleRequestEqualFactory;
  let rangeToggleRequestFactory: DaffProductFilterToggleRequestRangeNumericFactory;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    equalToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
  });

  describe('for equal filters', () => {
    let equalFilter: DaffProductFilterEqual;
    let equalFilterOption: DaffProductFilterEqualOption;
    let filterRequest: DaffProductFilterEqualToggleRequest;

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
          options: daffProductFilterEqualOptionArrayToDict([equalFilterOption]),
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
          options: daffProductFilterEqualOptionArrayToDict([equalFilterOption]),
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
    let rangeFilter: DaffProductFilterRangeNumeric;
    let rangeFilterPair: DaffProductFilterRangePair<number>;
    let filterRequest: DaffProductFilterRangeNumericToggleRequest;

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
          options: daffProductFilterRangePairArrayToDict([rangeFilterPair]),
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
    it('should throw a DaffProductUnknownFilterType error', () => {
      expect(() => daffIsToggleRequestAppliedToFilter(<any>{
        name: 'name',
        type: null,
        value: '',
      }, <any>{
        name: 'name',
        type: null,
        options: {},
      })).toThrow(jasmine.any(DaffProductUnknownFilterType));
    });
  });
});
