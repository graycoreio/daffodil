import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumericRequest,
  DaffProductFilter,
  DaffProductFilterRangeNumeric,
} from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffApplyFilterRange } from './apply';

describe('@daffodil/product | filters | type | range | behaviors | apply', () => {

  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterRequestRangeNumericFactory: DaffProductFilterRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
		 productFilterRequestRangeNumericFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
  });

  it('should apply the filter, when the currently applied filters are empty', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffProductFilterRangeNumeric = productFilterRangeNumericFactory.create({
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
    });

    const expected: DaffProductFilterRangeNumeric = {
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

    const expected: DaffProductFilter = {
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
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });

    const filter: DaffProductFilterRangeNumeric = productFilterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffProductFilterRangeNumeric) => (daffApplyFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
