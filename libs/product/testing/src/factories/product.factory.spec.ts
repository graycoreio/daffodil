import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';

import { DaffProductFactory } from './product.factory';

describe('Product | Testing | Factories | DaffProductFactory', () => {

  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductFactory],
    });

    productFactory = TestBed.inject(DaffProductFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProduct;

    beforeEach(() => {
      result = productFactory.create();
    });

    it('should return a Product with all required fields defined', () => {
      expect(result.type).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.images).toBeDefined();
      expect(result.discount).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.short_description).toBeDefined();
      expect(result.meta_title).toBeDefined();
      expect(result.meta_description).toBeDefined();
      expect(result.in_stock).toBeDefined();
    });

    it('should the percentage as a whole number', () => {
      expect(result.discount.percent % 1).toEqual(0);
    });
  });

  describe('createMany', () => {
    let result: DaffProduct[];

    it('should create as many products as desired', () => {
      result = productFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productFactory.createMany(3);
      expect(result.length).toEqual(3);
    });
  });
});
