import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumericRequest,
  DaffFilterRangeNumeric,
  DaffFilter,
} from '@daffodil/core';
import {
  DaffFilterRangeNumericFactory,
  DaffFilterRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffRemoveFilterRange } from './remove';

describe('@daffodil/core | filters | type | range | behaviors | remove', () => {

  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterRequestRangeNumericFactory: DaffFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterRequestRangeNumericFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
  });

  it('should remove the filter, when the filter option is the same as the request value', () => {
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
      options: {},
    };

    expect(daffRemoveFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is not applied', () => {
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

    expect(daffRemoveFilterRange(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
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

    expect((idempotentArg?: DaffFilterRangeNumeric) => (daffRemoveFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
