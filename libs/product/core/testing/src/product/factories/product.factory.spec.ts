import { TestBed } from '@angular/core/testing';

import { DaffProductFactory, MockProductShortNames, MockProductLongNames } from './product.factory';
import { Product } from '@daffodil/product';

describe('Core | Product | Factories | DaffProductFactory', () => {
  
  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffProductFactory]
    });

    productFactory = TestBed.get(DaffProductFactory);
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

  describe('createMany', () => {
    let result: Product[];

    it('should create as many products as desired', () => {
      result = productFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = productFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })

  describe('createStyleTestingList', () => {

    let result: Product[];

    beforeEach(() => {
      result = productFactory.createStyleTestingList();
    });
    
    it('should return a list of Products', () => {
      expect(result.length).toEqual(9);
      expect(result[0]).toEqual(jasmine.any(MockProductShortNames));
      expect(result[1]).toEqual(jasmine.any(MockProductLongNames));
    });

    it('should return expected productId on products', () => {
      expect(result[0].id).toEqual('1001');
      expect(result[1].id).toEqual('1002');
      expect(result[2].id).toEqual('1003');
      expect(result[3].id).toEqual('1004');
      expect(result[4].id).toEqual('1005');
      expect(result[5].id).toEqual('1006');
      expect(result[6].id).toEqual('1007');
      expect(result[7].id).toEqual('1008');
      expect(result[8].id).toEqual('1009');
    });
  });
});
