import { Injectable } from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import { DaffInMemoryDataServiceInterface } from '@daffodil/driver/in-memory';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartShippingMethodsService implements DaffInMemoryDataServiceInterface {
  constructor(
    private shippingMethodFactory: DaffCartShippingRateFactory,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listShippingMethods(reqInfo),
      status: STATUS.OK,
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private listShippingMethods(reqInfo): DaffCartShippingRate[] {
    const cart  = this.getCart(reqInfo);

    if (cart.shipping_address) {
      if (cart.available_shipping_methods?.length === 0) {
        cart.available_shipping_methods = this.shippingMethodFactory.createMany(3);
      }
    } else {
      cart.available_shipping_methods = [];
    }

    return cart.available_shipping_methods;
  }
}
