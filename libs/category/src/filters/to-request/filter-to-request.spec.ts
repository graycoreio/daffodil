import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
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

    appliedRangeFilter = rangeFilterFactory.create({
      options: [
        rangeFilterPairFactory.create({
          applied: true,
        }),
      ],
    });
    unappliedRangeFilter = rangeFilterFactory.create({
      options: [],
    });

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: [appliedEqualFilterOption0, appliedEqualFilterOption1],
    });
    unappliedEqualFilterOption = equalFilterOptionFactory.create({
      applied: false,
    });
    unappliedEqualFilter = equalFilterFactory.create({
      options: [unappliedEqualFilterOption],
    });
  });

  describe('building a range filter request', () => {
    describe('when the filter has an applied option', () => {
      let result: DaffCategoryFilterRangeRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeRequest>daffCategoryFilterToRequest(appliedRangeFilter);
      });

      it('should set the request type to range', () => {
        expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
      });

      it('should build the request from that applied option', () => {
        expect(result.name).toEqual(appliedRangeFilter.name);
        expect(result.value.min).toEqual(appliedRangeFilter.options[0].min.value);
        expect(result.value.max).toEqual(appliedRangeFilter.options[0].max.value);
      });
    });

    describe('when the filter has no applied options', () => {
      let result: DaffCategoryFilterRangeRequest;

      beforeEach(() => {
        result = <DaffCategoryFilterRangeRequest>daffCategoryFilterToRequest(unappliedRangeFilter);
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
});
