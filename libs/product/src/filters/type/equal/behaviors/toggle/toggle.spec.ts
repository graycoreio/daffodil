import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterEqualToggleRequest,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterToggleRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffToggleFilterEqual } from './toggle';

describe('@daffodil/product | filters | type | equal | behaviors | toggle', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterToggleRequestEqualFactory: DaffProductFilterToggleRequestEqualFactory;
  let filter: DaffProductFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterToggleRequestEqualFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);

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

  it('should not toggle an option that does not equal the request value', () => {
    const request: DaffProductFilterEqualToggleRequest = productFilterToggleRequestEqualFactory.create({
      name: 'not color',
      value: 'clear',
    });

    expect(daffToggleFilterEqual(request, filter)).toEqual(filter);
  });

  it('should toggle an option that does equal the request value', () => {
    const request: DaffProductFilterEqualToggleRequest = productFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
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

    expect(daffToggleFilterEqual(request, filter)).toEqual(expected);
  });
});
