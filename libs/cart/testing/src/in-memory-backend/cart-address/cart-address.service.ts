import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartAddressService implements DaffInMemoryDataServiceInterface {
  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateAddress(reqInfo),
      status: STATUS.OK
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, Number(reqInfo.id))
  }

  private updateAddress(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const address = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.billing_address = address;
    cart.shipping_address = address;

    return cart;
  }
}
