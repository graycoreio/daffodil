import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductImages } from '@daffodil/driver/shopify';

import { ShopifyPageInfoFactory } from './page-info.factory';
import { ShopifyProductImageNodeFactory } from './product-image-node.factory';

class MockShopifyProductImages implements ShopifyProductImages {
  nodes = this.shopifyProductImageNodeFactory.createMany();
  edges = [];
  pageInfo = this.shopifyPageInfoFactory.create();

  constructor(
    protected shopifyProductImageNodeFactory: ShopifyProductImageNodeFactory,
    protected shopifyPageInfoFactory: ShopifyPageInfoFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductImagesFactory extends DaffModelFactory<ShopifyProductImages, typeof MockShopifyProductImages> {
  constructor(
    shopifyProductImageNodeFactory: ShopifyProductImageNodeFactory,
    shopifyPageInfoFactory: ShopifyPageInfoFactory,
  ){
    super(MockShopifyProductImages, shopifyProductImageNodeFactory, shopifyPageInfoFactory);
  }
}
