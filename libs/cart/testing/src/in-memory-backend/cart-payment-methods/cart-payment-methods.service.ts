import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartPaymentMethodsService implements DaffInMemoryDataServiceInterface {
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listPaymentMethods(reqInfo),
      status: STATUS.OK
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, Number(reqInfo.id))
  }

  private listPaymentMethods(reqInfo): DaffCartPaymentMethod[] {
    return this.getCart(reqInfo).available_payment_methods;
  }
}
