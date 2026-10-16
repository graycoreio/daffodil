import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';

import { DaffCheckoutTestingOrderService } from './order.service';

describe('@daffodil/checkout/driver/testing | DaffCheckoutTestingOrderService', () => {
  let service: DaffCheckoutTestingOrderService;
  let cartFactory: DaffCartFactory;

  let mockCart: DaffCart;
  let mockCheckoutOrderResult: DaffCheckoutOrderResult;
  let cartId: DaffCart['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCheckoutTestingOrderService,
      ],
    });

    service = TestBed.inject(DaffCheckoutTestingOrderService);

    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();
    mockCheckoutOrderResult = {
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
      expect(service.placeOrder(cartId)).toBeObservable(expected);
    });
  });
});
