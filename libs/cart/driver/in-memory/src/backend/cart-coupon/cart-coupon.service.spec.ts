import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK } from '@daffodil/cart/driver/in-memory';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
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
  let extraAttributes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartCouponService,
        {
          provide: DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
          useValue: () => extraAttributes,
        },
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartCouponService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartCouponFactory = TestBed.inject(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    extraAttributes = {
      extraField: 'extraField',
    };
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
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
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
      result = service.post(reqInfoStub);
    });

    it('should return a cart with the added item', () => {
      expect(result.body.coupons).toContain(mockCartCoupon);
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
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
      expect(result.body.coupons.find(({ code }) => couponCode === code)).toBeFalsy();
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
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

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
    });
  });
});
