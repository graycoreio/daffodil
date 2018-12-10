import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DaffShopifyCartService } from './cart.service';

import { DaffDriverConfigService, DaffDriverConfigFactory } from '@daffodil/driver';

import { DaffCoreTestingModule, DaffCartFactory } from '@daffodil/core/testing';
import { Cart } from '@daffodil/core';

describe('Driver | Shopify | Cart | CartService', () => {
  let cartService: DaffShopifyCartService;
  let httpMock: HttpTestingController;
  
  let mockCart: Cart;
  let cartFactory: DaffCartFactory;

  let daffodilConfigService: DaffDriverConfigService;
  let daffodilConfigFactory: DaffDriverConfigFactory;

  beforeEach(() => {
    daffodilConfigFactory = new DaffDriverConfigFactory();
    daffodilConfigService = new DaffDriverConfigService(
      daffodilConfigFactory.create()
    );

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffCoreTestingModule
      ],
      providers: [
        DaffShopifyCartService,
        { provide: DaffDriverConfigService, useValue: daffodilConfigService }
      ]
    });
    
    httpMock = TestBed.get(HttpTestingController);
    cartService = TestBed.get(DaffShopifyCartService);
    cartFactory = TestBed.get(DaffCartFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should send a get request', () => {
      mockCart = cartFactory.create();

      cartService.get().subscribe(cart => {
        expect(cart).toEqual(mockCart);
      });

      const req = httpMock.expectOne(`${cartService.url}`);

      expect(req.request.method).toBe("GET");
      req.flush(mockCart);
    });
  });

  describe('addToCart', () => {
    let productId;
    let qty;
    let returnedValue;

    beforeEach(() => {
      productId = 'productId';
      qty = 1;

      mockCart = cartFactory.create();
    });

    describe('a successful addToCart request', () => {
      it('should send a post request to `api/cart/addToCart` and respond with a cart', () => {
        cartService.addToCart(productId, qty).subscribe(cart => {
          expect(cart).toEqual(mockCart);
        });  
  
        const req = httpMock.expectOne(`${cartService.url}/addToCart`);
  
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual({
          'productId': productId,
          'qty': qty
        });
        
        req.flush(mockCart);
      });
    })
  });
});
