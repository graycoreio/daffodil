import { TestBed } from '@angular/core/testing';

import { Dict } from '@daffodil/core';
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

import { daffApplyRequestsToFilters } from './apply-requests-to-filters';

describe('@daffodil/product | filters | behaviors | apply | daffApplyRequestsToFilters', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;
  let colorFilter: DaffProductFilterEqual;
  let sizeFilter: DaffProductFilterEqual;
  let filters: Dict<DaffProductFilterEqual>;
  let colorRequest: DaffProductFilterEqualRequest;
  let sizeRequest: DaffProductFilterEqualRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);

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
    colorRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    sizeRequest = productFilterRequestEqualFactory.create({
      name: 'size',
      value: ['small'],
    });
  });

  it('should not apply any filters if there are no filter requests', () => {
    const requests: DaffProductFilterEqualRequest[] = [];

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffProductFilterEqualRequest[] = [
      productFilterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffApplyRequestsToFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffProductFilterNotFound);
  });

  it('should apply a filter if there is a request that matches', () => {
    const requests: DaffProductFilterEqualRequest[] = [ colorRequest ];
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

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });

  it('should apply multiple filters if there are multiple requests that match', () => {
    const requests: DaffProductFilterEqualRequest[] = [
      colorRequest,
      sizeRequest,
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

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });

  it('should be idempotent over filters', () => {
    const requests: DaffProductFilterEqualRequest[] = [
      colorRequest,
      sizeRequest,
    ];

    expect((idempotentArg?: Dict<DaffProductFilterEqual>) => (daffApplyRequestsToFilters(requests, idempotentArg || filters))).toBeIdempotent();
  });
});
