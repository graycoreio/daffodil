import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualToggleRequest,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
} from '@daffodil/category/testing';

import { daffToggleFilterEqual } from './toggle';

describe('@daffodil/category | filters | type | equal | behaviors | toggle', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let categoryFilterToggleRequestEqualFactory: DaffCategoryFilterToggleRequestEqualFactory;
  let filter: DaffCategoryFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    categoryFilterToggleRequestEqualFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);

    filter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
  });

  it('should not toggle an option that does not equal the request value', () => {
    const request: DaffCategoryFilterEqualToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      name: 'not color',
      value: 'clear',
    });

    expect(daffToggleFilterEqual(request, filter)).toEqual(filter);
  });

  it('should toggle an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
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

    expect(daffToggleFilterEqual(request, filter)).toEqual(expected);
  });
});
