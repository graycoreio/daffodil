import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ProductTestingModule } from '../testing/product-testing.module';
import { DaffodilConfigService } from '../../config/daffodil-config.service';
import { DaffodilConfigFactory } from '../../config/testing/daffodil-config.factory';

describe('Core | Product | ProductService', () => {
  let productService;
  let http: HttpClient;
  let daffodilConfigService: DaffodilConfigService;
  let daffodilConfigFactory: DaffodilConfigFactory;

  beforeEach(() => {
    daffodilConfigFactory = new DaffodilConfigFactory();
    daffodilConfigService = new DaffodilConfigService(daffodilConfigFactory.create());

    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [
        ProductService,
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
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

  describe('get', () => {

    let productId;

    beforeEach(() => {
      productId = 'product id';
    });
      
    it('should send a get request', () => {
      spyOn(http, 'get');
      productService.get(productId);
      
      expect(http.get).toHaveBeenCalledWith(productService.url + productId);
    });
  });
});
