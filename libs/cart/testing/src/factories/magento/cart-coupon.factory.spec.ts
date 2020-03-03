import { TestBed } from '@angular/core/testing';

import { MagentoCartCouponFactory } from './cart-coupon.factory';
import { MagentoCartCoupon } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartCouponFactory', () => {
  let factory: MagentoCartCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartCouponFactory]
    });

    factory = TestBed.get(MagentoCartCouponFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartCoupon;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartCoupon with all required fields defined', () => {
      expect(result.code).toBeDefined();
    });
  });
});
