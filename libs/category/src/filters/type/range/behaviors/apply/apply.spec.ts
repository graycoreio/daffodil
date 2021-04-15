import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilter,
  DaffCategoryFilterRangeNumeric,
} from '@daffodil/category';
import {
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffApplyFilterRange } from './apply';

describe('@daffodil/category | filters | type | range | behaviors | apply', () => {

  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;
  let categoryFilterRequestRangeNumericFactory: DaffCategoryFilterRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
		 categoryFilterRequestRangeNumericFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
  });

  it('should apply the filter, when the currently applied filters are empty', () => {
    const request: DaffCategoryFilterRangeRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilterRangeNumeric = categoryFilterRangeNumericFactory.create({
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
    });

    const expected: DaffCategoryFilterRangeNumeric = {
      ...filter,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });

    const expected: DaffCategoryFilter = {
      ...filter,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should remove the old filter, and apply the new one when an existing filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });

    const expected: DaffCategoryFilter = {
      ...filter,
      options: {
        '20-40': {
          applied: true,
          min: {
            label: '20',
            value: 20,
          },
          max: {
            label: '40',
            value: 40,
          },
        },
      },
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should be idempotent over filter', () => {
    const request: DaffCategoryFilterRangeRequest = categoryFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffCategoryFilterRangeNumeric = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });

    expect((idempotentArg?: DaffCategoryFilterRangeNumeric) => (daffApplyFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
