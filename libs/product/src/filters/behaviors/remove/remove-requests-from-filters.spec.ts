import { TestBed } from '@angular/core/testing';


import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
  DaffProductFilterNotFound,
  DaffProductFilter,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffRemoveRequestsFromFilters } from './remove-requests-from-filters';

describe('@daffodil/product | filters | behaviors | remove | daffRemoveRequestsFromFilters', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
  });

  let colorFilter: DaffProductFilterEqual;
  let sizeFilter: DaffProductFilterEqual;
  let filters: Record<DaffProductFilterEqual['name'], DaffProductFilterEqual>;

  beforeEach(() => {
    colorFilter = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'blue',
        }),
      },
    });
    sizeFilter = productFilterEqualFactory.create({
      name: 'size',
      options: {
        small: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'small',
        }),
        medium: productFilterEqualOptionFactory.create({
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
    const requests: DaffProductFilterEqualRequest[] = [];

    expect(daffRemoveRequestsFromFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffProductFilterEqualRequest[] = [
      productFilterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffRemoveRequestsFromFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffProductFilterNotFound);
  });

  it('should remove a filter if there are requests that match', () => {
    const requests: DaffProductFilterEqualRequest[] = [
      productFilterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
    ];
    const expected: Record<DaffProductFilter['name'], DaffProductFilter> = {
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
    const requests: DaffProductFilterEqualRequest[] = [
      productFilterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
      productFilterRequestEqualFactory.create({
        name: 'size',
        value: ['small'],
      }),
    ];
    const expected: Record<DaffProductFilter['name'], DaffProductFilter> = {
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
    const requests: DaffProductFilterEqualRequest[] = [
      productFilterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
    ];

    expect((idempotentArg?: Record<DaffProductFilter['name'], DaffProductFilter>) => (daffRemoveRequestsFromFilters(requests, idempotentArg || filters))).toBeIdempotent();
  });
});
