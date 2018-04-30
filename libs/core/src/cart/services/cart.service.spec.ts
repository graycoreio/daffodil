import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { CartTestingModule } from '../testing/cart-testing.module';
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
        CartTestingModule
      ],
      providers: [
        CartService,
        {provide: DaffodilConfigService, useValue: daffodilConfigService}
      ]
    });
    http = TestBed.get(HttpClient);
    productService = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('get', () => {
      
    it('should send a get request', () => {
      spyOn(http, 'get');
      productService.get();
      
      expect(http.get).toHaveBeenCalled();
    });
  });
});
