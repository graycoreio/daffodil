import { TestBed, inject } from '@angular/core/testing';

import { ProductFactory } from './product.factory';
import { Product } from '../../model/product';

describe('Core | Product | Testing | ProductFactory', () => {
  
  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFactory]
    });

    productFactory = TestBed.get(ProductFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {

    let result:Product;

    beforeEach(() => {
      result = productFactory.create();
    });
    
    it('should return a Product with a random cost under 10000', () => {

      expect(result.cost).toBeLessThan(10000);
    });

    it('should return a Product with a random id under 1000', () => {
      expect(result.id).toBeLessThan(1000);
    });
  });
});
