import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffInMemoryProductService } from './product.service';
import { ProductFactory } from '../../../../../index';
import { DaffCoreTestingModule } from '@daffodil/core/testing';

describe('Driver | Mock | Product | ProductService', () => {
  let productService;
  let httpMock: HttpTestingController;
  let productFactory: ProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryProductService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    productService = TestBed.get(DaffInMemoryProductService);
    productFactory = TestBed.get(ProductFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll | getting a list of products', () => {
    it('should send a get request', () => {
      let mockProducts = productFactory.createStyleTestingList();

      productService.getAll().subscribe(products => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(`${productService.url}`);
      expect(req.request.method).toBe("GET");

      req.flush(mockProducts);
    });
  });

  describe('getBestSellers', () => {
    
    it('should send a get request', () => {
      let mockProducts = productFactory.createStyleTestingList();

      productService.getBestSellers().subscribe(products => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(`${productService.url}best-sellers`);
      expect(req.request.method).toBe("GET");

      req.flush(mockProducts);
    });
  });

  describe('get | getting a single product', () => {
    let productId;

    it('should send a get request', () => {
      let mockProduct = productFactory.create();

      productService.get(mockProduct.id).subscribe(product => {
        expect(product).toEqual(mockProduct);
      });

      const req = httpMock.expectOne(`${productService.url}${mockProduct.id}`);
      expect(req.request.method).toBe("GET");

      req.flush(mockProduct);
    });
  });
});
