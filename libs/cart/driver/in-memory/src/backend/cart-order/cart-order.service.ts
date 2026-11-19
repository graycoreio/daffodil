import { Injectable } from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCartOrderResult } from '@daffodil/cart';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_ORDER_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 *
 * @deprecated Use {@link DaffCheckoutInMemoryBackendOrderService} instead. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartOrderService implements DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CART_IN_MEMORY_CART_ORDER_COLLECTION_NAME;

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.placeOrder(reqInfo),
      status: STATUS.OK,
    }));
  }

  private placeOrder(reqInfo): DaffCartOrderResult {
    return {
      cartId: '89fdsa8sadf',
      orderId: '8235422034',
    };
  }
}
