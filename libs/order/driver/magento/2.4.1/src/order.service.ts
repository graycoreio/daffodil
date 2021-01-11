import {Apollo} from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Inject, Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffOrder,
} from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderNotFoundError
} from '@daffodil/order/driver';

import { getGuestOrders, MagentoGetGuestOrdersResponse } from './queries/public_api';
import { validateGetOrdersResponse } from './validators/public_api';
import { transformMagentoOrderError } from './errors/transform';
import { daffMagentoTransformOrder } from './transforms/responses/order';
import { DaffMagentoExtraOrderFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for orders.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffOrderMagentoService implements DaffOrderServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraOrderFragments) public extraOrderFragments: DocumentNode[],
  ) {}

  list(cartId?: DaffCart['id']): Observable<DaffOrder[]> {
    return this.apollo.query<MagentoGetGuestOrdersResponse>({
      query: getGuestOrders(this.extraOrderFragments),
      variables: {
        cartId
      }
    }).pipe(
      map(validateGetOrdersResponse),
      map(result => result.data.graycoreGuestOrders.items.map(daffMagentoTransformOrder)),
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
