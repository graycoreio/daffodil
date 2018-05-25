import { TestBed, inject } from '@angular/core/testing';

import { ProductTestingService } from './product.testing.service';
import { Product } from '../../model/product';
import { ProductTestingModule } from '../../testing/product-testing.module';
import { ProductFactory, MockProductShortNames } from '../../testing/factories/product.factory';

describe('Core | Product | Testing | ProductTestingService', () => {
  
  let productTestingService;
  let productFactory;
  let mockProduct: MockProductShortNames;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [ProductTestingService]
    });

    productFactory = TestBed.get(ProductFactory);
    productTestingService = TestBed.get(ProductTestingService);
    mockProduct = productFactory.create();

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
