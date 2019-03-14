import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DaffDriverConfigService, DaffDriverConfigFactory } from '@daffodil/driver';
import { Cart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffShopifyCheckoutService } from './checkout.service';

describe('Driver | Shopify | Checkout | CheckoutService', () => {
  let checkoutService: DaffShopifyCheckoutService;
  let httpMock: HttpTestingController;
  
  let mockOrder: Cart;
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
        HttpClientTestingModule
      ],
      providers: [
        DaffShopifyCheckoutService,
        { provide: DaffDriverConfigService, useValue: daffodilConfigService }
      ]
    });
    
    httpMock = TestBed.get(HttpTestingController);
    checkoutService = TestBed.get(DaffShopifyCheckoutService);
    cartFactory = TestBed.get(DaffCartFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(checkoutService).toBeTruthy();
  });

  describe('placeOrder', () => {
    let cartId;

    beforeEach(() => {
      cartId = 'cartId';

      mockOrder = cartFactory.create();
    });

    describe('a successful placeOrder request', () => {
      it('should send a post request to `api/cart/placeOrder` and respond with an order', () => {
        checkoutService.placeOrder(cartId).subscribe(order => {
          expect(order).toEqual(mockOrder);
        });
  
        const req = httpMock.expectOne(`${checkoutService.url}/placeOrder`);
  
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual({
          'cartId': cartId,
        });
        
        req.flush(mockOrder);
      });
    })
  });
});
