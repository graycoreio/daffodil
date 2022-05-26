import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilter,
  DaffProductFilterRangeNumeric,
} from '@daffodil/product';
import { DaffProductFilterRangeNumericFactory } from '@daffodil/product/testing';

import { daffClearFilterRange } from './clear';

describe('@daffodil/product | filters | type | range | behaviors | clear', () => {

  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
  });

  it('should remove any currently applied filter options.', () => {
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
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
    const expected: DaffProductFilter = {
      ...filter,
      options: {},
    };

    expect(daffClearFilterRange(filter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 20,
      options: {},
    });

    expect(daffClearFilterRange(filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffProductFilterRangeNumeric) => (daffClearFilterRange(idempotentArg || filter))).toBeIdempotent();
  });
});
