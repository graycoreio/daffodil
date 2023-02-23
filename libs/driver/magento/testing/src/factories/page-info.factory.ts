import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

class MockMagentoSearchResultPageInfo implements MagentoSearchResultPageInfo {
  current_page =  1;
  page_size = faker.datatype.number(100);
  total_pages = faker.datatype.number(100);
}

@Injectable({
  providedIn: 'root',
})
export class MagentoSearchResultPageInfoFactory extends DaffModelFactory<MagentoSearchResultPageInfo> {
  constructor(){
    super(MockMagentoSearchResultPageInfo);
  }
}
