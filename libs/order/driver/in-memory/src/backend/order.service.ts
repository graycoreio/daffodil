import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import {
  DaffCollectionRequest,
  daffIdentifiableArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { DaffInMemoryDataServiceInterface } from '@daffodil/driver/in-memory';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

const DEFAULT_PAGE_SIZE = 20;

/**
 * An in-memory service that stubs out the backend services for getting orders.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendOrderService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
  orders: DaffOrder[];

  constructor(
    private orderFactory: DaffOrderFactory,
  ) {
    this.orders = this.orderFactory.createMany(50);
  }

  /**
   * Creates a fake database of orders for the order inmemory backend service.
   *
   * @docs-private
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
      orders: this.orders,
    };
  }

  /**
   * Responds to GET requests.
   */
  get(reqInfo: RequestInfo): any {
    return this.getOrder(reqInfo);
  }

  post(reqInfo: RequestInfo): any {
    return this.listOrders(reqInfo);
  }

  private getOrder(reqInfo: RequestInfo) {
    const order = reqInfo.collection.find((o) => o.id === reqInfo.id);

    return reqInfo.utils.createResponse$(() =>
      order
        ? {
          body: order,
          status: STATUS.OK,
        }
        : {
          status: STATUS.NOT_FOUND,
        },
    );
  }

  private listOrders(reqInfo: RequestInfo) {
    const request: DaffCollectionRequest | null = reqInfo.utils.getJsonBody(reqInfo.req);
    const pageSize = request?.pageSize || DEFAULT_PAGE_SIZE;
    const currentPage = request?.currentPage || 1;
    const orders: DaffOrder[] = reqInfo.collection;
    const totalPages = Math.ceil(orders.length / pageSize);

    return reqInfo.utils.createResponse$(() => {
      if (currentPage > totalPages) {
        return {
          status: STATUS.BAD_REQUEST,
        };
      }
      const startingIndex = pageSize * (currentPage - 1);
      const filteredOrders = orders.slice(startingIndex, startingIndex + pageSize);

      return {
        status: STATUS.OK,
        body: {
          data: daffIdentifiableArrayToDict(filteredOrders),
          metadata: {
            ids: filteredOrders.map(({ id }) => id),
            currentPage,
            totalPages,
            pageSize,
            sortOptions: {
              default: null,
              options: [],
            },
            appliedSortDirection: DaffSortDirectionEnum.Ascending,
            appliedSortOption: null,
            count: orders.length,
            filters: {},
          },
        },
      };
    });
  }
}
