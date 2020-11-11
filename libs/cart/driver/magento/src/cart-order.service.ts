import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';

import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { placeOrder } from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import { MagentoPlaceOrderResponse } from './queries/responses/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartOrderService implements DaffCartOrderServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
  ) {}

  placeOrder(cartId: DaffCart['id'], payment?: any): Observable<DaffCartOrderResult> {
    return this.apollo.mutate<MagentoPlaceOrderResponse>({
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
