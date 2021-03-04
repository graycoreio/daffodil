import { Injectable } from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartBillingAddressService implements DaffInMemoryDataServiceInterface {
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getBillingAddress(reqInfo),
      status: STATUS.OK,
    }));
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateBillingAddress(reqInfo),
      status: STATUS.OK,
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private getBillingAddress(reqInfo): DaffCartAddress {
    return this.getCart(reqInfo).billing_address;
  }

  private updateBillingAddress(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const address = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.billing_address = address;

    return cart;
  }
}
