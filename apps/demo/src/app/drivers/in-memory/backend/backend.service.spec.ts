import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendCartRootService } from '@daffodil/cart/driver/in-memory';
import { DaffInMemoryBackendGeographyService } from '@daffodil/geography/driver/in-memory';
import { DaffInMemoryBackendNavigationService } from '@daffodil/navigation/driver/in-memory';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DemoInMemoryBackendService } from './backend.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('@daffodil/demo | DemoInMemoryBackendService', () => {
  let service: DemoInMemoryBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DaffProductTestingModule],
    providers: [
        DaffInMemoryBackendCartRootService,
        DaffInMemoryBackendProductService,
        DaffInMemoryBackendNavigationService,
        DaffInMemoryBackendGeographyService,
        DemoInMemoryBackendService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});

    service = TestBed.inject(DemoInMemoryBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('post', () => {
    describe('when collectionName is a DaffInMemoryBackendCartRootService collection name', () => {
      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['cartTestingService'], 'post').and.returnValue(
          returnedValue,
        );
        reqInfo = {
          collectionName: DaffInMemoryBackendCartRootService.COLLECTION_NAMES[0],
        };

        result = service.post(reqInfo);
      });

      it('should call cartTestingService.post', () => {
        expect(service['cartTestingService'].post).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of cartTestingService.post', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      it('should return undefined', () => {
        expect(service.post({ collectionName: 'noneOfTheAbove' })).toEqual(
          undefined,
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
        spyOn(service['productTestingService'], 'get').and.returnValue(returnedValue);
        reqInfo = {
          collectionName: 'products',
        };

        result = service.get(reqInfo);
      });

      it('should call productTestingService.get', () => {
        expect(service['productTestingService'].get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of productTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is navigation', () => {

      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['navigationTestingService'], 'get').and.returnValue(returnedValue);
        reqInfo = {
          collectionName: 'navigation',
        };

        result = service.get(reqInfo);
      });

      it('should call navigationTestingService.get', () => {
        expect(service['navigationTestingService'].get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of navigationTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is countries', () => {

      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['geographyTestingService'], 'get').and.returnValue(returnedValue);
        reqInfo = {
          collectionName: 'countries',
        };

        result = service.get(reqInfo);
      });

      it('should call geographyTestingService.get', () => {
        expect(service['geographyTestingService'].get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of geographyTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is a DaffInMemoryBackendCartRootService collection name', () => {

      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['cartTestingService'], 'get').and.returnValue(returnedValue);
        reqInfo = {
          collectionName: DaffInMemoryBackendCartRootService.COLLECTION_NAMES[0],
        };

        result = service.get(reqInfo);
      });

      it('should call cartTestingService.get', () => {
        expect(service['cartTestingService'].get).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of cartTestingService.get', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {

      it('should return undefined', () => {
        expect(service.get({ collectionName: 'noneOfTheAbove' })).toEqual(undefined);
      });
    });
  });

  describe('put', () => {
    describe('when collectionName is a DaffInMemoryBackendCartRootService collection name', () => {
      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['cartTestingService'], 'put').and.returnValue(
          returnedValue,
        );
        reqInfo = {
          collectionName: DaffInMemoryBackendCartRootService.COLLECTION_NAMES[0],
        };

        result = service.put(reqInfo);
      });

      it('should call cartTestingService.put', () => {
        expect(service['cartTestingService'].put).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of cartTestingService.put', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      it('should return undefined', () => {
        expect(service.put({ collectionName: 'noneOfTheAbove' })).toEqual(
          undefined,
        );
      });
    });
  });

  describe('delete', () => {
    describe('when collectionName is a DaffInMemoryBackendCartRootService collection name', () => {
      let reqInfo;
      let result;
      let returnedValue;

      beforeEach(() => {
        returnedValue = 'returnedValue';
        spyOn(service['cartTestingService'], 'delete').and.returnValue(
          returnedValue,
        );
        reqInfo = {
          collectionName: DaffInMemoryBackendCartRootService.COLLECTION_NAMES[0],
        };

        result = service.delete(reqInfo);
      });

      it('should call cartTestingService.delete', () => {
        expect(service['cartTestingService'].delete).toHaveBeenCalledWith(reqInfo);
      });

      it('should return the returned value of cartTestingService.delete', () => {
        expect(result).toEqual(returnedValue);
      });
    });

    describe('when collectionName is none of the above', () => {
      it('should return undefined', () => {
        expect(service.delete({ collectionName: 'noneOfTheAbove' })).toEqual(
          undefined,
        );
      });
    });
  });

  describe('createDb', () => {
    let productReturn;
    let cartReturn;
    let orderReturn;
    let navigationReturn;
    let result;

    beforeEach(() => {
      productReturn = 'productReturn';
      cartReturn = 'cartReturn';
      orderReturn = 'orderReturn';
      navigationReturn = 'navigationReturn';
      spyOn(service['productTestingService'], 'createDb').and.returnValue(
        productReturn,
      );
      spyOn(service['cartTestingService'], 'createDb').and.returnValue(cartReturn);
      spyOn(service['navigationTestingService'], 'createDb').and.returnValue(navigationReturn);

      result = service.createDb(null);
    });

    it('should call productTestingService.createDb', () => {
      expect(service['productTestingService'].createDb).toHaveBeenCalled();
    });

    it('should call cartTestingService.createDb', () => {
      expect(service['cartTestingService'].createDb).toHaveBeenCalled();
    });

    it('should call navigationTestingService.createDb', () => {
      expect(service['navigationTestingService'].createDb).toHaveBeenCalled();
    });

    it('should return expected object', () => {
      const expectedObject = {
        ...productReturn,
        ...cartReturn,
        ...orderReturn,
        ...navigationReturn,
      };

      expect(result).toEqual(expectedObject);
    });
  });
});
