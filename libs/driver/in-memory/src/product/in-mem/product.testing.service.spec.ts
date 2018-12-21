import { TestBed } from '@angular/core/testing';

import { DaffCoreTestingModule } from '@daffodil/core/testing';

import { DaffInMemoryProductTestingService } from './product.testing.service';
import { productHelper } from '@daffodil/core/testing';

describe('Driver | InMemory | Product | DaffInMemoryProductTestingService', () => {
  let productTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DaffCoreTestingModule],
      providers: [DaffInMemoryProductTestingService]
    });

    productTestingService = TestBed.get(DaffInMemoryProductTestingService);
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
      expect(productHelper.isProduct(result.products[0])).toBeTruthy();
    });

    it('should return Products that have 5 images', () => {
      expect(result.products[0].images.length).toEqual(5);
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
