import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilter,
} from '@daffodil/category';
import {
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffRemoveFilterRange } from './remove';

describe('@daffodil/category | filters | type | range | behaviors | remove', () => {

  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;
  let categoryFilterRequestRangeNumericFactory: DaffCategoryFilterRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
		 categoryFilterRequestRangeNumericFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
  });

  it('should remove the filter, when the filter option is the same as the request value', () => {
    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
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
      options: {},
    };

    expect(daffRemoveFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is not applied', () => {
    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
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

    expect(daffRemoveFilterRange(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffCategoryFilterRangeNumericRequest = categoryFilterRequestRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffCategoryFilterRangeNumeric) => (daffRemoveFilterRange(request, idempotentArg || filter))).toBeIdempotent();
  });
});
