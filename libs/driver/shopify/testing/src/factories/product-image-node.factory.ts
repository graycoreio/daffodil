import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';


import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyImageNode,
  shopifyIdTransformer,
} from '@daffodil/driver/shopify';

class MockShopifyProductImageNode implements ShopifyImageNode {
  id = shopifyIdTransformer(`${faker.number.int({ min: 10000000000 })}`, 'ProductImage');
  url = faker.image.url();
  altText = faker.lorem.words(5);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductImageNodeFactory extends DaffModelFactory<ShopifyImageNode, typeof MockShopifyProductImageNode> {
  constructor(){
    super(MockShopifyProductImageNode);
  }
}
