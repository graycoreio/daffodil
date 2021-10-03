import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffInMemoryProductService } from './product.service';

describe('Driver | InMemory | Product | ProductService', () => {
  let productService;
  let httpMock: HttpTestingController;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryProductService,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    productService = TestBed.inject(DaffInMemoryProductService);
    productFactory = TestBed.inject(DaffProductFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll | getting a list of products', () => {
    it('should send a get request', () => {
      const mockProducts = productFactory.createMany();

      productService.getAll().subscribe(products => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(`${productService.url}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProducts);
    });
  });

  describe('getBestSellers', () => {
    it('should send a get request and return an array of products', () => {
      const mockProducts = productFactory.createMany();

      productService.getBestSellers().subscribe(products => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(`${productService.url}/best-sellers`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProducts);
    });
  });

  describe('get | getting a single product', () => {

    it('should send a get request', () => {
      const mockProduct = productFactory.create();

      productService.get(mockProduct.id).subscribe((resp: DaffProductDriverResponse) => {
        expect(resp.id).toEqual(mockProduct.id);
        expect(resp.products[0]).toEqual(mockProduct);
      });

      const req = httpMock.expectOne(`${productService.url}/${mockProduct.id}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProduct);
    });
  });

  describe('getByUrl | getting a single product', () => {

    it('should send a get request', () => {
      const mockProduct = productFactory.create();

      productService.getByUrl(mockProduct.url).subscribe((resp: DaffProductDriverResponse) => {
        expect(resp.id).toEqual(mockProduct.id);
        expect(resp.products[0]).toEqual(mockProduct);
      });

      const req = httpMock.expectOne(`${productService.url}${mockProduct.url}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProduct);
    });
  });
});
