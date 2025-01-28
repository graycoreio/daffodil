import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartOrderService } from './cart-order.service';

describe('Driver | Testing | Cart | CartOrderService', () => {
  let service: DaffTestingCartOrderService;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let mockCartOrderResult: DaffCartOrderResult;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartOrderService,
      ],
    });

    service = TestBed.inject(DaffTestingCartOrderService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartOrderResult = {
      orderId: 'orderId',
      cartId: 'cartId',
    };
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('placeOrder | placing an order and getting an order result', () => {
    it('should return the order ID and not throw an error', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({
        id: jasmine.truthy(),
        orderId: jasmine.truthy(),
        cartId: jasmine.truthy(),
      }) });
      expect(service.placeOrder(cartId, mockCartPayment)).toBeObservable(expected);
    });
  });
});
