import { TestBed, inject } from '@angular/core/testing';

import { ProductFactory } from './product.factory';
import { Product } from '@core/product/model/product';

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

    let cost = "20";
    
    it('should return a Product with the given cost', () => {
      let result:Product = productFactory.create(cost);

      expect(result.cost).toEqual(cost);
    });
  });
});
