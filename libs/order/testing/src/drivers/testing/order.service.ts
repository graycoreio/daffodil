import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffOrderServiceInterface,
  DaffOrder
} from '@daffodil/order';

import { DaffOrderFactory } from '../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingOrderService implements DaffOrderServiceInterface {

  constructor(
    private orderFactory: DaffOrderFactory,
  ) {}

  get(orderId: DaffOrder['id']): Observable<DaffOrder> {
    return of(this.orderFactory.create({id: orderId}));
  }

  list(): Observable<DaffOrder[]> {
    return of(this.orderFactory.createMany(5));
  }
}
