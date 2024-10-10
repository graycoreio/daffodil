import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCollectionRequest } from '@daffodil/core';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';

import { DAFF_ORDER_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryOrderService extends DaffInMemoryDriverBase implements DaffOrderServiceInterface<DaffOrder> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_ORDER_IN_MEMORY_COLLECTION_NAME);
  }

  get(orderId: DaffOrder['id']): Observable<DaffOrder> {
    return this.http.get<DaffOrder>(`${this.url}/${orderId}`);
  }

  list(cartId?: DaffCart['id'], request?: DaffCollectionRequest): Observable<DaffOrderCollection> {
    return this.http.post<DaffOrderCollection>(`${this.url}/`, request);
  }
}
