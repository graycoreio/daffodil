import { TestBed } from '@angular/core/testing';


import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
  DaffFilterNotFound,
  DaffFilters,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffApplyRequestsToFilters } from './apply-requests-to-filters';

describe('@daffodil/core | filters | behaviors | apply | daffApplyRequestsToFilters', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;
  let colorFilter: DaffFilterEqual;
  let sizeFilter: DaffFilterEqual;
  let filters: Record<DaffFilterEqual['name'], DaffFilterEqual>;
  let colorRequest: DaffFilterEqualRequest;
  let sizeRequest: DaffFilterEqualRequest;

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
    sizeFilter = filterEqualFactory.create({
      name: 'size',
      options: {
        small: filterEqualOptionFactory.create({
          applied: false,
          value: 'small',
        }),
        medium: filterEqualOptionFactory.create({
          applied: false,
          value: 'medium',
        }),
      },
    });
    filters	= {
      color: colorFilter,
      size: sizeFilter,
    };
    colorRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    sizeRequest = filterRequestEqualFactory.create({
      name: 'size',
      value: ['small'],
    });
  });

  it('should not apply any filters if there are no filter requests', () => {
    const requests: DaffFilterEqualRequest[] = [];

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffFilterEqualRequest[] = [
      filterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffApplyRequestsToFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });

  it('should apply a filter if there is a request that matches', () => {
    const requests: DaffFilterEqualRequest[] = [ colorRequest ];
    const expected: DaffFilters = {
      ...filters,
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

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });

  it('should apply multiple filters if there are multiple requests that match', () => {
    const requests: DaffFilterEqualRequest[] = [
      colorRequest,
      sizeRequest,
    ];
    const expected: DaffFilters = {
      ...filters,
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
      size: {
        ...sizeFilter,
        options: {
          ...sizeFilter.options,
          small: {
            ...sizeFilter.options['small'],
            applied: true,
          },
        },
      },
    };

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });

  it('should be idempotent over filters', () => {
    const requests: DaffFilterEqualRequest[] = [
      colorRequest,
      sizeRequest,
    ];

    expect((idempotentArg?: Record<DaffFilterEqual['name'], DaffFilterEqual>) => (daffApplyRequestsToFilters(requests, idempotentArg || filters))).toBeIdempotent();
  });
});
