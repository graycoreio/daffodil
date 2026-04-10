import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  ShopifyProductNode,
  shopifyHandleTransformer,
  shopifyIdTransformer,
  shopifyImageTransformer,
} from '@daffodil/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';
import { ShopifyProductVariantsPriceRangeFactory } from './product-variants-price-range.factory';

class MockShopifyProductNode implements ShopifyProductNode {
  availableForSale = faker.datatype.boolean();
  collections = null;
  compareAtPriceRange = this.shopifyProductVariantsPriceRangeFactory.create();
  createdAt = faker.date.past();
  description = faker.commerce.productDescription();
  descriptionHtml = faker.commerce.productDescription();
  handle = shopifyHandleTransformer(faker.commerce.productName());
  id = shopifyIdTransformer(`${faker.number.int({ min: 100000000000 })}`, 'Product');
  images = {
    edges: [],
    nodes: this.shopifyImageNodeFactory.createMany().map(node => (<any>shopifyImageTransformer(node, 'ProductImage'))),
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
  isGiftCard = faker.datatype.boolean();
  media = null;
  metafields = [];
  onlineStoreUrl = faker.internet.domainName();
  options = [];
  priceRange = this.shopifyProductVariantsPriceRangeFactory.create();
  productType = faker.commerce.productMaterial();
  publishedAt = faker.date.past();
  requiresSellingPlan = faker.datatype.boolean();
  sellingPlanGroups = null;
  seo = {};
  tags = [];
  title = faker.commerce.productName();
  updatedAt = faker.date.past();
  variants = null;
  adjacentVariants = null;
  vendor = faker.company.name();

  constructor(
    protected shopifyProductVariantsPriceRangeFactory: IDaffModelFactory<ShopifyProductPriceRange>,
    protected shopifyImageNodeFactory: IDaffModelFactory<ShopifyImageNode>,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductNodeFactory extends DaffModelFactory<ShopifyProductNode, typeof MockShopifyProductNode> {
  constructor(
    shopifyProductVariantsPriceRangeFactory: ShopifyProductVariantsPriceRangeFactory,
    shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ) {
    super(MockShopifyProductNode, shopifyProductVariantsPriceRangeFactory, shopifyImageNodeFactory);
  }
}
