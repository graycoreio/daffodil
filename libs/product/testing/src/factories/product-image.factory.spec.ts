import { TestBed } from '@angular/core/testing';

import { DaffProductImage } from '@daffodil/product';

import { DaffProductImageFactory } from './product-image.factory';

describe('@daffodil/product/testing | DaffProductImageFactory', () => {

  let productImageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductImageFactory],
    });

    productImageFactory = TestBed.inject(DaffProductImageFactory);
  });

  it('should be created', () => {
    expect(productImageFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductImage;

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
    let result: DaffProductImage[];

    it('should create as many products as desired', () => {
      result = productImageFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productImageFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
