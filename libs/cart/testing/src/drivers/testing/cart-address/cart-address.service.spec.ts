import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartAddress
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartAddressService } from './cart-address.service';

describe('Driver | Testing | Cart | CartAddressService', () => {
  let service: DaffTestingCartAddressService;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartAddressService
      ]
    });

    cartFactory = TestBed.get(DaffCartFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
    service = TestBed.get(DaffTestingCartAddressService);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    cartId = mockCart.id;
    mockCart.billing_address = mockCartAddress;
    mockCart.shipping_address = mockCartAddress;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('update | updating a cart\'s billing and shipping address', () => {
    let mockCartAddressUpdate: DaffCartAddress;

    beforeEach(() => {
      mockCartAddressUpdate = cartAddressFactory.create();
      mockCart.billing_address = mockCartAddressUpdate;
      mockCart.shipping_address = mockCartAddressUpdate;
    });

    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.update(cartId, mockCartAddressUpdate)).toBeObservable(expected);
    });
  });
});
