import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartCouponService implements DaffInMemoryDataServiceInterface {
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listCoupons(reqInfo),
      status: STATUS.OK
    }));
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.applyCoupon(reqInfo),
      status: STATUS.OK
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
        status: STATUS.OK
      };
    });
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '')
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, Number(reqInfo.id))
  }

  private listCoupons(reqInfo): DaffCartCoupon[] {
    return this.getCart(reqInfo).coupons;
  }

  private applyCoupon(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const coupon = reqInfo.utils.getJsonBody(reqInfo.req);

		cart.coupons.push(coupon);

    return cart;
  }

  private removeCoupon(reqInfo: RequestInfo, couponCode: DaffCartCoupon['code']): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.coupons = cart.coupons.filter(({code}) => code !== couponCode)

    return cart
  }

  private removeAllCoupons(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

		cart.coupons = [];

    return cart;
  }
}
