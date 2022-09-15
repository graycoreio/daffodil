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

import { daffApplyRequestToFilters } from './apply-request-to-filters';

describe('@daffodil/core | filters | behaviors | apply | daffApplyRequestToFilters', () => {

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
          applied: false,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
    filters = {
      color: colorFilter,
    };
  });

  it('should apply a filter request', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffFilters = {
      color: {
        ...colorFilter,
        options: {
          ...colorFilter.options,
          red: {
            ...colorFilter.options['red'],
            applied: true,
          },
        },
      },
    };

    expect(daffApplyRequestToFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the filter name does not exist', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'size',
      value: ['medium'],
    });

    expect(() => {
      daffApplyRequestToFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });

  it('should be idempotent over filters', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect((idempotentArg?: Record<DaffFilterEqual['name'], DaffFilterEqual>) => (daffApplyRequestToFilters(request, idempotentArg || filters))).toBeIdempotent();
  });
});
