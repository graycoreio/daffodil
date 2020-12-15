import { Inject, Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCart, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';

import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { placeOrder } from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import { MagentoPlaceOrderResponse } from './queries/responses/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
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
        cartId
      }
    }).pipe(
      map(result => ({
        id: result.data.placeOrder.order.order_number,
        orderId: result.data.placeOrder.order.order_number,
        cartId
      })),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }
}
