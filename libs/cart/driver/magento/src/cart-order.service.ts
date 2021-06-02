import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  throwError,
  Observable,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformCartMagentoError } from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { placeOrder } from './queries/public_api';
import { MagentoPlaceOrderResponse } from './queries/responses/public_api';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartOrderService implements DaffCartOrderServiceInterface {
  constructor(
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    public cartTransformer: DaffMagentoCartTransformer,
  ) {}

  placeOrder(cartId: DaffCart['id'], payment?: any): Observable<DaffCartOrderResult> {
    return this.mutationQueue.mutate<MagentoPlaceOrderResponse>({
      mutation: placeOrder,
      variables: {
        cartId,
      },
    }).pipe(
      map(result => ({
        id: result.data.placeOrder.order.order_number,
        orderId: result.data.placeOrder.order.order_number,
        cartId,
      })),
      catchError(err => throwError(transformCartMagentoError(err))),
    );
  }
}
