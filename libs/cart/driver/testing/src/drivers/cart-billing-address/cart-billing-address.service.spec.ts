import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartBillingAddressService } from './cart-billing-address.service';

describe('@daffodil/cart/driver/testing | DaffTestingCartBillingAddressService', () => {
  let service: DaffTestingCartBillingAddressService;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartBillingAddressService,
      ],
    });

    cartFactory = TestBed.inject(DaffCartFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    service = TestBed.inject(DaffTestingCartBillingAddressService);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    cartId = mockCart.id;
    mockCart.billing_address = mockCartAddress;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart billing address', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('update | updating a cart\'s billing address', () => {
    let mockCartAddressUpdate: DaffCartAddress;

    beforeEach(() => {
      mockCartAddressUpdate = cartAddressFactory.create();
      mockCart.billing_address = mockCartAddressUpdate;
    });

    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.update(cartId, mockCartAddressUpdate)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });
});
