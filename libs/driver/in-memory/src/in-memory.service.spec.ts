import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffCoreTestingModule } from '@daffodil/core/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { DaffInMemoryService } from './in-memory.service';
import { DaffInMemoryCartTestingService } from './cart/in-mem/cart.testing.service';
import { DaffInMemoryProductTestingService } from './product/in-mem/product.testing.service';
import { DaffInMemoryCheckoutService } from './checkout/services/checkout.service';

describe('Driver | In Memory | InMemoryService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule,
        DaffDriverTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartTestingService,
        DaffInMemoryProductTestingService,
        DaffInMemoryCheckoutService,
        DaffInMemoryService
      ]
    });

    service = TestBed.get(DaffInMemoryService);
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
        spyOn(service.cartTestingService, 'post').and.returnValue(
          returnedValue
        );
        reqInfo = {
          collectionName: 'cart'
        };

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
        expect(service.post({ collectionName: 'noneOfTheAbove' })).toEqual(
          undefined
        );
      });
    });
  });

  describe('get', () => {
    
    describe('when collectionName is products', () => {
      
      let reqInfo;
      let result;
      let returnedValue;
      
      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service.productTestingService, 'get').and.returnValue(returnedValue);;
        reqInfo = {
          collectionName: 'products'
        }

        result = service.get(reqInfo);
      });
      
      it('should call productTestingService.get', () => {
        expect(service.productTestingService.get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of productTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      
      it('should return undefined', () => {
        expect(service.get({collectionName: 'noneOfTheAbove'})).toEqual(undefined);
      });
    });
  });

  describe('get', () => {
    
    describe('when collectionName is products', () => {
      
      let reqInfo;
      let result;
      let returnedValue;
      
      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service.productTestingService, 'get').and.returnValue(returnedValue);;
        reqInfo = {
          collectionName: 'products'
        }

        result = service.get(reqInfo);
      });
      
      it('should call productTestingService.get', () => {
        expect(service.productTestingService.get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of productTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      
      it('should return undefined', () => {
        expect(service.get({collectionName: 'noneOfTheAbove'})).toEqual(undefined);
      });
    });
  });

  describe('createDb', () => {
    let productReturn;
    let cartReturn;
    let orderReturn;
    let result;

    beforeEach(() => {
      productReturn = 'productReturn';
      cartReturn = 'cartReturn';
      orderReturn = 'orderReturn';
      spyOn(service.productTestingService, 'createDb').and.returnValue(
        productReturn
      );
      spyOn(service.cartTestingService, 'createDb').and.returnValue(cartReturn);
      spyOn(service.checkoutTestingService, 'createDb').and.returnValue(orderReturn);

      result = service.createDb();
    });

    it('should call productTestingService.createDb', () => {
      expect(service.productTestingService.createDb).toHaveBeenCalled();
    });

    it('should call cartTestingService.createDb', () => {
      expect(service.cartTestingService.createDb).toHaveBeenCalled();
    });

    it('should return expected object', () => {
      const expectedObject = {
        ...productReturn,
        ...cartReturn,
        ...orderReturn
      };

      expect(result).toEqual(expectedObject);
    });
  });
});
