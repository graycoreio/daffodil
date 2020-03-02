import { TestBed } from '@angular/core/testing';

import { DaffCartCouponFactory } from './cart-coupon.factory';
import { DaffCartCoupon } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartCouponFactory', () => {
  let factory: DaffCartCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartCouponFactory]
    });

    factory = TestBed.get(DaffCartCouponFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCartCoupon;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartCoupon with all required fields defined', () => {
      expect(result.coupon_id).toBeDefined();
      expect(result.code).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });
});
