import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ProductTestingModule } from '@core/product/testing/product-testing.module';

describe('Core | Product | ProductService', () => {
  let productService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [ProductService]
    });
    http = TestBed.get(HttpClient);
    productService = TestBed.get(ProductService);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll', () => {
      
    it('should send a get request', () => {
      spyOn(http, 'get');
      productService.getAll();
      
      expect(http.get).toHaveBeenCalled();
    });
  });
});
