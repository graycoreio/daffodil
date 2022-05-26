import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilter,
  DaffProductFilterEqual,
  DaffProductUnknownFilterType,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffClearFilter } from './clear-filter';

describe('@daffodil/product | filters | behaviors | clear | daffClearFilter', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
  });

  it('should clear a given range filter', () => {
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

    expect(daffClearFilter(filter)).toEqual(expected);
  });

  it('should clear a given equal filter', () => {
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
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
    const expected: DaffProductFilterEqual = {
      ...filter,
      options: {
        ...filter.options,
        red: {
          ...filter.options['red'],
          applied: false,
        },
        blue: {
          ...filter.options['blue'],
          applied: false,
        },
      },
    };

    expect(daffClearFilter(filter)).toEqual(expected);
  });

  it('should throw an error if given filter has an unknown type', () => {
    const filter: any = {
      type: 'some filter type',
      label: 'Color',
      name: 'color',
      options: {},
    };

    expect(() => {
      daffClearFilter(filter);
    }).toThrowMatching((e) => e instanceof DaffProductUnknownFilterType);
  });

  it('should be idempotent over filter', () => {
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
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

    expect((idempotentArg?: DaffProductFilter) => (daffClearFilter(idempotentArg || filter))).toBeIdempotent();
  });
});
