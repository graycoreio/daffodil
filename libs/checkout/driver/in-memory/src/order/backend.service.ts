import { Injectable } from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME } from '../collection-names.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutInMemoryBackendOrderService implements DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME;

  post(reqInfo: RequestInfo) {
    return this.placeOrder(reqInfo);
  }

  private placeOrder(reqInfo: RequestInfo) {
    const { cartId } = reqInfo.utils.getJsonBody(reqInfo.req);
    return reqInfo.utils.createResponse$(() => cartId
      ? {
        body: {
          cartId,
          orderId: '8235422034',
        },
        status: STATUS.OK,
      }
      : {
        status: STATUS.NOT_FOUND,
      },
    );
  }
}
