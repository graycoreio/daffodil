import { TestBed } from '@angular/core/testing';

import { DaffProductFilterEqual } from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
} from '@daffodil/product/testing';

import { daffClearFilterEqual } from './clear';

describe('@daffodil/product | filters | type | equal | behaviors | clear', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
  });

  it('should remove any currently applied filter options', () => {
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

    expect(daffClearFilterEqual(filter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });

    expect(daffClearFilterEqual(filter)).toEqual(filter);
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

    expect((idempotentArg?: DaffProductFilterEqual) => (daffClearFilterEqual(idempotentArg || filter))).toBeIdempotent();
  });
});
