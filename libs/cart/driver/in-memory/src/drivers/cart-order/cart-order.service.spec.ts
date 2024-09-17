import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartOrderService } from './cart-order.service';

describe('Driver | In Memory | Cart | CartOrderService', () => {
  let service: DaffInMemoryCartOrderService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let mockCartOrderResult: DaffCartOrderResult;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartOrderService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemoryCartOrderService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartOrderResult = {
      id: 'orderId',
      orderId: 'orderId',
      cartId: 'cartId',
    };
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('placeOrder | placing an order and getting an order result', () => {
    it('should send a post request and return the order result', done => {
      service.placeOrder(cartId, mockCartPayment).subscribe(res => {
        expect(res).toEqual(mockCartOrderResult);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${cartId}/`);

      expect(req.request.method).toBe('POST');
      req.flush(mockCartOrderResult);
    });
  });
});
