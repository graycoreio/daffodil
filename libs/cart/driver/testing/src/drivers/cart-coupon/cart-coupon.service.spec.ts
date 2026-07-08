import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartCouponService } from './cart-coupon.service';

describe('@daffodil/cart/driver/testing | DaffTestingCartCouponService', () => {
  let service: DaffTestingCartCouponService;
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let mockCartCoupon: DaffCartCoupon;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartCouponService,
      ],
    });

    service = TestBed.inject(DaffTestingCartCouponService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartCouponFactory = TestBed.inject(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    mockCart.coupons = [mockCartCoupon];
    cartId = mockCart.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart coupons', () => {
    it('should return an array and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.list(cartId)).toBe('(a|)', { a: jasmine.any(Array) });
      });
    });
  });

  describe('apply | applying a coupon to the cart', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.apply(cartId, mockCartCoupon)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('remove | removing a coupon from the cart', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.remove(cartId, mockCartCoupon)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('removeAll | removing all coupons from the cart', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.removeAll(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });
});
