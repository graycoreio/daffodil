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
import { DaffCategoryFilterNotFound } from '../../errors/request-not-found.error';
import { daffRemoveRequestFromFilters } from './remove-request-from-filters';

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;
  let colorFilter: DaffCategoryEqualFilter;
  let filters: Dict<DaffCategoryEqualFilter>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterRequestEqualFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
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
    filters = {
      color: colorFilter,
    };
  });

  it('should remove filters in a filter request', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
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

    expect(daffRemoveRequestFromFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the filter name does not exist', () => {
    const request: DaffCategoryFilterEqualRequest = categoryFilterRequestEqualFactory.create({
      name: 'size',
      value: ['medium'],
    });

    expect(() => {
      daffRemoveRequestFromFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterNotFound);
  });
});
