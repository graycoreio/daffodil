import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterEqualToggleRequest,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterToggleRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffToggleFilterEqual } from './toggle';

describe('@daffodil/core | filters | type | equal | behaviors | toggle', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterToggleRequestEqualFactory: DaffFilterToggleRequestEqualFactory;
  let filter: DaffFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterToggleRequestEqualFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);

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

  it('should not toggle an option that does not equal the request value', () => {
    const request: DaffFilterEqualToggleRequest = filterToggleRequestEqualFactory.create({
      name: 'not color',
      value: 'clear',
    });

    expect(daffToggleFilterEqual(request, filter)).toEqual(filter);
  });

  it('should toggle an option that does equal the request value', () => {
    const request: DaffFilterEqualToggleRequest = filterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
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

    expect(daffToggleFilterEqual(request, filter)).toEqual(expected);
  });
});
