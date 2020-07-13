import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffOrder,
  DaffOrderServiceInterface,
  DaffOrderNotFoundError
} from '@daffodil/order';

import { getGuestOrders, MagentoGetGuestOrdersResponse } from './queries/public_api';
import { validateGetOrdersResponse } from './validators/public_api';
import { transformMagentoOrderError } from './errors/transform';
import { daffMagentoTransformOrder } from './transforms/responses/order';

/**
 * A service for making Magento GraphQL queries for orders.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffOrderMagentoService implements DaffOrderServiceInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  list(cartId?: DaffCart['id']): Observable<DaffOrder[]> {
    return this.apollo.query<MagentoGetGuestOrdersResponse>({
      query: getGuestOrders,
      variables: {
        cartId
      }
    }).pipe(
      map(validateGetOrdersResponse),
      map(result => result.data.graycoreGuestOrders.orders.map(daffMagentoTransformOrder)),
      catchError(err => throwError(transformMagentoOrderError(err)))
    );
  }

  get(orderId: DaffOrder['id'], cartId?: DaffCart['id']): Observable<DaffOrder> {
    return this.list(cartId).pipe(
      map(orders => {
        for (const order of orders) {
          if (String(order.id) === String(orderId)) {
            return order
          }
        }

        // order not found
        throw new DaffOrderNotFoundError(`Could not find an order with ID ${orderId}`);
      }),
    );
  }
}
