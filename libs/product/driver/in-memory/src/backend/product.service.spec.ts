import {
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

import {
  isProduct,
  provideDaffProductExtraFactoryTypes,
  DaffProductFactory,
} from '@daffodil/product/testing';

import { DaffInMemoryBackendProductService } from './product.service';
import { TRANSFER_STATE_KEY } from './transfer-state-key';

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

  describe('transferring state from the server to the browser', () => {
    describe('on browser platform', () => {
      let transferState: TransferState;
      let mockProducts;

      beforeEach(() => {
        mockProducts = [
          { id: '1', url: '/product-1.html', name: 'Product 1' },
          { id: '2', url: '/product-2.html', name: 'Product 2' },
        ];

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductService,
            provideDaffProductExtraFactoryTypes(DaffProductFactory),
            { provide: PLATFORM_ID, useValue: 'browser' },
          ],
        });

        transferState = TestBed.inject(TransferState);
        transferState.set(TRANSFER_STATE_KEY, mockProducts);

        productTestingService = TestBed.inject(DaffInMemoryBackendProductService);
      });

      it('should load products from transfer state', () => {
        expect(productTestingService.products).toEqual(mockProducts);
      });

      it('should not create new products', () => {
        expect(productTestingService.products.length).toEqual(2);
      });
    });

    describe('on browser platform without transfer state', () => {
      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductService,
            provideDaffProductExtraFactoryTypes(DaffProductFactory),
            { provide: PLATFORM_ID, useValue: 'browser' },
          ],
        });

        productTestingService = TestBed.inject(DaffInMemoryBackendProductService);
      });

      it('should create default products from factory', () => {
        expect(productTestingService.products.length).toEqual(35);
      });
    });

    describe('on server platform', () => {
      let transferState: TransferState;

      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductService,
            provideDaffProductExtraFactoryTypes(DaffProductFactory),
            { provide: PLATFORM_ID, useValue: 'server' },
          ],
        });

        transferState = TestBed.inject(TransferState);
        productTestingService = TestBed.inject(DaffInMemoryBackendProductService);
      });

      it('should set products in transfer state', () => {
        const transferStateData = transferState.get(TRANSFER_STATE_KEY, null);
        expect(transferStateData).toBeTruthy();
        expect(Array.isArray(transferStateData)).toBe(true);
      });
    });
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
