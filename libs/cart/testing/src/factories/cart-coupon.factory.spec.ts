import { TestBed } from '@angular/core/testing';

import { DaffCartCoupon } from '@daffodil/cart';

import { DaffCartCouponFactory } from './cart-coupon.factory';

describe('Cart | Testing | Factories | CartCouponFactory', () => {
  let factory: DaffCartCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartCouponFactory],
    });

    factory = TestBed.inject(DaffCartCouponFactory);
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
      expect(result.id).toBeDefined();
      expect(result.code).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });
});
