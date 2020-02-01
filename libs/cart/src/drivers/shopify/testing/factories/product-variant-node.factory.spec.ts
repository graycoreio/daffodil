import { TestBed } from '@angular/core/testing';

import { ProductVariantNode } from '../../models/product-variant-node';
import { ProductVariantNodeFactory } from './product-variant-node.factory';

describe('Driver | Shopify | Cart | Testing | Factories | ProductVariantNodeFactory', () => {

  let productVariantNodeFactory: ProductVariantNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductVariantNodeFactory]
    });

    productVariantNodeFactory = TestBed.get(ProductVariantNodeFactory);
  });

  it('should be created', () => {
    expect(productVariantNodeFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: ProductVariantNode;

    beforeEach(() => {
      result = productVariantNodeFactory.create();
    });

    it('should return a ProductVariantNode with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.image).toBeDefined();
      expect(result.priceV2).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.weight).toBeDefined();
      expect(result.product).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: ProductVariantNode[];

    it('should create as many cart shipping rates as desired', () => {
      result = productVariantNodeFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productVariantNodeFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
