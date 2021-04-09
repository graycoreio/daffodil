import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeNumericToggleRequest,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRangeNumericPairFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
  DaffCategoryFilterToggleRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffIsRequestedFilterOptionApplied } from './is-requested-option-applied';


describe('@daffodil/category | filters | daffIsRequestedFilterOptionApplied', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;
  let equalToggleRequestFactory: DaffCategoryFilterToggleRequestEqualFactory;
  let rangeToggleRequestFactory: DaffCategoryFilterToggleRequestRangeNumericFactory;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
    equalToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
    rangeToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestRangeNumericFactory);
  });

  describe('for equal filters', () => {
    let equalFilter: DaffCategoryFilterEqual;
    let equalFilterOption: DaffCategoryFilterEqualOption;
    let filterRequest: DaffCategoryFilterEqualToggleRequest;

    describe('when the requested filter option does not exist', () => {
      beforeEach(() => {
        equalFilter = equalFilterFactory.create({
          options: {},
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
        });

        result = daffIsRequestedFilterOptionApplied(filterRequest, equalFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is not applied', () => {
      beforeEach(() => {
        equalFilterOption = equalOptionFactory.create({ applied: false });
        equalFilter = equalFilterFactory.create({
          options: daffCategoryFilterEqualOptionArrayToDict([equalFilterOption]),
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
          value: equalFilterOption.value,
        });

        result = daffIsRequestedFilterOptionApplied(filterRequest, equalFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is applied', () => {
      beforeEach(() => {
        equalFilterOption = equalOptionFactory.create({ applied: true });
        equalFilter = equalFilterFactory.create({
          options: daffCategoryFilterEqualOptionArrayToDict([equalFilterOption]),
        });
        filterRequest = equalToggleRequestFactory.create({
          name: equalFilter.name,
          value: equalFilterOption.value,
        });

        result = daffIsRequestedFilterOptionApplied(filterRequest, equalFilter);
      });

      it('should return true', () => {
        expect(result).toBeTrue();
      });
    });
  });

  describe('for range filters', () => {
    let rangeFilter: DaffCategoryFilterRangeNumeric;
    let rangeFilterPair: DaffCategoryFilterRangePair<number>;
    let filterRequest: DaffCategoryFilterRangeNumericToggleRequest;

    describe('when the requested filter option does not exist', () => {
      beforeEach(() => {
        rangeFilter = rangeFilterFactory.create({
          options: {},
        });
        filterRequest = rangeToggleRequestFactory.create({
          name: rangeFilter.name,
        });

        result = daffIsRequestedFilterOptionApplied(filterRequest, rangeFilter);
      });

      it('should return false', () => {
        expect(result).toBeFalse();
      });
    });

    describe('when the requested filter option is applied', () => {
      beforeEach(() => {
        rangeFilterPair = rangePairFactory.create({ applied: true });
        rangeFilter = rangeFilterFactory.create({
          options: daffCategoryFilterRangePairArrayToDict([rangeFilterPair]),
        });
        filterRequest = rangeToggleRequestFactory.create({
          name: rangeFilter.name,
          value: {
            min: rangeFilterPair.min.value,
            max: rangeFilterPair.max.value,
          },
        });

        result = daffIsRequestedFilterOptionApplied(filterRequest, rangeFilter);
      });

      it('should return true', () => {
        expect(result).toBeTrue();
      });
    });
  });
});
