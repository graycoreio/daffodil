import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryPageConfigurationState, DaffCategoryFilterType, DaffCategoryRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryPageConfigurationState implements DaffCategoryPageConfigurationState<DaffCategoryRequest> {
  id = faker.random.number({min: 1, max: 100});
  page_size = 20;
  current_page = 1;
  filters = [{
    label: 'Category',
    name: 'cat',
    type: DaffCategoryFilterType.Equal,
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
  total_pages = faker.random.number({min: 1, max: 4});
  filter_requests = [];
  applied_sort_option = null;
	applied_sort_direction = null;
	total_products = faker.random.number({min: 1, max: 3});
	product_ids = [faker.random.number({min: 1, max: 100}).toString()];
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryPageConfigurationStateFactory extends DaffModelFactory<DaffCategoryPageConfigurationState<DaffCategoryRequest>>{
  constructor(){
    super(MockCategoryPageConfigurationState);
  }
}
