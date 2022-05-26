import { TestBed } from '@angular/core/testing';

import { Dict } from '@daffodil/core';
import {
  DaffProductFilterEqual,
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterType,
  DaffProductFilter,
  DaffProductFilterNotFound,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterToggleRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffToggleRequestOnFilters } from './toggle-request-on-filters';

describe('@daffodil/product | filters | behaviors | toggle | daffApplyRequestToFilters', () => {

  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterToggleRequestEqualFactory: DaffProductFilterToggleRequestEqualFactory;
  let colorFilter: DaffProductFilterEqual;
  let filters: Dict<DaffProductFilterEqual>;

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
    filters = {
      color: colorFilter,
    };
  });

  it('should apply a toggle request', () => {
    const request: DaffProductFilterEqualToggleRequest = productFilterToggleRequestEqualFactory.create({
      type: DaffProductFilterType.Equal,
      name: 'color',
      value: 'red',
    });
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

    expect(daffToggleRequestOnFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the request does not match a known filter name', () => {
    const request: DaffProductFilterEqualToggleRequest = productFilterToggleRequestEqualFactory.create({
      name: 'size',
    });

    expect(() => {
      daffToggleRequestOnFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffProductFilterNotFound);
  });
});
