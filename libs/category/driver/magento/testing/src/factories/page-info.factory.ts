import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  MagentoCategory,
  MagentoPageInfo,
} from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoPageInfo implements MagentoPageInfo {
  current_page =  1;
  page_size = faker.random.number(100);
  total_pages = faker.random.number(100);
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoPageInfoFactory extends DaffModelFactory<MagentoPageInfo> {
  constructor(){
    super(MockMagentoPageInfo);
  }
}
