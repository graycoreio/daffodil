import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
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
      imports: [],
      providers: [
        DaffInMemoryCategoryService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
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

      categoryService.get({ id: mockCategory.id, kind: DaffCategoryRequestKind.ID }).subscribe(categoryResponse => {
        expect(categoryResponse).toEqual(jasmine.objectContaining({
          category: mockCategory,
          products: mockProducts,
        }));
      });

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(`${categoryService.url}`));
      expect(req.request.params.has('pageSize')).toBeTruthy();
      expect(req.request.params.has('currentPage')).toBeTruthy();
      expect(req.request.method).toBe('GET');

      req.flush({ category: mockCategory, products: mockProducts });
    });
  });

  describe('getByUrl | getting a single category by URL', () => {
    let url: string;

    beforeEach(() => {
      url = 'url';
    });

    it('should not send an HTTP request containing double slashes', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUrl({ url: `/${url}`, kind: DaffCategoryRequestKind.URL }).subscribe();

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(categoryService.url));
      expect(req.request.url).not.toContain('//');

      req.flush({ category: mockCategory, products: mockProducts });
    });

    it('should set current page', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUrl({ url: `/${url}`, kind: DaffCategoryRequestKind.URL }).subscribe();

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(categoryService.url));
      expect(req.request.params.has('currentPage')).toBeTruthy();

      req.flush({ category: mockCategory, products: mockProducts });
    });

    it('should set page size', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUrl({ url: `/${url}`, kind: DaffCategoryRequestKind.URL }).subscribe();

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(categoryService.url));
      expect(req.request.params.has('pageSize')).toBeTruthy();

      req.flush({ category: mockCategory, products: mockProducts });
    });

    it('should send a get request', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUrl({ url: `/${url}`, kind: DaffCategoryRequestKind.URL }).subscribe();

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(categoryService.url));
      expect(req.request.method).toBe('GET');

      req.flush({ category: mockCategory, products: mockProducts });
    });

    it('should return the HTTP response', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.getByUrl({ url: `/${url}`, kind: DaffCategoryRequestKind.URL }).subscribe(categoryResponse => {
        expect(categoryResponse).toEqual(jasmine.objectContaining({
          category: mockCategory,
          products: mockProducts,
        }));
      });

      const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(categoryService.url));

      req.flush({ category: mockCategory, products: mockProducts });
    });
  });
});
