import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCartOrderResult
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartOrderService implements DaffInMemoryDataServiceInterface {
  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.placeOrder(reqInfo),
      status: STATUS.OK
    }));
  }

  private placeOrder(reqInfo): DaffCartOrderResult {
    return {
      id: '8235422034',
      cartId: '89fdsa8sadf',
      orderId: '8235422034',
    };
  }
}
