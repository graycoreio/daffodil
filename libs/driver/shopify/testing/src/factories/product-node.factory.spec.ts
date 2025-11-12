import { TestBed } from '@angular/core/testing';

import { ShopifyProductNode } from '@daffodil/driver/shopify';

import { ShopifyProductNodeFactory } from './product-node.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductNodeFactory', () => {

  let factory: ShopifyProductNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductNodeFactory],
    });

    factory = TestBed.inject(ShopifyProductNodeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductNode;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.availableForSale).toBeDefined();
      expect(result.collections).toBeDefined();
      expect(result.compareAtPriceRange).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.descriptionHtml).toBeDefined();
      expect(result.handle).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.images).toBeDefined();
      expect(result.isGiftCard).toBeDefined();
      expect(result.media).toBeDefined();
      expect(result.metafields).toBeDefined();
      expect(result.onlineStoreUrl).toBeDefined();
      expect(result.options).toBeDefined();
      expect(result.priceRange).toBeDefined();
      expect(result.productType).toBeDefined();
      expect(result.publishedAt).toBeDefined();
      expect(result.requiresSellingPlan).toBeDefined();
      expect(result.sellingPlanGroups).toBeDefined();
      expect(result.seo).toBeDefined();
      expect(result.tags).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.updatedAt).toBeDefined();
      expect(result.variants).toBeDefined();
      expect(result.vendor).toBeDefined();
    });
  });
});
