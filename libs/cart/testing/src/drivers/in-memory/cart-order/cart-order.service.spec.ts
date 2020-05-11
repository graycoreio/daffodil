import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

describe('Driver | In Memory | Cart | CartItemService', () => {
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
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartOrderService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffInMemoryCartOrderService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartOrderResult = {
      id: 'id'
    };
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart items', () => {
    it('should send a get request and return the order result', done => {
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
