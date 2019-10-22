import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffInMemoryBackendCategoryService } from './category.service';

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

    it('should return a GetCategoryResponse', () => {
      expect(result.body).toEqual({
        category: categoryTestingService.category,
        categoryPageConfigurationState: categoryTestingService.categoryPageConfigurationState,
        products: inMemoryBackendProductService.products
      });
    });
  });
});
