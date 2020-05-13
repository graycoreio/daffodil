import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartCoupon
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartCouponService } from './cart-coupon.service';

describe('Driver | In Memory | Cart | CartCouponService', () => {
  let service: DaffInMemoryCartCouponService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let mockCart: DaffCart;
  let mockCartCoupon: DaffCartCoupon;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartCouponService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffInMemoryCartCouponService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    mockCart.coupons = [mockCartCoupon];
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart coupons', () => {
    it('should send a get request', done => {
      service.list(cartId).subscribe(res => {
        expect(res).toEqual(mockCart.coupons);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${cartId}/`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCart.coupons);
    });
  });

  describe('apply | applying a coupon to the cart', () => {
    it('should send a post request', done => {
      service.apply(cartId, mockCartCoupon).subscribe(cart => {
        expect(cart).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${cartId}/`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockCartCoupon);

      req.flush(mockCart);
    });
  });

  describe('remove | removing a coupon from the cart', () => {
    it('should send a delete request', done => {
      service.remove(cartId, mockCartCoupon).subscribe(result => {
        expect(result).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${cartId}/${mockCartCoupon.code}`);

      expect(req.request.method).toBe('DELETE');

      mockCart.coupons = [];

      req.flush(mockCart);
    });
  });

  describe('removeAll | removing all coupons from the cart', () => {
    it('should send a delete request', done => {
      service.removeAll(cartId).subscribe(result => {
        expect(result).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${cartId}/`);

      expect(req.request.method).toBe('DELETE');

      mockCart.coupons = [];

      req.flush(mockCart);
    });
  });
});
