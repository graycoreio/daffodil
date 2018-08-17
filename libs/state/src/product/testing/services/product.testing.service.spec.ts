import { TestBed } from '@angular/core/testing';

import { ProductFactory } from '@daffodil/core';

import { ProductTestingService } from './product.testing.service';
import { ProductTestingModule } from '../../testing/product-testing.module';

describe('State | Product | Testing | ProductTestingService', () => {
  
  let productTestingService: ProductTestingService;
  let productFactory: ProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [ProductTestingService]
    });

    productFactory = TestBed.get(ProductFactory);
    productTestingService = TestBed.get(ProductTestingService);

    spyOn(productFactory, 'createStyleTestingList').and.callThrough();
  });

  it('should be created', () => {
    expect(productTestingService).toBeTruthy();
  });

  describe('createDb', () => {

    let result;

    beforeEach(() => {
      result = productTestingService.createDb();
    });
    
    it('should return a object with an array of Products', () => {
      expect(result.products.length).toEqual(9);
    });

    it('should call productFactory.createStyleTestingList', () => {
      expect(productFactory.createStyleTestingList).toHaveBeenCalled();
    });
  });
});
