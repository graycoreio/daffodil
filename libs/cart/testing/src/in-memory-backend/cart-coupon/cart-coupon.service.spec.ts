import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartCoupon,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartCouponService } from './cart-coupon.service';

describe('DaffInMemoryBackendCartCouponService', () => {
  let service: DaffInMemoryBackendCartCouponService;
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let mockCart: DaffCart;
  let mockCartCoupon: DaffCartCoupon;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartCouponService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartCouponService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    mockCart.coupons = [mockCartCoupon];
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-coupon/';
    cartUrl = `/${baseUrl}${cartId}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a list coupons request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart coupons', () => {
      expect(result.body).toEqual([mockCartCoupon]);
    });
  });

  describe('processing an apply coupon request', () => {
    let result;

    beforeEach(() => {
      mockCart.coupons = [];
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = mockCartCoupon;
    });

    it('should return a cart with the added item', () => {
			result = service.post(reqInfoStub);
      expect(result.body.coupons).toContain(mockCartCoupon);
		});
  });

  describe('processing a remove coupon request', () => {
    let result;
    let couponCode;

    beforeEach(() => {
      couponCode = mockCartCoupon.code;
      reqInfoStub.url = `${cartUrl}${couponCode}`;

      result = service.delete(reqInfoStub);
    });

    it('should remove the coupon from the cart', () => {
      expect(result.body.coupons.find(({code}) => couponCode === code)).toBeFalsy();
    });
  });

  describe('processing a remove all coupons request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = `${cartUrl}`;

      result = service.delete(reqInfoStub);
    });

    it('should return a cart with no coupons', () => {
      expect(result.body.coupons).toEqual([]);
    });
  });
});
