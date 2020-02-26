import { TestBed } from '@angular/core/testing';

import { DaffCartCouponFactory } from './cart-coupon.factory';
import { DaffCartCoupon } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartCouponFactory', () => {
  let cartItemFactory: DaffCartCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartCouponFactory]
    });

    cartItemFactory = TestBed.get(DaffCartCouponFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCartCoupon;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartCoupon with all required fields defined', () => {
      expect(result.coupon_id).toBeDefined();
      expect(result.code).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffCartCoupon[];

    it('should create as many cart items as desired', () => {
      const spy = spyOn(cartItemFactory, 'create');

      result = cartItemFactory.createMany(2);
      expect(result.length).toEqual(2);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(2);

      spy.calls.reset();

      result = cartItemFactory.createMany(3);
      expect(result.length).toEqual(3);
      expect(cartItemFactory.create).toHaveBeenCalledTimes(3);
    });
  })
});
