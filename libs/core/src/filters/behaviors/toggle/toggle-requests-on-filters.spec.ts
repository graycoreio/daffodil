import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilters,
  DaffFilterToggleRequest,
  DaffFilterNotFound,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterToggleRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffToggleRequestsOnFilters } from './toggle-requests-on-filters';

describe('@daffodil/core | filters | behaviors | toggle | daffToggleRequestsOnFilters', () => {
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterToggleRequestEqualFactory: DaffFilterToggleRequestEqualFactory;
  let colorFilter: DaffFilterEqual;
  let sizeFilter: DaffFilterEqual;
  let filters: DaffFilters;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterToggleRequestEqualFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);

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
  });

  it('should not toggle any filters if there are no filter requests', () => {
    const requests: DaffFilterToggleRequest[] = [];

    expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffFilterToggleRequest[] = [
      filterToggleRequestEqualFactory.create({
        name: 'someFilter',
        value: 'someFilter value',
      }),
    ];

    expect(() => {
      daffToggleRequestsOnFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });

  it('should toggle a filter if there is a request that matches', () => {
    const requests: DaffFilterToggleRequest[] = [
      filterToggleRequestEqualFactory.create({
        name: 'color',
        value: 'red',
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
            applied: true,
          },
        },
      },
    };

    expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(expected);
  });

  it('should toggle multiple filters if there are multiple requests that match', () => {
    const requests: DaffFilterToggleRequest[] = [
      filterToggleRequestEqualFactory.create({
        name: 'color',
        value: 'red',
      }),
      filterToggleRequestEqualFactory.create({
        name: 'size',
        value: 'small',
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

    expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(expected);
  });
});
