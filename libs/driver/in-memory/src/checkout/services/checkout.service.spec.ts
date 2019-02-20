import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Cart } from '@daffodil/core';
import { DaffCoreTestingModule, DaffCartFactory } from '@daffodil/core/testing';

import { DaffInMemoryCheckoutService } from './checkout.service';

describe('Driver | In Memory | Checkout | CheckoutService', () => {
  let checkoutService: DaffInMemoryCheckoutService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let stubOrder: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffCoreTestingModule
      ],
      providers: [
        DaffInMemoryCheckoutService
      ]
    });
    
    httpMock = TestBed.get(HttpTestingController);
    cartFactory = TestBed.get(DaffCartFactory);
    checkoutService = TestBed.get(DaffInMemoryCheckoutService);
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

      stubOrder = cartFactory.create();
    });

    describe('a successful placeOrder request', () => {
      it('should send a post request to `api/checkout/placeOrder` and respond with an order', () => {
        checkoutService.placeOrder(cartId).subscribe(order => {
          expect(order).toEqual(stubOrder);
        });  
  
        const req = httpMock.expectOne(`${checkoutService.url}/placeOrder`);
  
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toEqual({
          'cartId': cartId
        });
        
        req.flush(stubOrder);
      });
    });
  });
});
