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

import { daffRemoveRequestsFromFilters } from './remove-requests-from-filters';

describe('@daffodil/core | filters | behaviors | remove | daffRemoveRequestsFromFilters', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);
  });

  let colorFilter: DaffFilterEqual;
  let sizeFilter: DaffFilterEqual;
  let filters: Record<DaffFilterEqual['name'], DaffFilterEqual>;

  beforeEach(() => {
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
    sizeFilter = filterEqualFactory.create({
      name: 'size',
      options: {
        small: filterEqualOptionFactory.create({
          applied: true,
          value: 'small',
        }),
        medium: filterEqualOptionFactory.create({
          applied: true,
          value: 'medium',
        }),
      },
    });
    filters	= {
      color: colorFilter,
      size: sizeFilter,
    };
  });

  it('should not remove any filters if there are no filter requests', () => {
    const requests: DaffFilterEqualRequest[] = [];

    expect(daffRemoveRequestsFromFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffFilterEqualRequest[] = [
      filterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffRemoveRequestsFromFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });

  it('should remove a filter if there are requests that match', () => {
    const requests: DaffFilterEqualRequest[] = [
      filterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
    ];
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

    expect(daffRemoveRequestsFromFilters(requests, filters)).toEqual(expected);
  });

  it('should remove multiple filters if there are multiple requests that match', () => {
    const requests: DaffFilterEqualRequest[] = [
      filterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
      filterRequestEqualFactory.create({
        name: 'size',
        value: ['small'],
      }),
    ];
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
      size: {
        ...sizeFilter,
        options: {
          ...sizeFilter.options,
          small: {
            ...sizeFilter.options['small'],
            applied: false,
          },
        },
      },
    };

    expect(daffRemoveRequestsFromFilters(requests, filters)).toEqual(expected);
  });


  it('should be idempotent over filters', () => {
    const requests: DaffFilterEqualRequest[] = [
      filterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
    ];

    expect((idempotentArg?: DaffFilters) => (daffRemoveRequestsFromFilters(requests, idempotentArg || filters))).toBeIdempotent();
  });
});
