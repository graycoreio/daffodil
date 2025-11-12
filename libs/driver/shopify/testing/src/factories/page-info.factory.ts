import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyPageInfo } from '@daffodil/driver/shopify';

class MockShopifyPageInfo implements ShopifyPageInfo {
  endCursor = faker.lorem.word();
  hasNextPage = faker.datatype.boolean();
  hasPreviousPage = faker.datatype.boolean();
  startCursor = faker.lorem.word();
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyPageInfoFactory extends DaffModelFactory<ShopifyPageInfo, typeof MockShopifyPageInfo> {
  constructor(){
    super(MockShopifyPageInfo);
  }
}
