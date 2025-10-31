import { TestBed } from '@angular/core/testing';

import {
  isProduct,
  provideDaffProductExtraFactoryTypes,
  DaffProductFactory,
} from '@daffodil/product/testing';

import { DaffInMemoryBackendProductService } from './product.service';

describe('Driver | InMemory | Product | DaffInMemoryBackendProductService', () => {
  let productTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendProductService,
        provideDaffProductExtraFactoryTypes(DaffProductFactory),
      ],
    });

    productTestingService = TestBed.inject(DaffInMemoryBackendProductService);
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
      expect(Array.isArray(result.products)).toEqual(true);
      expect(result.products.length).toBeGreaterThan(2);
      expect(isProduct(result.products[0])).toBeTruthy();
    });
  });

  describe('get', () => {

    describe('when reqInfo.id contains ".html" and matches a product URL', () => {

      let reqInfoStub;
      let result;
      let testProduct;

      beforeEach(() => {
        testProduct = productTestingService.products[0];
        const productUrl = testProduct.url.startsWith('/') ? testProduct.url.slice(1) : testProduct.url;

        reqInfoStub = {
          id: productUrl,
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = productTestingService.get(reqInfoStub);
      });

      it('should return the matching product', () => {
        expect(result.body).toEqual(testProduct);
        expect(result.status).toEqual(200);
      });
    });

    describe('when reqInfo.id contains ".html" but does not match any product URL', () => {

      let reqInfoStub;
      let result;

      beforeEach(() => {
        reqInfoStub = {
          id: 'non-existent-product.html',
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = productTestingService.get(reqInfoStub);
      });

      it('should return undefined', () => {
        expect(result).toBeUndefined();
      });
    });

    describe('when reqInfo.id does not contain ".html"', () => {

      let reqInfoStub;
      let result;

      beforeEach(() => {
        reqInfoStub = {
          id: 'some-id',
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = productTestingService.get(reqInfoStub);
      });

      it('should return undefined', () => {
        expect(result).toBeUndefined();
      });
    });
  });
});
