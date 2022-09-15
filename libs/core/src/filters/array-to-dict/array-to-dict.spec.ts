import { TestBed } from '@angular/core/testing';


import {
  DaffFilter,
  DaffFilters,
} from '@daffodil/core';
import { DaffFilterFactory } from '@daffodil/core/testing';

import { daffFilterArrayToDict } from './array-to-dict';

describe('@daffodil/core | filters | daffFilterArrayToDict', () => {
  let filterFactory: DaffFilterFactory;
  let filters: DaffFilter[];

  let result: DaffFilters;

  beforeEach(() => {
    filterFactory = TestBed.inject(DaffFilterFactory);

    filters = filterFactory.createMany(3);

    result = daffFilterArrayToDict(filters);
  });

  it('should return a dict of the filters keyed by filter name', () => {
    filters.forEach(filter => {
      expect(result[filter.name]).toEqual(filter);
    });
  });
});
