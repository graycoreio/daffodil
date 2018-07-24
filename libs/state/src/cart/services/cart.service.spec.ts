import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { CartTestingModule } from '../testing/cart-testing.module';
import { DaffodilConfigService } from '../../config/daffodil-config.service';
import { DaffodilConfigFactory } from '@daffodil/core';

describe('State | Cart | CartService', () => {
  let cartService;

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
    cartService = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  describe('get', () => {
      
    it('should send a get request', () => {
      spyOn(http, 'get');
      cartService.get();
      
      expect(http.get).toHaveBeenCalled();
    });
  });

  describe('addToCart', () => {

    let productId;
    let qty;
    let returnedValue;
    
    beforeEach(() => {
      productId = 'productId';
      qty = 1;
      returnedValue = 'returnedValue';

      spyOn(http, 'post').and.returnValue(returnedValue);;
    });

    it('should send a post request', () => {
      cartService.addToCart(productId, qty);
      expect(http.post).toHaveBeenCalledWith(cartService.url + '/addToCart', {productId, qty});
    });

    it('returns the value from post request', () => {
      expect(cartService.addToCart(productId, qty)).toEqual(returnedValue);
    });
  });
});
