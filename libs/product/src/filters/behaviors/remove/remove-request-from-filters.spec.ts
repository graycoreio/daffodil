import { TestBed } from '@angular/core/testing';

import { Dict } from '@daffodil/core';
import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
  DaffProductFilter,
  DaffProductFilterNotFound,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffRemoveRequestFromFilters } from './remove-request-from-filters';

describe('@daffodil/product | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;
  let colorFilter: DaffProductFilterEqual;
  let filters: Dict<DaffProductFilterEqual>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);

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
    filters = {
      color: colorFilter,
    };
  });

  it('should remove filters in a filter request', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: Dict<DaffProductFilter> = {
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
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'size',
      value: ['medium'],
    });

    expect(() => {
      daffRemoveRequestFromFilters(request, filters);
    }).toThrowMatching((e) => e instanceof DaffProductFilterNotFound);
  });

  it('should be idempotent over filters', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });

    expect((idempotentArg?: Dict<DaffProductFilter>) => (daffRemoveRequestFromFilters(request, idempotentArg || filters))).toBeIdempotent();
  });
});
