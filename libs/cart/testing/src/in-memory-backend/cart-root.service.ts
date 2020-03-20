import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';

import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartItemsService } from './cart-items/cart-items.service';

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
    'cart-items',
  ]

  public carts: DaffCart[] = [];

  constructor(
    private cartService: DaffInMemoryBackendCartService,
    private cartItemsService: DaffInMemoryBackendCartItemsService,
  ) {}

  createDb(reqInfo: RequestInfo) {
    if (reqInfo) {
      const seedData = reqInfo.utils.getJsonBody(reqInfo.req).carts;
      if (seedData) {
        this.carts = seedData;
      }
    }

    return {
      cart: this.carts
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
    reqInfo.collection = this.carts;

    switch (reqInfo.collectionName) {
      case 'cart':
        return this.cartService[reqInfo.method](reqInfo);

      case 'cart-items':
        return this.cartItemsService[reqInfo.method](reqInfo);

      default:
        return reqInfo.utils.createResponse$(() => ({
          body: {},
          status: STATUS.OK
        }));
    }
  }
}
