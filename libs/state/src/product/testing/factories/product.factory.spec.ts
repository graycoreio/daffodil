import { TestBed } from '@angular/core/testing';

import { ProductFactory, MockProductDefinedId, MockProductShortNames } from './product.factory';
import { Product } from '@daffodil/core';

describe('State | Product | Testing | ProductFactory', () => {
  
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

    let result: Product;

    beforeEach(() => {
      result = productFactory.create();
    });
    
    it('should return a Product with all required fields defined', () => {

      expect(result.id).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined(); 
      expect(result.description).toBeDefined();     
    });
  });

  describe('createStyleTestingList', () => {

    let result: Product[];

    beforeEach(() => {
      result = productFactory.createStyleTestingList();
    });
    
    it('should return a list of Products', () => {
      expect(result.length).toEqual(9);
      expect(result[0]).toEqual(jasmine.any(MockProductDefinedId));
      expect(result[1]).toEqual(jasmine.any(MockProductShortNames));
    });
  });
});
