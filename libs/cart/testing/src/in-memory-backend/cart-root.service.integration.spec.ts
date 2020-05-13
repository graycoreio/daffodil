import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItem,
  DaffCartCoupon
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';

describe('DaffInMemoryBackendCartRootService | Integration', () => {
  let httpClient: HttpClient;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let mockCartCoupon: DaffCartCoupon;
  let cartId: DaffCart['id'];
  let itemId: DaffCartItem['item_id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendCartRootService, {delay: 0}),
      ],
    });

    httpClient = TestBed.get(HttpClient);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    cartId = mockCart.id;
    itemId = mockCartItem.item_id;
    mockCart.items.push(mockCartItem);
    mockCart.coupons.push(mockCartCoupon);

    httpClient.post<any>('commands/resetDb', {carts: [mockCart]}).subscribe(() => done());
  });

  // cart
  describe('processing a clear request', () => {
    it('should remove the items in the cart', done => {
      httpClient.post<any>(`/api/cart/${cartId}/clear`, {}).subscribe(result => {
        expect(result.items.length).toEqual(0);
        done();
      });
    });
  });

  describe('processing a get request', () => {
    it('should return the correct cart', done => {
      httpClient.get<any>(`/api/cart/${cartId}`).subscribe(result => {
        expect(result.id).toEqual(cartId);
        done();
      });
    });
  });

  describe('processing a create request', () => {
    it('should return a partial with id', done => {
      httpClient.post<any>('/api/cart', {}).subscribe(result => {
        expect(result.id).toBeDefined();
        done();
      });
    });
  });

  describe('processing an addToCart request', () => {
    it('should return an empty object', done => {
      httpClient.post<any>('/api/cart/addToCart', {
        cartId,
        productId: 'addToCartTest'
      }).subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  // cart-item
  describe('processing a list items request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-items/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the items', () => {
      expect(result).toEqual(mockCart.items);
    });
  });

  describe('processing a get item request', () => {
    let productId;
    let qty;
    let result;

    beforeEach(done => {
      productId = 'productId';
      qty = 4;
      httpClient.get<any>(`/api/cart-items/${cartId}/${itemId}`).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the item', () => {
      expect(result).toEqual(mockCartItem);
    });
  });

  describe('processing an update item request', () => {
    let qty;
    let result;

    beforeEach(done => {
      qty = mockCartItem.qty + 1;
      httpClient.put<any>(`/api/cart-items/${cartId}/${itemId}`, {qty}).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart with the updated item', () => {
      expect(result.items[0].qty).toEqual(qty);
    });
  });

  describe('processing an add item request', () => {
    let productId;
    let initialQty;
    let result;

    beforeEach(done => {
      productId = mockCartItem.product_id;
      initialQty = mockCartItem.qty;

      httpClient.post<any>(`/api/cart-items/${cartId}/`, {
        productId,
        qty: 2
      }).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart with the added item', () => {
      expect(result.items[0].product_id).toEqual(productId);
      expect(result.items[0].qty).toEqual(initialQty + 2);
    });
  });

  describe('processing a delete item request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`/api/cart-items/${cartId}/${itemId}`).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart without the item', () => {
      expect(result.items).not.toContain(mockCartItem);
    });
  });

  // cart order
  describe('processing a place order request', () => {
    let result;

    beforeEach(done => {
      httpClient.post<any>(`/api/cart-order/${cartId}/`, {}).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return a cart order result with a defined ID', () => {
      expect(result.id).toBeDefined();
    });
  });

  // cart coupon
  describe('processing a list coupons request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-coupon/${cartId}/`).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the cart coupons', () => {
      expect(result).toEqual([mockCartCoupon]);
    });
  });

  describe('processing an apply coupon request', () => {
    let result;

    beforeEach(done => {
      mockCart.coupons = [];
      httpClient.post<any>('commands/resetDb', {carts: [mockCart]}).subscribe(() => done());

      httpClient.post<any>(`/api/cart-coupon/${cartId}/`, mockCartCoupon).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return a cart with the added item', () => {
      expect(result.coupons).toContain(mockCartCoupon);
		});
  });

  describe('processing a remove coupon request', () => {
    let result;
    let couponCode;

    beforeEach(done => {
      couponCode = mockCartCoupon.code;

      httpClient.delete<any>(`/api/cart-coupon/${cartId}/${couponCode}`, {}).subscribe(res => {
        result = res
        done();
      });
    });

    it('should remove the coupon from the cart', () => {
      expect(result.coupons.find(({code}) => couponCode === code)).toBeFalsy();
    });
  });

  describe('processing a remove all coupons request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`/api/cart-coupon/${cartId}/`, {}).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return a cart with no coupons', () => {
      expect(result.coupons).toEqual([]);
    });
  });
});
