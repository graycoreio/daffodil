import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartPaymentMethod
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartPaymentService } from './cart-payment.service';

describe('Driver | Testing | Cart | CartPaymentService', () => {
  let service: DaffTestingCartPaymentService;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockPayment: DaffCartPaymentMethod
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartPaymentService
      ]
    });

    service = TestBed.get(DaffTestingCartPaymentService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockPayment = cartPaymentFactory.create();
    mockCart.payment = mockPayment;
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart payment method', () => {
    it('should return the cart\'s payment method', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.get(cartId)).toBeObservable(expected);
    });
  });

  describe('update | updating a cart\'s payment', () => {
    beforeEach(() => {
      mockCart.payment = null;
    });

    it('should return a cart', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.update(cartId, mockPayment)).toBeObservable(expected);
    });
  });

  describe('remove | removing the payment method from the cart', () => {
    it('should return undefined', () => {
      const expected = cold('(a|)', {a: undefined});
      expect(service.remove(cartId)).toBeObservable(expected);
    });
  });
});
