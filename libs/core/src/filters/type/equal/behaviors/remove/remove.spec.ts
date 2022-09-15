import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffRemoveFilterEqual } from './remove';

describe('@daffodil/core | filters | type | equal | behaviors | remove', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;
  let filter: DaffFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);

    filter = filterEqualFactory.create({
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
  });

  it('should unapply an option that equals the request value', () => {
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
          applied: false,
        },
      },
    };

    expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change the filter if the request value is not on the filter', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should unapply multiple options if they equal the request values', () => {
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
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    expect((idempotentArg?: DaffFilterEqual) => (daffRemoveFilterEqual(request, idempotentArg || filter))).toBeIdempotent();
  });
});
