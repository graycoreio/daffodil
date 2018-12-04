import { TestBed } from '@angular/core/testing';

import { DaffInMemoryProductTestingService } from './product.testing.service';

import { DaffCoreTestingModule } from '../../../../../index';

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
