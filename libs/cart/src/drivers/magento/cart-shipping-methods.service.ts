import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingMethodsServiceInterface } from '../interfaces/cart-shipping-methods-service.interface';
import { listShippingMethods } from './queries/public_api';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { MagentoListShippingMethodsResponse } from './models/responses/list-shipping-methods';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
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
