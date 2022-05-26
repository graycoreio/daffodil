import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffRemoveFilterEqual } from './remove';

describe('@daffodil/product | filters | type | equal | behaviors | remove', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;
  let filter: DaffProductFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);

    filter = productFilterEqualFactory.create({
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
  });

  it('should unapply an option that equals the request value', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffProductFilterEqual = {
      ...filter,
      options: {
        ...filter.options,
        red: {
          ...filter.options['red'],
          applied: false,
        },
      },
    };

    expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change the filter if the request value is not on the filter', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should unapply multiple options if they equal the request values', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
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

    expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change options of the filter that are already unapplied', () => {
    filter.options['red'].applied = false;
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    expect((idempotentArg?: DaffProductFilterEqual) => (daffRemoveFilterEqual(request, idempotentArg || filter))).toBeIdempotent();
  });
});
