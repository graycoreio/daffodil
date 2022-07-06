import { TestBed } from '@angular/core/testing';


import { DaffProductFilter } from '@daffodil/product';
import { DaffProductFilterFactory } from '@daffodil/product/testing';

import { daffProductFilterArrayToDict } from './array-to-dict';

describe('@daffodil/product | filters | daffProductFilterArrayToDict', () => {
  let filterFactory: DaffProductFilterFactory;
  let filters: DaffProductFilter[];

  let result: Record<DaffProductFilter['name'], DaffProductFilter>;

  beforeEach(() => {
    filterFactory = TestBed.inject(DaffProductFilterFactory);

    filters = filterFactory.createMany(3);

    result = daffProductFilterArrayToDict(filters);
  });

  it('should return a dict of the filters keyed by filter name', () => {
    filters.forEach(filter => {
      expect(result[filter.name]).toEqual(filter);
    });
  });
});
