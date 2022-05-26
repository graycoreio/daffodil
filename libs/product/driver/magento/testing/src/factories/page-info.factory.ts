import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductPageInfo } from '@daffodil/product/driver/magento';

class MockMagentoProductPageInfo implements MagentoProductPageInfo {
  current_page =  1;
  page_size = faker.datatype.number(100);
  total_pages = faker.datatype.number(100);
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductPageInfoFactory extends DaffModelFactory<MagentoProductPageInfo> {
  constructor(){
    super(MockMagentoProductPageInfo);
  }
}
