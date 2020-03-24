import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartItemService } from './cart-item/cart-item.service';
import { DaffInMemoryCartDataService } from './cart-data.service';
import { DaffCart } from '@daffodil/cart';

/**
 * The root cart in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartRootService implements InMemoryDbService {
  /**
   * The collections that the root service manages.
   * Useful for a higher-level backend that delegates to this one based on collection name.
   */
  public static readonly COLLECTION_NAMES = [
    'cart',
    'cart-item',
  ]

  constructor(
    private cartService: DaffInMemoryBackendCartService,
		private cartItemsService: DaffInMemoryBackendCartItemService,
    private cartInMemoryDataService: DaffInMemoryCartDataService
  ) {}

  createDb(): {cart: DaffCart} {
    return {
      cart: this.cartInMemoryDataService.get()
    };
  }

  get(reqInfo: RequestInfo) {
    return this.delegateRequest(reqInfo)
  }

  post(reqInfo: RequestInfo) {
    return this.delegateRequest(reqInfo)
  }

  put(reqInfo: RequestInfo) {
    return this.delegateRequest(reqInfo)
  }

  delete(reqInfo: RequestInfo) {
    return this.delegateRequest(reqInfo)
  }

  private delegateRequest(reqInfo: RequestInfo) {

    switch (reqInfo.collectionName) {
      case 'cart':
        return this.cartService[reqInfo.method](reqInfo);

      case 'cart-item':
        return this.cartItemsService[reqInfo.method](reqInfo);

      default:
        return reqInfo.utils.createResponse$(() => ({
          body: {},
          status: STATUS.OK
        }));
    }
  }
}
