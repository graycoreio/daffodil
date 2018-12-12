import { TestBed, inject } from '@angular/core/testing';

import { DaffCoreTestingModule } from '@daffodil/core/testing';

import { DaffInMemoryService } from './in-memory.service';
import { DaffInMemoryCartTestingService } from './cart/in-mem/cart.testing.service';

describe('Driver | In Memory | InMemoryService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule
      ],
      providers: [
        DaffInMemoryCartTestingService,
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

  describe('createDb', () => {
    let cartReturn;
    let result;

    beforeEach(() => {
      cartReturn = 'cartReturn';
      spyOn(service.cartTestingService, 'createDb').and.returnValue(cartReturn);

      result = service.createDb();
    });

    it('should call cartTestingService.createDb', () => {
      expect(service.cartTestingService.createDb).toHaveBeenCalled();
    });

    it('should return expected object', () => {
      let expectedObject = {
        ...cartReturn
      };

      expect(result).toEqual(expectedObject);
    });
  });
});
