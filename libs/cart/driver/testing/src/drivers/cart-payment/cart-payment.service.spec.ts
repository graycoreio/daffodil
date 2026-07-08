import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartPaymentService } from './cart-payment.service';

describe('Driver | Testing | Cart | CartPaymentService', () => {
  let service: DaffTestingCartPaymentService;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let mockPayment: DaffCartPaymentMethod;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartPaymentService,
      ],
    });

    service = TestBed.inject(DaffTestingCartPaymentService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockPayment = cartPaymentFactory.create();
    mockCart.payment = mockPayment;
    cartId = mockCart.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart payment method', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('update | updating a cart\'s payment', () => {
    beforeEach(() => {
      mockCart.payment = null;
    });

    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.update(cartId, mockPayment)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('updateWithBilling | updating a cart\'s payment', () => {
    beforeEach(() => {
      mockCart.payment = null;
    });

    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.updateWithBilling(cartId, mockPayment, {})).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('remove | removing the payment method from the cart', () => {
    it('should return undefined and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.remove(cartId)).toBe('(a|)', { a: undefined });
      });
    });
  });
});
