import { TestBed } from '@angular/core/testing';

import { DaffOrderCoupon } from '@daffodil/order';

import { DaffOrderCouponFactory } from './order-coupon.factory';

describe('Order | Testing | Factories | DaffOrderCouponFactory', () => {
  let orderFactory: DaffOrderCouponFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderCouponFactory]
    });

    orderFactory = TestBed.get(DaffOrderCouponFactory);
  });

  it('should be created', () => {
    expect(orderFactory).toBeTruthy();
  });

  describe('create', () => {
    let result : DaffOrderCoupon;

    beforeEach(() => {
      result = orderFactory.create();
    });

    it('should return an OrderCoupon', () => {
      expect(result).toBeDefined();
    });

    describe('Order Coupon object', () => {
      it('should have a code', () => {
        expect(result.code).toBeDefined();
      });
    });
  });
});
