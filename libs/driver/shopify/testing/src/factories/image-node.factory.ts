import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyImageNode } from '@daffodil/driver/shopify';

class MockShopifyImageNode implements ShopifyImageNode {
  id = '';
  url = faker.image.url();
  altText = faker.lorem.words(5);
  originalSrc = faker.image.url();
  src = faker.image.url();
  transformedSrc = faker.image.url();
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyImageNodeFactory extends DaffModelFactory<ShopifyImageNode> {
  constructor(){
    super(MockShopifyImageNode);
  }
}
