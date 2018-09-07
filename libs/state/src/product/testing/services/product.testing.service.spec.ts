import { TestBed } from '@angular/core/testing';

import { ProductFactory, Product } from '@daffodil/core';

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
  });

  describe('get', () => {
    
    describe('when reqInfo.id is "best-sellers"', () => {
      
      let reqInfoStub;
      let result;

      beforeEach(() => {
        reqInfoStub = {
          id: 'best-sellers',
          utils: {
            createResponse$: (func) => {
              return func();
            }
          }
        }

        result = productTestingService.get(reqInfoStub);
      });

      it('should return an Array of 4 products', () => {
        expect(result.body).toEqual(jasmine.any(Array));
        expect(result.body.length).toEqual(4);
      });
    });
  });
});
