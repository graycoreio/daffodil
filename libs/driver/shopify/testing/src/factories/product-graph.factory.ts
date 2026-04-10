import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import { ShopifyProductGraph } from '@daffodil/driver/shopify';

import { ShopifyPageInfoFactory } from './page-info.factory';
import { ShopifyProductNodeFactory } from './product-node.factory';

class MockShopifyProductGraph implements ShopifyProductGraph {
  nodes = this.shopifyProductNodeFactory.createMany();
  edges = [];
  filters = [];
  pageInfo = this.shopifyPageInfoFactory.create();

  constructor(
    protected shopifyProductNodeFactory: IDaffModelFactory<ShopifyProductNode>,
    protected shopifyPageInfoFactory: IDaffModelFactory<ShopifyPageInfo>,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductGraphFactory extends DaffModelFactory<ShopifyProductGraph, typeof MockShopifyProductGraph> {
  constructor(
    shopifyProductNodeFactory: ShopifyProductNodeFactory,
    shopifyPageInfoFactory: ShopifyPageInfoFactory,

  ){
    super(MockShopifyProductGraph, shopifyProductNodeFactory, shopifyPageInfoFactory);
  }
}
