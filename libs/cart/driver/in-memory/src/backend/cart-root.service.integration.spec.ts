import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItem,
  DaffCartCoupon,
  DaffCartAddress,
  DaffCartPaymentMethod,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartCouponFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';

describe('DaffInMemoryBackendCartRootService | Integration', () => {
  let httpClient: HttpClient;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let cartCouponFactory: DaffCartCouponFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartShippingMethodFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let mockCartCoupon: DaffCartCoupon;
  let mockShippingAddress: DaffCartAddress;
  let mockBillingAddress: DaffCartAddress;
  let mockPayment: DaffCartPaymentMethod;
  let mockShippingMethod: DaffCartShippingRate;
  let mockShippingInformation: DaffCartShippingRate;
  let cartId: DaffCart['id'];
  let itemId: DaffCartItem['id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        // this must be loaded after provideHttpClient!
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendCartRootService, { delay: 0 })),
      ],
    });

    httpClient = TestBed.inject(HttpClient);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    cartCouponFactory = TestBed.inject(DaffCartCouponFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);
    cartShippingMethodFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartCoupon = cartCouponFactory.create();
    mockShippingAddress = cartAddressFactory.create();
    mockBillingAddress = cartAddressFactory.create();
    mockPayment = cartPaymentFactory.create();
    mockShippingMethod = cartShippingMethodFactory.create();
    mockShippingInformation = cartShippingMethodFactory.create();
    cartId = mockCart.id;
    itemId = mockCartItem.id;
    mockCart.items.push(mockCartItem);
    mockCart.coupons.push(mockCartCoupon);
    mockCart.shipping_address = mockShippingAddress;
    mockCart.billing_address = mockBillingAddress;
    mockCart.available_payment_methods = [mockPayment];
    mockCart.available_shipping_methods = [mockShippingMethod];
    mockCart.payment = mockPayment;
    mockCart.shipping_information = mockShippingInformation;

    httpClient.post<any>('commands/resetDb', { carts: [mockCart]}).subscribe(() => done());
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
        productId: 'addToCartTest',
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
        result = res;
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
      httpClient.put<any>(`/api/cart-items/${cartId}/${itemId}`, { qty }).subscribe(res => {
        result = res;
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
        qty: 2,
      }).subscribe(res => {
        result = res;
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
        result = res;
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
        result = res;
        done();
      });
    });

    it('should return a cart order result with a defined ID', () => {
      expect(result.orderId).toBeDefined();
      expect(result.cartId).toBeDefined();
    });
  });

  // cart coupon
  describe('processing a list coupons request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-coupon/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart coupons', () => {
      expect(result).toEqual([mockCartCoupon]);
    });
  });

  describe('processing an apply coupon request', () => {
    let result;
    let newCoupon: DaffCartCoupon;

    beforeEach(done => {
      newCoupon = cartCouponFactory.create();

      httpClient.post<any>(`/api/cart-coupon/${cartId}/`, newCoupon).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the added coupon', () => {
      expect(result.coupons).toContain(newCoupon);
    });
  });

  describe('processing a remove coupon request', () => {
    let result;
    let couponCode;

    beforeEach(done => {
      couponCode = mockCartCoupon.code;

      httpClient.delete<any>(`/api/cart-coupon/${cartId}/${couponCode}`, {}).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should remove the coupon from the cart', () => {
      expect(result.coupons).not.toContain(mockCartCoupon);
    });
  });

  describe('processing a remove all coupons request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`/api/cart-coupon/${cartId}/`, {}).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with no coupons', () => {
      expect(result.coupons).toEqual([]);
    });
  });

  // cart address
  describe('processing an update address request', () => {
    let result;
    let updatedStreet;

    beforeEach(done => {
      updatedStreet = `${mockShippingAddress.street} updated`;
      mockShippingAddress.street = updatedStreet;

      httpClient.put<any>(`/api/cart-address/${cartId}/`, mockShippingAddress).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated addresses', () => {
      expect(result.shipping_address.street).toEqual(updatedStreet);
      expect(result.billing_address.street).toEqual(updatedStreet);
    });
  });

  // cart shipping address
  describe('processing a get shipping address request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-shipping-address/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart shipping address', () => {
      expect(result).toEqual(mockShippingAddress);
    });
  });

  describe('processing an update shipping address request', () => {
    let result;
    let updatedStreet;

    beforeEach(done => {
      updatedStreet = `${mockShippingAddress.street} updated`;
      mockShippingAddress.street = updatedStreet;

      httpClient.put<any>(`/api/cart-shipping-address/${cartId}/`, mockShippingAddress).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated shipping address', () => {
      expect(result.shipping_address.street).toEqual(updatedStreet);
    });
  });

  // cart billing address
  describe('processing a get billing address request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-billing-address/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart billing address', () => {
      expect(result).toEqual(mockBillingAddress);
    });
  });

  describe('processing an update billing address request', () => {
    let result;
    let updatedStreet;

    beforeEach(done => {
      updatedStreet = `${mockBillingAddress.street} updated`;
      mockBillingAddress.street = updatedStreet;

      httpClient.put<any>(`/api/cart-billing-address/${cartId}/`, mockBillingAddress).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated billing address', () => {
      expect(result.billing_address.street).toEqual(updatedStreet);
    });
  });

  // cart payment methods
  describe('processing a get available payment methods request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-payment-methods/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart\'s available payment methods', () => {
      expect(result).toEqual(mockCart.available_payment_methods);
    });
  });

  // cart shipping methods
  describe('processing a get available shipping methods request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-shipping-methods/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart\'s available shipping methods', () => {
      expect(result).toEqual(mockCart.available_shipping_methods);
    });
  });

  // cart payment
  describe('processing a get payment request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-payment/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart payment', () => {
      expect(result).toEqual(mockPayment);
    });
  });

  describe('processing an update payment request', () => {
    let result;
    let newPayment: DaffCartPaymentMethod;

    beforeEach(done => {
      newPayment = cartPaymentFactory.create();

      httpClient.put<any>(`/api/cart-payment/${cartId}/`, { payment: newPayment }).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated payment', () => {
      expect(result.payment).toEqual(newPayment);
    });
  });

  describe('processing an update payment with billing request', () => {
    let result;
    let newPayment: DaffCartPaymentMethod;
    let newAddress: DaffCartAddress;

    beforeEach(done => {
      newPayment = cartPaymentFactory.create();
      newAddress = cartAddressFactory.create();

      httpClient.put<any>(`/api/cart-payment/${cartId}/`, {
        payment: newPayment,
        address: newAddress,
      }).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated billing address', () => {
      expect(result.billing_address).toEqual(newAddress);
    });

    it('should return a cart with the updated payment', () => {
      expect(result.payment).toEqual(newPayment);
    });
  });

  describe('processing a remove payment request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`/api/cart-payment/${cartId}/`, {}).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with no payment', () => {
      expect(result.payment).toBeFalsy();
    });
  });

  // cart shipping information
  describe('processing a get shipping information request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`/api/cart-shipping-information/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the cart shipping information', () => {
      expect(result).toEqual(mockShippingInformation);
    });
  });

  describe('processing an update shipping information request', () => {
    let result;
    let newShippingInformation: DaffCartShippingRate;

    beforeEach(done => {
      newShippingInformation = cartShippingMethodFactory.create();

      httpClient.put<any>(`/api/cart-shipping-information/${cartId}/`, newShippingInformation).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with the updated shipping information', () => {
      expect(result.shipping_information).toEqual(newShippingInformation);
    });
  });

  describe('processing a remove shipping information request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`/api/cart-shipping-information/${cartId}/`, {}).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return a cart with no shipping information', () => {
      expect(result.shipping_information).toBeFalsy();
    });
  });
});
