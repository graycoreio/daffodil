import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoCategory implements MagentoCategory {
  __typename = 'CategoryTree';
  uid = faker.string.alphanumeric(10);
  url_path = faker.lorem.word();
  url_suffix = '.html';
  canonical_url = faker.internet.url();
  name? = faker.lorem.word();
  description? = faker.lorem.words(40);
  meta_title? = faker.lorem.words(2);
  meta_description? = faker.lorem.words(40);
  breadcrumbs? =  [];
  level? =  faker.number.int(15);
  children_count? = faker.number.int(15);
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
