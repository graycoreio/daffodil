import { TestBed } from '@angular/core/testing';

import { DaffCoreTestingModule } from '../../../index';

import { DaffInMemoryService } from './in-memory.service';
import { DaffInMemoryProductTestingService } from './product/in-mem/product.testing.service';

describe('Driver | In Memory | InMemoryService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule
      ],
      providers: [
        DaffInMemoryProductTestingService,
        DaffInMemoryService
      ]
    });

    service = TestBed.get(DaffInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
    let result;

    beforeEach(() => {
      productReturn = 'productReturn';
      spyOn(service.productTestingService, 'createDb').and.returnValue(
        productReturn
      );

      result = service.createDb();
    });

    it('should call productTestingService.createDb', () => {
      expect(service.productTestingService.createDb).toHaveBeenCalled();
    });

    it('should return expected object', () => {
      let expectedObject = {
        ...productReturn
      };

      expect(result).toEqual(expectedObject);
    });
  });
});
