import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilter,
  DaffCategoryFilterEqualRequest,
} from '../../../models/public_api';
import { DaffCategoryFilterNotFound } from '../../errors/filter-not-found.error';
import { daffApplyRequestsToFilters } from './apply-requests-to-filters';

describe('@daffodil/category | filters | behaviors | apply | daffApplyRequestsToFilters', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;
  let colorFilter: DaffCategoryFilterEqual;
  let sizeFilter: DaffCategoryFilterEqual;
  let filters: Dict<DaffCategoryFilterEqual>;
  let colorRequest: DaffCategoryFilterEqualRequest;
  let sizeRequest: DaffCategoryFilterEqualRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
    colorFilter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
        },
        blue: {
          applied: false,
          value: 'blue',
        },
      },
    });
    sizeFilter = categoryFilterEqualFactory.create({
      name: 'size',
      options: {
        small: {
          applied: false,
          value: 'small',
        },
        medium: {
          applied: false,
          value: 'medium',
        },
      },
    });
    filters	= {
      color: colorFilter,
      size: sizeFilter,
    };
    colorRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    sizeRequest = categoryFilterRequestEqualFactory.create({
      name: 'size',
      value: ['small'],
    });
  });

  it('should not apply any filters if there are no filter requests', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [];

    expect(daffApplyRequestsToFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [
      categoryFilterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffApplyRequestsToFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterNotFound);
  });

  it('should apply a filter if there is a request that matches', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [ colorRequest ];
    const expected: Dict<DaffCategoryFilter> = {
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
    const requests: DaffCategoryFilterEqualRequest[] = [
      colorRequest,
      sizeRequest,
    ];
    const expected: Dict<DaffCategoryFilter> = {
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
});
