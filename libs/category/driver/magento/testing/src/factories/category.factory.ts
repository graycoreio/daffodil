import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoCategory implements MagentoCategory {
  id = faker.random.number();
  url_path = faker.internet.url();
  url_suffix = '.html';
  name? = faker.random.word();
  description? = faker.random.words(40);
  breadcrumbs? =  [];
  level? =  faker.random.number(15);
  children_count? = faker.random.number(15);
  products? =  { items: []};
  children?: MagentoCategory[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoCategoryFactory extends DaffModelFactory<MagentoCategory> {
  constructor(){
    super(MockMagentoCategory);
  }
}
