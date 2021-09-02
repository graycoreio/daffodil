import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilterType,
  DaffCategoryFilter,
  DaffCategoryFilterNotFound,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';

import { daffToggleRequestOnFilters } from './toggle-request-on-filters';

describe('@daffodil/category | filters | behaviors | toggle | daffApplyRequestToFilters', () => {

  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let categoryFilterToggleRequestEqualFactory: DaffCategoryFilterToggleRequestEqualFactory;
  let colorFilter: DaffCategoryFilterEqual;
  let filters: Dict<DaffCategoryFilterEqual>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    categoryFilterToggleRequestEqualFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);

    colorFilter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
    filters = {
      color: colorFilter,
    };
  });

  it('should apply a toggle request', () => {
    const request: DaffCategoryFilterEqualToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: 'red',
    });
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

    expect(daffToggleRequestOnFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the request does not match a known filter name', () => {
    const request: DaffCategoryFilterEqualToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      name: 'size',
    });

    expect(() => {
      daffToggleRequestOnFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterNotFound);
  });
});
