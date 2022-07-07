import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryPageMetadata implements DaffCategoryPageMetadata {
  id = faker.datatype.uuid();
  count = faker.datatype.number({ min: 1, max: 3 });
  ids = [faker.datatype.number({ min: 1, max: 100 }).toString()];

  sortOptions = {
    default: 'position',
    options: [
      {
        label: 'Position',
        value: 'position',
      },
      {
        label: 'Name',
        value: 'name',
      },
      {
        label: 'Price',
        value: 'price',
      },
  	],
  };
  appliedSortOption = 'position';
  appliedSortDirection = null;

  currentPage = 1;
  totalPages = faker.datatype.number({ min: 1, max: 4 });
  pageSize = 20;

  filters = {};
}

/**
 * A factory for creating {@link DaffCategoryPageMetadata}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryPageMetadataFactory extends DaffModelFactory<DaffCategoryPageMetadata>{
  constructor(){
    super(MockCategoryPageMetadata);
  }
}
