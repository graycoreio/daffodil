import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilter,
  DaffCategoryFilterRangeNumeric,
} from '@daffodil/category';
import { DaffCategoryFilterRangeNumericFactory } from '@daffodil/category/testing';

import { daffClearFilterRange } from './clear';

describe('@daffodil/category | filters | type | range | behaviors | clear', () => {

  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
  });

  it('should remove any currently applied filter options.', () => {
    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
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
    const expected: DaffCategoryFilter = {
      ...filter,
      options: {},
    };

    expect(daffClearFilterRange(filter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 20,
      options: {},
    });

    expect(daffClearFilterRange(filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffCategoryFilterRangeNumeric) => (daffClearFilterRange(idempotentArg || filter))).toBeIdempotent();
  });
});
