import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import {
  DaffCategoryEqualFilter,
  DaffCategoryFilter,
  DaffCategoryFilterEqualRequest,
} from '../../../models/public_api';
import { DaffCategoryFilterNotFound } from '../../errors/filter-not-found.error';
import { daffRemoveRequestsFromFilters } from './remove-requests-from-filters';

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestsFromFilters', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
		 categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
  });

  let colorFilter: DaffCategoryEqualFilter;
  let sizeFilter: DaffCategoryEqualFilter;
  let filters: Dict<DaffCategoryEqualFilter>;

  beforeEach(() => {
    colorFilter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: {
          applied: true,
          value: 'red',
        },
        blue: {
          applied: true,
          value: 'blue',
        },
      },
    });
    sizeFilter = categoryFilterEqualFactory.create({
      name: 'size',
      options: {
        small: {
          applied: true,
          value: 'small',
        },
        medium: {
          applied: true,
          value: 'medium',
        },
      },
    });
    filters	= {
      color: colorFilter,
      size: sizeFilter,
    };
  });

  it('should not remove any filters if there are no filter requests', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [];

    expect(daffRemoveRequestsFromFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [
      categoryFilterRequestEqualFactory.create({
        name: 'someFilter',
        value: ['someFilter value'],
      }),
    ];

    expect(() => {
      daffRemoveRequestsFromFilters(requests, filters);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterNotFound);
  });

  it('should remove a filter if there are requests that match', () => {
    const requests: DaffCategoryFilterEqualRequest[] = [
      categoryFilterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
    ];
    const expected: Dict<DaffCategoryFilter> = {
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
    const requests: DaffCategoryFilterEqualRequest[] = [
      categoryFilterRequestEqualFactory.create({
        name: 'color',
        value: ['red'],
      }),
      categoryFilterRequestEqualFactory.create({
        name: 'size',
        value: ['small'],
      }),
    ];
    const expected: Dict<DaffCategoryFilter> = {
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
});
