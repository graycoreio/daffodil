import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyCategory,
  shopifyHandleTransformer,
  shopifyIdTransformer,
  shopifyImageTransformer,
} from '@daffodil/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';
import { ShopifyProductNodeFactory } from './product-node.factory';

class MockShopifyCategory implements ShopifyCategory {
  title = faker.commerce.department();
  handle = shopifyHandleTransformer(faker.commerce.department());
  id = shopifyIdTransformer(`${faker.datatype.number({ min: 100000000000 })}`, 'Collection');
  description = faker.commerce.productDescription();
  onlineStoreUrl = faker.internet.domainName();
  image = shopifyImageTransformer(this.shopifyImageNodeFactory.create(), 'CollectionImage');
  products = {
    nodes: this.shopifyProductNodeFactory.createMany(),
    filters: [],
  };

  constructor(
    protected shopifyProductNodeFactory: ShopifyProductNodeFactory,
    protected shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverShopifyCategoryFactory extends DaffModelFactory<ShopifyCategory, typeof MockShopifyCategory> {
  constructor(
    shopifyProductNodeFactory: ShopifyProductNodeFactory,
    shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ){
    super(MockShopifyCategory, shopifyProductNodeFactory, shopifyImageNodeFactory);
  }
}
