import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingMethodsServiceInterface } from '../interfaces/cart-shipping-methods-service.interface';
import { listShippingMethods } from './queries/public_api';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { MagentoListShippingMethodsResponse } from './models/responses/list-shipping-methods';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';

/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
  constructor(
    private apollo: Apollo,
    public shippingRateTransformer: DaffMagentoCartShippingRateTransformer
  ) {}

  list(cartId: string): Observable<DaffCartShippingRate[]> {
    return this.apollo.query<MagentoListShippingMethodsResponse>({
      query: listShippingMethods,
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0].available_shipping_methods.map(item =>
        this.shippingRateTransformer.transform(item)
      ))
    )
  }
}
