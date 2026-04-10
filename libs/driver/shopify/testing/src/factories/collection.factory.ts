import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  ShopifyCategory,
  ShopifyImageNode,
  ShopifyProductNode,
  shopifyHandleTransformer,
  shopifyIdTransformer,
  shopifyImageTransformer,
} from '@daffodil/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';
import { ShopifyProductNodeFactory } from './product-node.factory';

class MockShopifyCategory implements ShopifyCategory {
  title = faker.commerce.department();
  handle = shopifyHandleTransformer(faker.commerce.department());
  id = shopifyIdTransformer(`${faker.number.int({ min: 100000000000 })}`, 'Collection');
  description = faker.commerce.productDescription();
  descriptionHtml = faker.commerce.productDescription();
  onlineStoreUrl = faker.internet.domainName();
  image = <any>shopifyImageTransformer(this.shopifyImageNodeFactory.create(), 'CollectionImage');
  products = {
    edges: [],
    nodes: this.shopifyProductNodeFactory.createMany(1),
    filters: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
  metafield = null;
  metafields = [];
  seo = {};
  trackingParameters = null;
  updatedAt = faker.date.past();

  constructor(
    protected shopifyProductNodeFactory: IDaffModelFactory<ShopifyProductNode>,
    protected shopifyImageNodeFactory: IDaffModelFactory<ShopifyImageNode>,
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
