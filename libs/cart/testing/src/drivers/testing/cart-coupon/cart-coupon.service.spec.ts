import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartCoupon
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartCouponService } from './cart-coupon.service';

describe('Driver | Testing | Cart | CartCouponService', () => {
  let service: DaffTestingCartCouponService;
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let mockCart: DaffCart;
  let mockCartCoupon: DaffCartCoupon;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartCouponService
      ]
    });

    service = TestBed.get(DaffTestingCartCouponService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    mockCart.coupons = [mockCartCoupon];
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart coupons', () => {
    it('should return an array and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Array)});
      expect(service.list(cartId)).toBeObservable(expected);
    });
  });

  describe('apply | applying a coupon to the cart', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.apply(cartId, mockCartCoupon)).toBeObservable(expected);
    });
  });

  describe('remove | removing a coupon from the cart', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.remove(cartId, mockCartCoupon)).toBeObservable(expected);
    });
  });

  describe('removeAll | removing all coupons from the cart', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.removeAll(cartId)).toBeObservable(expected);
    });
  });
});
