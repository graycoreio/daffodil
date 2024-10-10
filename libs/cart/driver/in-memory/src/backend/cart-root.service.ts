import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
} from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffInMemoryBackendDelegate,
  DaffInMemoryMultiRouteableBackend,
} from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartAddressService } from './cart-address/cart-address.service';
import { DaffInMemoryBackendCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryBackendCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffInMemoryBackendCartItemsService } from './cart-items/cart-items.service';
import { DaffInMemoryBackendCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryBackendCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryBackendCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryBackendCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryBackendCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffInMemoryBackendCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';

/**
 * The collections that the root service manages.
 * Useful for a higher-level backend that delegates to this one based on collection name.
 */
const COLLECTION_NAMES = [
  'cart',
  'cart-items',
  'cart-order',
  'cart-coupon',
  'cart-address',
  'cart-shipping-address',
  'cart-billing-address',
  'cart-payment-methods',
  'cart-shipping-methods',
  'cart-payment',
  'cart-shipping-information',
];

/**
 * The root cart in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartRootService extends DaffInMemoryBackendDelegate implements InMemoryDbService, DaffInMemoryMultiRouteableBackend {
  /**
   * The collection of carts in the backend.
   */
  public carts: DaffCart[] = [];

  constructor(
    cartService: DaffInMemoryBackendCartService,
    cartItemsService: DaffInMemoryBackendCartItemsService,
    cartOrderService: DaffInMemoryBackendCartOrderService,
    cartCouponService: DaffInMemoryBackendCartCouponService,
    cartAddressService: DaffInMemoryBackendCartAddressService,
    cartShippingAddressService: DaffInMemoryBackendCartShippingAddressService,
    cartBillingAddressService: DaffInMemoryBackendCartBillingAddressService,
    cartPaymentMethodsService: DaffInMemoryBackendCartPaymentMethodsService,
    cartShippingMethodsService: DaffInMemoryBackendCartShippingMethodsService,
    cartPaymentService: DaffInMemoryBackendCartPaymentService,
    cartShippingInformationService: DaffInMemoryBackendCartShippingInformationService,
  ) {
    super([
      cartService,
      cartItemsService,
      cartOrderService,
      cartCouponService,
      cartAddressService,
      cartShippingAddressService,
      cartBillingAddressService,
      cartPaymentMethodsService,
      cartShippingMethodsService,
      cartPaymentService,
      cartShippingInformationService,
    ]);
  }

  protected override delegateRequest(reqInfo: RequestInfo, method): Observable<any> {
    return super.delegateRequest({
      ...reqInfo,
      collection: this.carts,
    }, method);
  }

  canHandle(collectionName: string): boolean {
    return COLLECTION_NAMES.includes(collectionName);
  }

  createDb(reqInfo: RequestInfo) {
    if (reqInfo) {
      const seedData = reqInfo.utils.getJsonBody(reqInfo.req).carts;
      if (seedData) {
        this.carts = seedData;
      }
    }

    return of({
      cart: this.carts,
    });
  }
}
