import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart } from '../../models/cart';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { placeOrder } from './queries/public_api';
import { transformError } from './errors/transform';
import { DaffCartOrderServiceInterface } from '../interfaces/cart-order-service.interface';
import { MagentoPlaceOrderResponse } from './models/responses/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartOrderService implements DaffCartOrderServiceInterface<DaffCart> {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
  ) {}

  placeOrder(cartId: DaffCart['id']) {
    return this.apollo.mutate<MagentoPlaceOrderResponse>({
      mutation: placeOrder,
      variables: {
        cartId
      }
    }).pipe(
      map(result => ({id: result.data.placeOrder.order.order_number})),
      catchError(err => throwError(transformError(err))),
    )
  }
}
