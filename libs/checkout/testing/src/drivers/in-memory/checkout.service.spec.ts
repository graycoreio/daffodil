import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { DaffInMemoryCheckoutService } from './checkout.service';
import { DaffOrderFactory } from '@daffodil/checkout/testing';
import { DaffOrder } from '@daffodil/checkout';

describe('Driver | In Memory | Checkout | CheckoutService', () => {
  let checkoutService: DaffInMemoryCheckoutService;
  let httpMock: HttpTestingController;
  let orderFactory: DaffOrderFactory;
  let stubOrder: DaffOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCheckoutService
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    orderFactory = TestBed.inject(DaffOrderFactory);
    checkoutService = TestBed.inject(DaffInMemoryCheckoutService);
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

      stubOrder = orderFactory.create();
    });

    describe('a successful placeOrder request', () => {
      it('should send a post request to `api/checkout/placeOrder` and respond with an order', () => {
        checkoutService.placeOrder(cartId).subscribe(order => {
          expect(order).toEqual(stubOrder);
        });

        const req = httpMock.expectOne(`${checkoutService.url}/placeOrder`);

        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({
          'cartId': cartId
        });

        req.flush(stubOrder);
      });
    });
  });
});
