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

  describe('get', () => {
      
    let reqInfoStub;
    let result;
    const stubPageSize = 5;
    const stubCurrentPage = 2;

    beforeEach(() => {
      reqInfoStub = {
        id: 'any parameter',
        page_size: stubPageSize,
        current_page: stubCurrentPage,
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

    it('should set page_size when the page_size is provided', () => {
      expect(result.body.categoryPageConfigurationState.page_size).toEqual(stubPageSize);
    });

    it('should set current_page when the current_page is provided', () => {
      expect(result.body.categoryPageConfigurationState.current_page).toEqual(stubCurrentPage);
    });
  });
});
