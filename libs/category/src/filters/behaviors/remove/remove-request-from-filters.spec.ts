import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequestReplacement,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterNotFound,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffRemoveRequestFromFilters } from './remove-request-from-filters';

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterRequestEqualFactory: DaffCategoryFilterRequestEqualFactory;
  let colorFilter: DaffCategoryFilterEqual;
  let filters: Dict<DaffCategoryFilterEqual>;

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
    const request: DaffCategoryFilterEqualRequestReplacement = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: Dict<DaffCategoryFilterReplacement> = {
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
    const request: DaffCategoryFilterEqualRequestReplacement = categoryFilterRequestEqualFactory.create({
      name: 'size',
      value: ['medium'],
    });

    expect(() => {
      daffRemoveRequestFromFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterNotFound);
  });

  it('should be idempotent over filters', () => {
    const request: DaffCategoryFilterEqualRequestReplacement = categoryFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect((idempotentArg?: Dict<DaffCategoryFilterReplacement>) => (daffRemoveRequestFromFilters(request, idempotentArg || filters))).toBeIdempotent();
  });
});
