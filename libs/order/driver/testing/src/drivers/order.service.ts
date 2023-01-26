import { Injectable } from '@angular/core';
import {
  map,
  Observable,
  of,
} from 'rxjs';

import {
  daffIdentifiableArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
import { DaffOrderFactory } from '@daffodil/order/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingOrderService implements DaffOrderServiceInterface {

  constructor(
    private orderFactory: DaffOrderFactory,
  ) {}

  get(orderId: DaffOrder['id']): Observable<DaffOrder> {
    return of(this.orderFactory.create({ id: orderId }));
  }

  list(): Observable<DaffOrderCollection> {
    return of(this.orderFactory.createMany(5)).pipe(
      map(orders => ({
        data: daffIdentifiableArrayToDict(orders),
        metadata: {
          ids: orders.map(({ id }) => id),
          currentPage: 1,
          totalPages: 1,
          pageSize: orders.length,
          sortOptions: {
            default: null,
            options: [],
          },
          appliedSortDirection: DaffSortDirectionEnum.Ascending,
          appliedSortOption: null,
          count: orders.length,
          filters: {},
        },
      })),
    );
  }
}
