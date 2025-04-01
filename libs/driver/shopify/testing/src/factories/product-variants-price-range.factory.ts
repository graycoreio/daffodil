import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductVariantsPriceRange } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

class MockShopifyProductVariantsPriceRange implements ShopifyProductVariantsPriceRange {
  maxVariantPrice = this.shopifyMoneyFactory.create();
  minVariantPrice = this.shopifyMoneyFactory.create();
  constructor(
    protected shopifyMoneyFactory: ShopifyMoneyFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductVariantsPriceRangeFactory extends DaffModelFactory<ShopifyProductVariantsPriceRange, typeof MockShopifyProductVariantsPriceRange> {
  constructor(
    shopifyMoneyFactory: ShopifyMoneyFactory,
  ){
    super(MockShopifyProductVariantsPriceRange, shopifyMoneyFactory);
  }
}
