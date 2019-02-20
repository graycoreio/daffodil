import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Order } from '@daffodil/core';

import { DaffOrderFactory, DaffOrderItemFactory } from '@daffodil/core/testing';
import { DaffCheckoutServiceInterface } from '@daffodil/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCheckoutService implements DaffCheckoutServiceInterface {
  constructor(
    private orderFactory: DaffOrderFactory,
    private orderItemFactory: DaffOrderItemFactory
  ) {}

  placeOrder(cartId: string): Observable<Order> {
    return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
  }
}
