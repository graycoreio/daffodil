import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartShippingInformation,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartShippingInformationService implements DaffInMemoryDataServiceInterface {
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getShippingInformation(reqInfo),
      status: STATUS.OK
    }));
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateShippingInformation(reqInfo),
      status: STATUS.OK
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.removeShippingInformation(reqInfo),
      status: STATUS.OK
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, Number(reqInfo.id))
  }

  private getShippingInformation(reqInfo): DaffCartShippingInformation {
    return this.getCart(reqInfo).shipping_information;
  }

  private updateShippingInformation(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);

		cart.shipping_information = shippingInformation;

    return cart;
  }

  private removeShippingInformation(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.shipping_information = null

    return cart
  }
}
