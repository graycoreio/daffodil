import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryPageConfigurationState, DaffCategoryFilterTypes } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryPageConfigurationState implements DaffCategoryPageConfigurationState {
  id = faker.random.number(100);
  page_size = 20;
  current_page = 1;
  filters = [{
    label: 'Category',
    count: 2,
    attribute_name: 'cat',
    type: DaffCategoryFilterTypes.Match,
    options: [
      {
        label: 'Gear',
        value: '3',
        count: 34
      },
      {
        label: 'Training',
        value: '9',
        count: 6
      }
    ]
  }];
  sort_options = [
    {
      label: 'Position',
      value: 'position'
    },
    {
        label: 'Name',
        value: 'name'
    },
    {
        label: 'Price',
        value: 'price'
    }
	];
	total_products = faker.random.number(3);
	total_pages = faker.random.number(4);
	product_ids = [faker.random.number(100).toString()];
	applied_filters = null;
	applied_sort_direction = null;
	applied_sort_option = null;
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryPageConfigurationStateFactory extends DaffModelFactory<DaffCategoryPageConfigurationState>{
  constructor(){
    super(MockCategoryPageConfigurationState);
  }
}
