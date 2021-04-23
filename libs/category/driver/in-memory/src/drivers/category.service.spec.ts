import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffCategoryRequestKind } from '@daffodil/category';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffInMemoryCategoryService } from './category.service';

describe('@daffodil/category/driver/in-memory | DaffInMemoryCategoryService', () => {
  let categoryService: DaffInMemoryCategoryService;
  let httpMock: HttpTestingController;
  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryCategoryService,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    categoryService = TestBed.inject(DaffInMemoryCategoryService);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    productFactory = TestBed.inject(DaffProductFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a single category by ID', () => {

    it('should send a get request', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.get({ id: mockCategory.id, page_size: 12, kind: DaffCategoryRequestKind.ID }).subscribe(categoryResponse => {
        expect(categoryResponse).toEqual(jasmine.objectContaining({
          category: mockCategory,
          products: mockProducts,
        }));
      });

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(`${categoryService.url}`));
      expect(req.request.params.has('page_size')).toBeTruthy();
      expect(req.request.params.has('current_page')).toBeTruthy();
      expect(req.request.method).toBe('GET');

      req.flush({ category: mockCategory, products: mockProducts });
    });
  });

  describe('getByUri | getting a single category by URL', () => {

    it('should send a get request', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUri({ uri: mockCategory.uri, page_size: 12, kind: DaffCategoryRequestKind.URI }).subscribe(categoryResponse => {
        expect(categoryResponse).toEqual(jasmine.objectContaining({
          category: mockCategory,
          products: mockProducts,
        }));
      });

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(`${categoryService.url}`));
      expect(req.request.params.has('page_size')).toBeTruthy();
      expect(req.request.params.has('current_page')).toBeTruthy();
      expect(req.request.method).toBe('GET');

      req.flush({ category: mockCategory, products: mockProducts });
    });
  });
});
