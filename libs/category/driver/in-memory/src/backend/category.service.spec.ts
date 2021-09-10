import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffInMemoryBackendCategoryService } from './category.service';

describe('Driver | InMemory | Category | DaffInMemoryBackendCategoryService', () => {
  let categoryTestingService;
  let inMemoryBackendProductService: DaffInMemoryBackendProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffInMemoryBackendCategoryService,
        DaffInMemoryBackendProductService,
      ],
    });

    inMemoryBackendProductService = TestBed.inject(DaffInMemoryBackendProductService);
    categoryTestingService = TestBed.inject(DaffInMemoryBackendCategoryService);
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
            map: paramsMap,
          },
        },
        utils: {
          createResponse$: (func) => func(),
        },
      };

      result = categoryTestingService.get(reqInfoStub);
    });

    it('should return a GetCategoryResponse', () => {
      expect(result.body).toEqual({
        category: categoryTestingService.category,
        categoryPageMetadata: categoryTestingService.categoryPageMetadata,
        products: inMemoryBackendProductService.products,
      });
    });

    it('should set total_pages', () => {
      const totalProducts = result.body.category.total_products;
      const pageSize = result.body.categoryPageMetadata.page_size;
      expect(result.body.categoryPageMetadata.total_pages).toEqual(Math.ceil(totalProducts/pageSize));
    });

    it('should set no more products on the category than the page_size', () => {
      expect(result.body.categoryPageMetadata.product_ids.length).toBeLessThanOrEqual(result.body.categoryPageMetadata.page_size);
    });

    it('should set page_size when the page_size is provided', () => {
      expect(result.body.categoryPageMetadata.page_size).toEqual(stubPageSize);
    });

    it('should set current_page when the current_page is provided', () => {
      expect(result.body.categoryPageMetadata.current_page).toEqual(stubCurrentPage);
    });
  });
});
