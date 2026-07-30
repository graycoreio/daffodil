import {
  Inject,
  Injectable,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  daffIdentifiableArrayToDict,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderNotFoundError,
} from '@daffodil/order/driver';

import { transformMagentoOrderError } from './errors/transform';
import { DaffMagentoExtraOrderFragments } from './injection-tokens/public_api';
import {
  getGuestOrders,
  MagentoGetGuestOrdersResponse,
} from './queries/public_api';
import { daffMagentoTransformOrder } from './transforms/responses/order';
import { validateGetOrdersResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for orders.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderMagentoService implements DaffOrderServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraOrderFragments) public extraOrderFragments: DocumentNode[],
  ) {}

  list(cartId?: DaffCart['id']): Observable<DaffOrderCollection> {
    return this.apollo.query<MagentoGetGuestOrdersResponse>({
      query: getGuestOrders(this.extraOrderFragments),
      variables: {
        cartId,
      },
    }).pipe(
      map(validateGetOrdersResponse),
      map(result => result.data.graycoreGuestOrders.orders.map(daffMagentoTransformOrder)),
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
      catchError(err => throwError(() => transformMagentoOrderError(err))),
    );
  }

  get(orderId: DaffOrder['id'], cartId?: DaffCart['id']): Observable<DaffOrder> {
    return this.list(cartId).pipe(
      map(orders => {
        const order = orders.data[orderId];

        if (!order) {
          throw new DaffOrderNotFoundError(`Could not find an order with ID ${orderId}`);
        }

        return order;
      }),
    );
  }
}
