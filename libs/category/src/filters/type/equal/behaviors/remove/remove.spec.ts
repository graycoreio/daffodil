import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequest,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';

import { daffRemoveFilterEqual } from './remove';

describe('@daffodil/category | filters | type | equal | behaviors | remove', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;
  let filter: DaffCategoryFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
    filter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: true,
          value: 'red',
        },
        blue: {
          applied: true,
          value: 'blue',
        },
      },
    });
  });

  it('should unapply an option that equals the request value', () => {
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
          applied: false,
        },
      },
    };

    expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change the filter if the request value is not on the filter', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should unapply multiple options if they equal the request values', () => {
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
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });
});
