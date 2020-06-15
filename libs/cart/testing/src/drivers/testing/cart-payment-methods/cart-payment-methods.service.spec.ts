import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartPaymentMethod
} from '@daffodil/cart';
import {
  DaffCartPaymentFactory,
  DaffCartFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartPaymentMethodsService } from './cart-payment-methods.service';

describe('Driver | Testing | Cart | CartPaymentMethodsService', () => {
  let service: DaffTestingCartPaymentMethodsService;
  let cartFactory: DaffCartFactory;
  let paymentFactory: DaffCartPaymentFactory

  let mockCart: DaffCart;
  let mockCartPaymentMethods: DaffCartPaymentMethod[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartPaymentMethodsService
      ]
    });

    service = TestBed.get(DaffTestingCartPaymentMethodsService);

    cartFactory = TestBed.get(DaffCartFactory);
    paymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPaymentMethods = paymentFactory.createMany(3);
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should return the cart\'s payment methods', () => {
      const expected = cold('(a|)', {a: jasmine.any(Array)});
      expect(service.list(cartId)).toBeObservable(expected);
    });
  });
});
