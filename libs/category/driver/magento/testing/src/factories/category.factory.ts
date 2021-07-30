import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoCategory implements MagentoCategory {
  uid = faker.random.alphaNumeric(10);
  url_path = faker.internet.url();
  url_suffix = '.html';
  canonical_url = faker.internet.url();
  name? = faker.random.word();
  description? = faker.random.words(40);
  breadcrumbs? =  [];
  level? =  faker.datatype.number(15);
  children_count? = faker.datatype.number(15);
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
