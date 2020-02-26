import { TestBed } from '@angular/core/testing';

import { MagentoCartCouponFactory } from './cart-coupon.factory';
import { MagentoCartCoupon } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartCouponFactory', () => {
  let cartItemFactory: MagentoCartCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartCouponFactory]
    });

    cartItemFactory = TestBed.get(MagentoCartCouponFactory);
  });

  it('should be created', () => {
    expect(cartItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartCoupon;

    beforeEach(() => {
      result = cartItemFactory.create();
    });

    it('should return a CartCoupon with all required fields defined', () => {
      expect(result.code).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MagentoCartCoupon[];

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
