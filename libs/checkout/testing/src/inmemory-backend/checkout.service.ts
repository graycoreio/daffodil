import { Injectable } from '@angular/core';
import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';

import { DaffProductImageFactory } from '@daffodil/product/testing';

import { DaffOrderFactory } from '../order/factories/order.factory';
import { DaffOrderItemFactory } from '../order/factories/order-item.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCheckoutService implements InMemoryDbService {
  private order;

  constructor(
    private orderFactory: DaffOrderFactory,
    private orderItemFactory: DaffOrderItemFactory,
    private productImageFactory: DaffProductImageFactory
  ) {}

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      if (reqInfo.id === 'placeOrder') {
        //should make a service call to clear cart here.
        // this.driver.cartService.clear(reqInfo.req.body.orderId).subscribe();
        this.populateOrder();
      }

      return {
        body: this.order,
        status: STATUS.OK
      };
    });
  }

  createDb() {
    return {
      order: null
    };
  }

  private populateOrder() {
    this.order = this.orderFactory.create({ 
      items: this.orderItemFactory.createMany(2, {
        image: this.productImageFactory.create()
      }) 
    });
  }
}
