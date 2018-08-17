import { TestBed } from '@angular/core/testing';

import { MockService } from './mock.service';
import { ProductTestingModule } from '../../product/testing/product-testing.module';
import { CartTestingModule } from '../../cart/testing/cart-testing.module';

describe('MockService', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule,
        CartTestingModule
      ],
      providers: [
        MockService
      ]
    });

    service = TestBed.get(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('post', () => {
    
    describe('when collectionName is cart', () => {
      
      let reqInfo;
      let result;
      let returnedValue;
      
      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service.cartTestingService, 'post').and.returnValue(returnedValue);;
        reqInfo = {
          collectionName: 'cart'
        }

        result = service.post(reqInfo);
      });
      
      it('should call cartTestingService.post', () => {
        expect(service.cartTestingService.post).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of cartTestingService.post', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      
      it('should return undefined', () => {
        expect(service.post({collectionName: 'noneOfTheAbove'})).toEqual(undefined);
      });
    });
  });

  describe('createDb', () => {

    let productReturn;
    let cartReturn;
    let result;

    beforeEach(() => {
      productReturn = 'productReturn';
      cartReturn = 'cartReturn';
      spyOn(service.productTestingService, 'createDb').and.returnValue(productReturn);
      spyOn(service.cartTestingService, 'createDb').and.returnValue(cartReturn);

      result = service.createDb();
    });
    
    it('should call productTestingService.createDb', () => {
      expect(service.productTestingService.createDb).toHaveBeenCalled();
    });
    
    it('should call cartTestingService.createDb', () => {
      expect(service.cartTestingService.createDb).toHaveBeenCalled();      
    });
    
    it('should return expected object', () => {
      let expectedObject = {
        ...productReturn,
        ...cartReturn
      };

      expect(result).toEqual(expectedObject);
    });
  });
});
