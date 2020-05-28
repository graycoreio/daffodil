import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartShippingMethodsService implements DaffInMemoryDataServiceInterface {
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listShippingMethods(reqInfo),
      status: STATUS.OK
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, Number(reqInfo.id))
  }

  private listShippingMethods(reqInfo): DaffCartShippingRate[] {
    return this.getCart(reqInfo).available_shipping_methods;
  }
}
