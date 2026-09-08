import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartPaymentFactory,
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartPaymentMethodsService } from './cart-payment-methods.service';

describe('Driver | Testing | Cart | CartPaymentMethodsService', () => {
  let service: DaffTestingCartPaymentMethodsService;
  let cartFactory: DaffCartFactory;
  let paymentFactory: DaffCartPaymentFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let mockCartPaymentMethods: DaffCartPaymentMethod[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartPaymentMethodsService,
      ],
    });

    service = TestBed.inject(DaffTestingCartPaymentMethodsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPaymentMethods = paymentFactory.createMany(3);
    cartId = mockCart.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should return an array and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.list(cartId)).toBe('(a|)', { a: jasmine.any(Array) });
      });
    });
  });
});
