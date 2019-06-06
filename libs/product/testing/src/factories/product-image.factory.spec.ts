import { TestBed } from '@angular/core/testing';

import { ProductImage } from 'product/src';

import { DaffProductImageFactory } from 'product/testing/src/factories/product-image.factory';

describe('Product | Testing | Factories | DaffProductImageFactory', () => {
  
  let productImageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductImageFactory]
    });

    productImageFactory = TestBed.get(DaffProductImageFactory);
  });

  it('should be created', () => {
    expect(productImageFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: ProductImage;

    beforeEach(() => {
      result = productImageFactory.create();
    });
    
    it('should return a ProductImage with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.label).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: ProductImage[];

    it('should create as many products as desired', () => {
      result = productImageFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productImageFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
