import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumericRequest,
  DaffFilter,
  DaffFilterRangeNumeric,
} from '@daffodil/core';
import {
  DaffFilterRangeNumericFactory,
  DaffFilterRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffApplyFilterRange } from './apply';

describe('@daffodil/core | filters | type | range | behaviors | apply', () => {

  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterRequestRangeNumericFactory: DaffFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterRequestRangeNumericFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
  });

  it('should apply the filter, when the currently applied filters are empty', () => {
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffFilterRangeNumeric = filterRangeNumericFactory.create({
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
    });

    const expected: DaffFilterRangeNumeric = {
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
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffFilter = filterRangeNumericFactory.create({
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

    const expected: DaffFilter = {
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
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffFilter = filterRangeNumericFactory.create({
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

    const expected: DaffFilter = {
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
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffFilterRangeNumeric = filterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffFilterRangeNumeric) => (daffApplyFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
