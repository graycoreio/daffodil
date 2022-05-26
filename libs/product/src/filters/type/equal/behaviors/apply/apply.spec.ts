import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqualRequest,
  DaffProductFilterEqual,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffApplyFilterEqual } from './apply';

describe('@daffodil/product | filters | type | equal | behaviors | apply', () => {

  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
  });

  let filter: DaffProductFilterEqual;

  beforeEach(() => {
    filter = productFilterEqualFactory.create({
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
  });

  it('should not apply any option that does not equal the request value', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should apply an option that does equal the request value', () => {
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
          applied: true,
        },
      },
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

  it('should apply multiple options if they equal the request values', () => {
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
          applied: true,
        },
        blue: {
          ...filter.options['blue'],
          applied: true,
        },
      },
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change existing applied options of the filter', () => {
    filter.options['red'].applied = true;
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    expect((idempotentArg?: DaffProductFilterEqual) => (daffApplyFilterEqual(request, idempotentArg || filter))).toBeIdempotent();
  });
});
