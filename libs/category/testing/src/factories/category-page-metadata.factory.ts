import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryPageMetadata implements DaffCategoryPageMetadata {
  id = faker.datatype.uuid();
  total_products = faker.datatype.number({ min: 1, max: 3 });
  product_ids = [faker.datatype.number({ min: 1, max: 100 }).toString()];

  sort_options = {
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
  applied_sort_option = 'position';
	applied_sort_direction = null;

  current_page = 1;
  total_pages = faker.datatype.number({ min: 1, max: 4 });
  page_size = 20;

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
