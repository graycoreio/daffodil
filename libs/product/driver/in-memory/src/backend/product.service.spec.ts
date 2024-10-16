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

    describe('when reqInfo.id is "best-sellers"', () => {

      let reqInfoStub;
      let result;

      beforeEach(() => {
        reqInfoStub = {
          id: 'best-sellers',
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = productTestingService.get(reqInfoStub);
      });

      it('should return an Array of 4 products', () => {
        expect(result.body).toEqual(jasmine.any(Array));
        expect(result.body.length).toEqual(4);
      });
    });
  });
});
