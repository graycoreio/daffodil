import { TestBed } from '@angular/core/testing';


import {
  DaffFilterEqual,
  DaffFilterEqualToggleRequest,
  DaffFilterType,
  DaffFilters,
  DaffFilterNotFound,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterToggleRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffToggleRequestOnFilters } from './toggle-request-on-filters';

describe('@daffodil/core | filters | behaviors | toggle | daffApplyRequestToFilters', () => {

  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterToggleRequestEqualFactory: DaffFilterToggleRequestEqualFactory;
  let colorFilter: DaffFilterEqual;
  let filters: Record<DaffFilterEqual['name'], DaffFilterEqual>;

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
    filters = {
      color: colorFilter,
    };
  });

  it('should apply a toggle request', () => {
    const request: DaffFilterEqualToggleRequest = filterToggleRequestEqualFactory.create({
      type: DaffFilterType.Equal,
      name: 'color',
      value: 'red',
    });
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

    expect(daffToggleRequestOnFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the request does not match a known filter name', () => {
    const request: DaffFilterEqualToggleRequest = filterToggleRequestEqualFactory.create({
      name: 'size',
    });

    expect(() => {
      daffToggleRequestOnFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffFilterNotFound);
  });
});
