import { Injectable } from '@angular/core';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import { ShopifyProductPriceRange } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

class MockShopifyProductVariantsPriceRange implements ShopifyProductPriceRange {
  maxVariantPrice = this.shopifyMoneyFactory.create();
  minVariantPrice = this.shopifyMoneyFactory.create();
  constructor(
    protected shopifyMoneyFactory: IDaffModelFactory<ShopifyMoneyV2>,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductVariantsPriceRangeFactory extends DaffModelFactory<ShopifyProductPriceRange, typeof MockShopifyProductVariantsPriceRange> {
  constructor(
    shopifyMoneyFactory: ShopifyMoneyFactory,
  ){
    super(MockShopifyProductVariantsPriceRange, shopifyMoneyFactory);
  }
}
