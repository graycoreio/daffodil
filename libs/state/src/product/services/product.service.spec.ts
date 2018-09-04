import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { DaffodilConfigFactory } from '@daffodil/core';

import { ProductService } from './product.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';
import { ProductTestingModule } from '../testing/product-testing.module';

describe('State | Product | ProductService', () => {
  let productService: ProductService;
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

  describe('getBestSellers', () => {
    
    it('should send a get request', () => {
      spyOn(http, 'get');
      productService.getBestSellers();
      
      expect(http.get).toHaveBeenCalledWith(productService.url + "best-sellers");
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
