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
			const paramsMap = new Map()
				.set('page_size', [stubPageSize])
				.set('current_page', [stubCurrentPage]);
      reqInfoStub = {
        id: 'any parameter',
				req: {
					params: {
						map: paramsMap
					}
				},
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

    it('should set total_pages', () => {
      expect(result.body.categoryPageConfigurationState.total_pages).toEqual(
				Math.floor(result.body.category.total_products / result.body.categoryPageConfigurationState.page_size) + 1
			);
		});
		
		it('should set no more products on the category than the page_size', () => {
			expect(result.body.category.productIds.length).toBeLessThanOrEqual(result.body.categoryPageConfigurationState.page_size);
		});

    it('should set page_size when the page_size is provided', () => {
      expect(result.body.categoryPageConfigurationState.page_size).toEqual(stubPageSize);
    });

    it('should set current_page when the current_page is provided', () => {
      expect(result.body.categoryPageConfigurationState.current_page).toEqual(stubCurrentPage);
    });
  });
});
