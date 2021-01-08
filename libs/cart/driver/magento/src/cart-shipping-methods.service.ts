import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';

import { listShippingMethods } from './queries/public_api';
import { MagentoListShippingMethodsResponse } from './queries/responses/list-shipping-methods';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public shippingRateTransformer: DaffMagentoCartShippingRateTransformer
  ) {}

  list(cartId: string): Observable<DaffCartShippingRate[]> {
    return this.apollo.query<MagentoListShippingMethodsResponse>({
      query: listShippingMethods(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0].available_shipping_methods.map(item =>
        this.shippingRateTransformer.transform(item)
      ))
    )
  }
}
