import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartShippingAddressService } from './cart-shipping-address.service';

describe('Driver | Testing | Cart | CartShippingAddressService', () => {
  let service: DaffTestingCartShippingAddressService;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartShippingAddressService,
      ],
    });

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    service = TestBed.inject(DaffTestingCartShippingAddressService);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    cartId = mockCart.id;
    mockCart.shipping_address = mockCartAddress;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart shipping address', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', { a: jasmine.any(Object) });
      expect(service.get(cartId)).toBeObservable(expected);
    });
  });

  describe('update', () => {
    let mockCartAddressUpdate: DaffCartAddress;

    beforeEach(() => {
      mockCartAddressUpdate = cartAddressFactory.create();
      mockCart.shipping_address = mockCartAddressUpdate;
    });

    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', { a: jasmine.any(Object) });
      expect(service.update(cartId, mockCartAddressUpdate)).toBeObservable(expected);
    });
  });
});
