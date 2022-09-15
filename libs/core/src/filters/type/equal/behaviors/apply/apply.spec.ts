import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqualRequest,
  DaffFilterEqual,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffApplyFilterEqual } from './apply';

describe('@daffodil/core | filters | type | equal | behaviors | apply', () => {

  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);
  });

  let filter: DaffFilterEqual;

  beforeEach(() => {
    filter = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
  });

  it('should not apply any option that does not equal the request value', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    const expected: DaffFilterEqual = {
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
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    const expected: DaffFilterEqual = {
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
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    expect((idempotentArg?: DaffFilterEqual) => (daffApplyFilterEqual(request, idempotentArg || filter))).toBeIdempotent();
  });
});
