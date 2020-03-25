import { Injectable } from '@angular/core';
import { STATUS, InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

import { DaffCartFactory } from '../../factories/cart.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartService implements DaffInMemoryDataServiceInterface {
  constructor(
    private cartFactory: DaffCartFactory,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getCart(reqInfo),
      status: STATUS.OK
    }))
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      let body;
			const action = this.getAction(reqInfo);

      if (reqInfo.id === 'addToCart') {
        // deprecated
        body = {};
      } else if (action === 'clear') {
        body = this.clear(reqInfo);
      } else {
        body = this.create(reqInfo);
      }

      return {
        body,
        status: STATUS.OK
      };
    });
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '')
  }

  private clear(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.items = [];

    return cart
  }

  private create(reqInfo: RequestInfo): Partial<{id: DaffCart['id']}> {
    const cart = this.cartFactory.create();

    reqInfo.collection.push(cart);

    return {
      id: cart.id
    };
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id)
  }
}
