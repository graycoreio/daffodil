import { TestBed } from '@angular/core/testing';

import { Dict } from '@daffodil/core';
import {
  DaffProductFilterEqual,
  DaffProductFilter,
  DaffProductFilterToggleRequest,
  DaffProductFilterNotFound,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterToggleRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffToggleRequestsOnFilters } from './toggle-requests-on-filters';

describe('@daffodil/product | filters | behaviors | toggle | daffToggleRequestsOnFilters', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterToggleRequestEqualFactory: DaffProductFilterToggleRequestEqualFactory;
  let colorFilter: DaffProductFilterEqual;
  let sizeFilter: DaffProductFilterEqual;
  let filters: Dict<DaffProductFilter>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterToggleRequestEqualFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);

    colorFilter = productFilterEqualFactory.create({
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
    sizeFilter = productFilterEqualFactory.create({
      name: 'size',
      options: {
        small: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'small',
        }),
        medium: productFilterEqualOptionFactory.create({
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
    const requests: DaffProductFilterToggleRequest[] = [];

    expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffProductFilterToggleRequest[] = [
      productFilterToggleRequestEqualFactory.create({
        name: 'someFilter',
        value: 'someFilter value',
      }),
    ];

    expect(() => {
      daffToggleRequestsOnFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffProductFilterNotFound);
  });

  it('should toggle a filter if there is a request that matches', () => {
    const requests: DaffProductFilterToggleRequest[] = [
      productFilterToggleRequestEqualFactory.create({
        name: 'color',
        value: 'red',
      }),
    ];
    const expected: Dict<DaffProductFilter> = {
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
    const requests: DaffProductFilterToggleRequest[] = [
      productFilterToggleRequestEqualFactory.create({
        name: 'color',
        value: 'red',
      }),
      productFilterToggleRequestEqualFactory.create({
        name: 'size',
        value: 'small',
      }),
    ];
    const expected: Dict<DaffProductFilter> = {
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
