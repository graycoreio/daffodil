import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartShippingRate
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartShippingMethodsService } from './cart-shipping-methods.service';

describe('Driver | Testing | Cart | CartShippingMethodsService', () => {
  let service: DaffTestingCartShippingMethodsService;
  let cartFactory: DaffCartFactory;
  let shippingRateFactory: DaffCartShippingRateFactory

  let mockCart: DaffCart;
  let mockCartShippingMethods: DaffCartShippingRate[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartShippingMethodsService
      ]
    });

    service = TestBed.get(DaffTestingCartShippingMethodsService);

    cartFactory = TestBed.get(DaffCartFactory);
    shippingRateFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingMethods = shippingRateFactory.createMany(3);
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should send a get request', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.list(cartId)).toBeObservable(expected);
    });
  });
});
