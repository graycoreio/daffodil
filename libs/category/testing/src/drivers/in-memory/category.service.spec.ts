import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffInMemoryCategoryService } from './category.service';
import { DaffCategoryFactory } from '../../factories/category.factory';

describe('Driver | InMemory | Category | CategoryService', () => {
  let categoryService;
  let httpMock: HttpTestingController;
  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCategoryService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    categoryService = TestBed.get(DaffInMemoryCategoryService);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    productFactory = TestBed.get(DaffProductFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a single category', () => {

    it('should send a get request', () => {
      const mockCategory = categoryFactory.create();
      const mockProducts = productFactory.createMany(3);

      categoryService.get({ id: mockCategory.id, page_size: 12 }).subscribe(categoryResponse => {
        expect(categoryResponse).toEqual({
          category: mockCategory,
          products: mockProducts
        });
      });

			const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes(`${categoryService.url}`));
			expect(req.request.params.has('page_size')).toBeTruthy();
			expect(req.request.params.has('current_page')).toBeTruthy();
      expect(req.request.method).toBe('GET');

      req.flush({ category: mockCategory, products: mockProducts });
    });
  });
});
