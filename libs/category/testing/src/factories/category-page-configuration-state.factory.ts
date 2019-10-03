import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategoryPageConfigurationState } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryPageConfigurationState implements DaffCategoryPageConfigurationState {
  applied_filters = null;
  applied_sort_option = null;
  applied_sort_direction = null;
  current_page = faker.random.number(10);
  page_size = faker.random.number(10, 20);
  filters = null;
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
  total_pages = faker.random.number(4);
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryPageConfigurationStateFactory extends DaffModelFactory<DaffCategoryPageConfigurationState>{
  constructor(){
    super(MockCategoryPageConfigurationState);
  }
}
