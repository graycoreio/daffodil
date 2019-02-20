import { Injectable, Inject } from '@angular/core';

import { DaffOrderFactory, DaffOrderItemFactory, DaffProductImageFactory} from '@daffodil/core/testing';

import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';
import { DaffDriverInterface, DaffDriver } from '@daffodil/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCheckoutTestingService implements InMemoryDbService {
  private order;

  constructor(
    private orderFactory: DaffOrderFactory,
    private orderItemFactory: DaffOrderItemFactory,
    private productImageFactory: DaffProductImageFactory,
    @Inject(DaffDriver) public driver: DaffDriverInterface
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
