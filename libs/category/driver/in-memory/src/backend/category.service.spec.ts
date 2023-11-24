import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffInMemoryBackendCategoryService } from './category.service';

describe('@daffodil/category/driver/in-memory | DaffInMemoryBackendCategoryService', () => {
  let backend: DaffInMemoryBackendCategoryService;
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
    backend = TestBed.inject(DaffInMemoryBackendCategoryService);
  });

  it('should be created', () => {
    expect(backend).toBeTruthy();
  });

  it('should create categories on init', () => {
    expect(backend.categories.length).toBeGreaterThan(0);
  });

  describe('get', () => {

    let reqInfoStub;
    let result;
    let id: string;
    const stubPageSize = 5;
    const stubCurrentPage = 2;

    describe('when the category with the requested ID exists', () => {
      beforeEach(() => {
        const paramsMap = new Map()
          .set('pageSize', [stubPageSize])
          .set('currentPage', [stubCurrentPage]);
        id = '1001';
        reqInfoStub = {
          id,
          req: {
            params: {
              map: paramsMap,
            },
          },
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = backend.get(reqInfoStub);
      });

      it('should return a GetCategoryResponse', () => {
        expect(result.body).toEqual({
          category: backend.categories[0],
          categoryPageMetadata: backend.categoryPageMetadata,
          products: inMemoryBackendProductService.products,
        });
      });

      it('should set totalPages', () => {
        const totalProducts = result.body.categoryPageMetadata.count;
        const pageSize = result.body.categoryPageMetadata.pageSize;
        expect(result.body.categoryPageMetadata.totalPages).toEqual(Math.ceil(totalProducts/pageSize));
      });

      it('should set no more products on the category than the pageSize', () => {
        expect(result.body.categoryPageMetadata.ids.length).toBeLessThanOrEqual(result.body.categoryPageMetadata.pageSize);
      });

      it('should set pageSize when the pageSize is provided', () => {
        expect(result.body.categoryPageMetadata.pageSize).toEqual(stubPageSize);
      });

      it('should set currentPage when the currentPage is provided', () => {
        expect(result.body.categoryPageMetadata.currentPage).toEqual(stubCurrentPage);
      });
    });

    describe('when the category with the requested ID does not exist', () => {
      beforeEach(() => {
        const paramsMap = new Map()
          .set('pageSize', [stubPageSize])
          .set('currentPage', [stubCurrentPage]);
        id = 'does not exist';
        reqInfoStub = {
          id,
          req: {
            params: {
              map: paramsMap,
            },
          },
          utils: {
            createResponse$: (func) => func(),
          },
        };

        result = backend.get(reqInfoStub);
      });

      it('should return a not found response', () => {
        expect(result.status).toEqual(STATUS.NOT_FOUND);
      });

      it('should set the metadata to null', () => {
        expect(backend.categoryPageMetadata).toBeNull();
      });
    });
  });
});
