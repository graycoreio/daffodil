import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterRangeNumeric,
  DaffProductFilter,
} from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffRemoveFilterRange } from './remove';

describe('@daffodil/product | filters | type | range | behaviors | remove', () => {

  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterRequestRangeNumericFactory: DaffProductFilterRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
		 productFilterRequestRangeNumericFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
  });

  it('should remove the filter, when the filter option is the same as the request value', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
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

    const expected: DaffProductFilter = {
      ...filter,
      options: {},
    };

    expect(daffRemoveFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is not applied', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
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
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffProductFilterRangeNumeric) => (daffRemoveFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
