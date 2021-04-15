import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterEqual,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';

import { daffApplyFilterEqual } from './apply';

describe('@daffodil/category | filters | type | equal | behaviors | apply', () => {

  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
		 categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
  });

  let filter: DaffCategoryFilterEqual;

  beforeEach(() => {
    filter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
        },
        blue: {
          applied: false,
          value: 'blue',
        },
      },
    });
  });

  it('should not apply any option that does not equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    const expected: DaffCategoryFilterEqual = {
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
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    const expected: DaffCategoryFilterEqual = {
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
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should be idempotent over filter', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red', 'blue'],
    });

    expect((idempotentArg?: DaffCategoryFilterEqual) => (daffApplyFilterEqual(request, idempotentArg || filter))).toBeIdempotent();
  });
});
