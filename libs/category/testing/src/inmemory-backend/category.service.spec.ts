import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffInMemoryBackendCategoryService } from './category.service';
import { isCategory } from '../helpers/category-helper';

describe('Driver | InMemory | Category | DaffInMemoryBackendCategoryService', () => {
  let categoryTestingService;
  let inMemoryBackendProductService: DaffInMemoryBackendProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCategoryService,
        DaffInMemoryBackendProductService
      ]
    });

    inMemoryBackendProductService = TestBed.get(DaffInMemoryBackendProductService);
    categoryTestingService = TestBed.get(DaffInMemoryBackendCategoryService);
  });

  it('should be created', () => {
    expect(categoryTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = categoryTestingService.createDb();
    });

    it('should return a category with productIds that match the products from the DaffInMemoryBackendProductService', () => {
      const expectedIds = inMemoryBackendProductService.products.map(product => product.id);
      expect(isCategory(result.category)).toBeTruthy();
      result.category.productIds.map(productId => {
        expect(expectedIds.filter(id => id === productId).length).toBeGreaterThan(0);
      })
    });
  });


  describe('get - with any parameter', () => {
      
    let reqInfoStub;
    let result;

    beforeEach(() => {
      reqInfoStub = {
        id: 'any parameter',
        utils: {
          createResponse$: (func) => {
            return func();
          }
        }
      }

      result = categoryTestingService.get(reqInfoStub);
    });

    it('should return a category', () => {
      expect(result.body).toEqual(categoryTestingService.category);
    });
  });
});
