import { TestBed } from '@angular/core/testing';

import {
  DaffFilter,
  DaffFilterRangeNumeric,
} from '@daffodil/core';
import { DaffFilterRangeNumericFactory } from '@daffodil/core/testing';

import { daffClearFilterRange } from './clear';

describe('@daffodil/core | filters | type | range | behaviors | clear', () => {

  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
  });

  it('should remove any currently applied filter options.', () => {
    const filter: DaffFilter = filterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 20,
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

    expect(daffClearFilterRange(filter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
    const filter: DaffFilter = filterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 20,
      options: {},
    });

    expect(daffClearFilterRange(filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const filter: DaffFilter = filterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 20,
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

    expect((idempotentArg?: DaffFilterRangeNumeric) => (daffClearFilterRange(idempotentArg || filter))).toBeIdempotent();
  });
});
