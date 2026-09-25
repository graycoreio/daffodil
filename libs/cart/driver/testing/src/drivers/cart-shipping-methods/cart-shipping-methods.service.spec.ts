import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { runMarbles } from '@daffodil/jasmine';

import { DaffTestingCartShippingMethodsService } from './cart-shipping-methods.service';

describe('Driver | Testing | Cart | CartShippingMethodsService', () => {
  let service: DaffTestingCartShippingMethodsService;
  let cartFactory: DaffCartFactory;
  let shippingRateFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingMethods: DaffCartShippingRate[];
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartShippingMethodsService,
      ],
    });

    service = TestBed.inject(DaffTestingCartShippingMethodsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    shippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingMethods = shippingRateFactory.createMany(3);
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | list a cart\'s payment methods', () => {
    it('should return an array and not throw an error', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.list(cartId)).toBe('(a|)', { a: jasmine.any(Array) });
      });
    });
  });
});
