import { Injectable } from '@angular/core';
import {
  throwError,
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  DaffCheckoutInvalidAPIResponseError,
  DaffCheckoutOrderServiceInterface,
} from '@daffodil/checkout/driver';
import {
  catchAndArrayifyErrors,
  daffIsError,
} from '@daffodil/core';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { MagentoCheckoutPlaceOrderErrorMap } from './graphql/error/map';
import { magentoCheckoutPlaceOrderQuery } from './graphql/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoCheckoutOrderService implements DaffCheckoutOrderServiceInterface {
  constructor(
    private mutationQueue: DaffQueuedApollo,
  ) {}

  placeOrder(cartId: DaffCart['id']): Observable<DaffCheckoutOrderResult> {
    return this.mutationQueue.mutate({
      mutation: magentoCheckoutPlaceOrderQuery,
      variables: {
        cartId,
      },
      fetchPolicy: 'network-only',
    }).pipe(
      switchMap(result => result.data.placeOrder.errors.length > 0
        ? throwError(() => result.data.placeOrder.errors.map((err) => new MagentoCheckoutPlaceOrderErrorMap[err.code](err.message)))
        : of(({
          orderId: result.data.placeOrder.orderV2.number,
          cartId,
        })),
      ),
      catchAndArrayifyErrors((errors) => throwError(() => errors.map((err) => daffIsError(err) ? err : new DaffCheckoutInvalidAPIResponseError(err.message)))),
    );
  }
}
