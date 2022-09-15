import { TestBed } from '@angular/core/testing';


import { DaffFilters } from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffClearFilters } from './clear-filters';

describe('@daffodil/core | filters | behaviors | clear | daffClearFilters', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
  });

  it('should clear all filters provided', () => {
    const colorFilter = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: true,
          value: 'blue',
        }),
      },
    });
    const priceFilter = filterRangeNumericFactory.create({
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
    const filters: DaffFilters = {
      color: colorFilter,
      price: priceFilter,
    };
    const expected: DaffFilters = {
      ...filters,
      color: {
        ...colorFilter,
        options: {
          ...colorFilter.options,
          red: {
            ...colorFilter.options['red'],
            applied: false,
          },
          blue: {
            ...colorFilter.options['blue'],
            applied: false,
          },
        },
      },
      price: {
        ...priceFilter,
        options: {},
      },
    };

    expect(daffClearFilters(filters)).toEqual(expected);
  });

  it('should be idempotent over filters', () => {
    const colorFilter = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: true,
          value: 'blue',
        }),
      },
    });
    const priceFilter = filterRangeNumericFactory.create({
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

    const filters: DaffFilters = {
      color: colorFilter,
      price: priceFilter,
    };

    expect((idempotentArg?: DaffFilters) => (daffClearFilters(idempotentArg || filters))).toBeIdempotent();
  });
});
