import { TestBed } from '@angular/core/testing';

import { Dict } from '@daffodil/core';
import { DaffProductFilter } from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffClearFilters } from './clear-filters';

describe('@daffodil/product | filters | behaviors | clear | daffClearFilters', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
  });

  it('should clear all filters provided', () => {
    const colorFilter = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'blue',
        }),
      },
    });
    const priceFilter = productFilterRangeNumericFactory.create({
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
    const filters: Dict<DaffProductFilter> = {
      color: colorFilter,
      price: priceFilter,
    };
    const expected: Dict<DaffProductFilter> = {
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
    const colorFilter = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'blue',
        }),
      },
    });
    const priceFilter = productFilterRangeNumericFactory.create({
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

    const filters: Dict<DaffProductFilter> = {
      color: colorFilter,
      price: priceFilter,
    };

    expect((idempotentArg?: Dict<DaffProductFilter>) => (daffClearFilters(idempotentArg || filters))).toBeIdempotent();
  });
});
