import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductPriceRange } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

class MockShopifyProductVariantsPriceRange implements ShopifyProductPriceRange {
  maxVariantPrice = this.shopifyMoneyFactory.create();
  minVariantPrice = this.shopifyMoneyFactory.create();
  constructor(
    protected shopifyMoneyFactory: ShopifyMoneyFactory,
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
