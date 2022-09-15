import { TestBed } from '@angular/core/testing';

import {
  DaffFilter,
  DaffFilterEqual,
  DaffFilterUnknownType,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffClearFilter } from './clear-filter';

describe('@daffodil/core | filters | behaviors | clear | daffClearFilter', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
  });

  it('should clear a given range filter', () => {
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

    expect(daffClearFilter(filter)).toEqual(expected);
  });

  it('should clear a given equal filter', () => {
    const filter: DaffFilterEqual = filterEqualFactory.create({
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
    const expected: DaffFilterEqual = {
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
    }).toThrowMatching((e) => e instanceof DaffFilterUnknownType);
  });

  it('should be idempotent over filter', () => {
    const filter: DaffFilterEqual = filterEqualFactory.create({
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

    expect((idempotentArg?: DaffFilter) => (daffClearFilter(idempotentArg || filter))).toBeIdempotent();
  });
});
