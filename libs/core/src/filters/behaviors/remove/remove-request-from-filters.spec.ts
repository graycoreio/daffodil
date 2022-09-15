import { TestBed } from '@angular/core/testing';


import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
  DaffFilters,
  DaffFilterNotFound,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffRemoveRequestFromFilters } from './remove-request-from-filters';

describe('@daffodil/core | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;
  let colorFilter: DaffFilterEqual;
  let filters: Record<DaffFilterEqual['name'], DaffFilterEqual>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);

    colorFilter = filterEqualFactory.create({
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
    filters = {
      color: colorFilter,
    };
  });

  it('should remove filters in a filter request', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffFilters = {
      ...filters,
      color: {
        ...colorFilter,
        options: {
          ...colorFilter.options,
          red: {
            ...colorFilter.options['red'],
            applied: false,
          },
        },
      },
    };

    expect(daffRemoveRequestFromFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the filter name does not exist', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'size',
      value: ['medium'],
    });

    expect(() => {
      daffRemoveRequestFromFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });

  it('should be idempotent over filters', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect((idempotentArg?: DaffFilters) => (daffRemoveRequestFromFilters(request, idempotentArg || filters))).toBeIdempotent();
  });
});
