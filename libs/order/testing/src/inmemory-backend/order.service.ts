import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffOrder } from '@daffodil/order';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

import {
  DaffOrderFactory,
} from '../factories/public_api';

/**
 * An in-memory service that stubs out the backend services for getting orders.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendOrderService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
  orders: DaffOrder[];

  constructor(
    private orderFactory: DaffOrderFactory,
  ) {
    this.orders = this.orderFactory.createMany(5);
  }

  /**
   * Creates a fake database of orders for the order inmemory backend service.
   *
   * @returns A fake database of an array of orders
   */
  createDb(reqInfo: RequestInfo): any {
    if (reqInfo) {
      const seedData = reqInfo.utils.getJsonBody(reqInfo.req).orders;
      if (seedData) {
        this.orders = seedData;
      }
    }

    return {
      orders: this.orders
    };
  }

  /**
   * Responds to GET requests.
   */
  get(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => ({
      body: reqInfo.id ? this.getOrder(reqInfo) : this.listOrders(reqInfo),
      status: STATUS.OK
    }))
  }

  private getOrder(reqInfo: RequestInfo) {
    return reqInfo.collection.find(order => order.id === reqInfo.id)
  }

  private listOrders(reqInfo: RequestInfo) {
    return reqInfo.collection
  }
}
