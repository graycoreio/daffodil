import { TestBed } from '@angular/core/testing';

import { ShopifyProductVariantsPriceRange } from '@daffodil/driver/shopify';

import { ShopifyProductVariantsPriceRangeFactory } from './product-variants-price-range.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductVariantsPriceRangeFactory', () => {

  let factory: ShopifyProductVariantsPriceRangeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductVariantsPriceRangeFactory],
    });

    factory = TestBed.inject(ShopifyProductVariantsPriceRangeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductVariantsPriceRange;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.maxVariantPrice).toBeDefined();
      expect(result.minVariantPrice).toBeDefined();
    });
  });
});
