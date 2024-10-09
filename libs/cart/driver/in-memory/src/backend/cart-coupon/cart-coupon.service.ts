import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_COUPON_COLLECTION_NAME } from '../../collection-names';
import {
  DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
  DaffCartInMemoryExtraAttributesHook,
} from '../../injection-tokens/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartCouponService implements DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CART_IN_MEMORY_CART_COUPON_COLLECTION_NAME;

  constructor(
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listCoupons(reqInfo),
      status: STATUS.OK,
    }));
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.applyCoupon(reqInfo),
      status: STATUS.OK,
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      let body;
      const action = this.getAction(reqInfo);

      if (action) {
        body = this.removeCoupon(reqInfo, action);
      } else {
        body = this.removeAllCoupons(reqInfo);
      }

      return {
        body,
        status: STATUS.OK,
      };
    });
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private listCoupons(reqInfo): DaffCartCoupon[] {
    return this.getCart(reqInfo).coupons;
  }

  private applyCoupon(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const coupon = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.coupons.push(coupon);

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }

  private removeCoupon(reqInfo: RequestInfo, couponCode: DaffCartCoupon['code']): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.coupons = cart.coupons.filter(({ code }) => code !== couponCode);

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }

  private removeAllCoupons(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.coupons = [];

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }
}
