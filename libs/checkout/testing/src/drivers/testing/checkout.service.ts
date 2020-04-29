import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffOrder, DaffCheckoutServiceInterface } from '@daffodil/checkout';

import { DaffOrderFactory } from '../../order/factories/order.factory';
import { DaffOrderItemFactory } from '../../order/factories/order-item.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCheckoutService implements DaffCheckoutServiceInterface {
  constructor(
    private orderFactory: DaffOrderFactory,
    private orderItemFactory: DaffOrderItemFactory
  ) {}

  placeOrder(cartId: string): Observable<DaffOrder> {
    return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
  }
}
