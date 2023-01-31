import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCollectionRequest } from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryOrderService implements DaffOrderServiceInterface<DaffOrder> {
  url = '/api/orders';

  constructor(private http: HttpClient) {}

  get(orderId: DaffOrder['id']): Observable<DaffOrder> {
    return this.http.get<DaffOrder>(`${this.url}/${orderId}`);
  }

  list(cartId?: DaffCart['id'], request?: DaffCollectionRequest): Observable<DaffOrderCollection> {
    return this.http.post<DaffOrderCollection>(`${this.url}/`, request);
  }
}
