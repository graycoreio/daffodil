import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { DaffCartShippingInformationServiceInterface } from '../interfaces/cart-shipping-information-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import {
  getSelectedShippingMethod,
  setSelectedShippingMethod,
  listShippingMethods
} from './queries/public_api';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { MagentoGetSelectedShippingMethodResponse, MagentoSetSelectedShippingMethodResponse, MagentoListShippingMethodsResponse } from './models/responses/public_api';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingInformationService implements DaffCartShippingInformationServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public shippingRateTransformer: DaffMagentoCartShippingRateTransformer,
    public shippingMethodInputTransformer: DaffMagentoShippingMethodInputTransformer,
  ) {}

  get(cartId: string): Observable<DaffCartShippingRate> {
    return this.apollo.query<MagentoGetSelectedShippingMethodResponse>({
      query: getSelectedShippingMethod(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0]
        ? this.shippingRateTransformer.transform(result.data.cart.shipping_addresses[0].selected_shipping_method)
        : null
      )
    );
  }

  update(cartId: string, shippingInfo: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedShippingMethodResponse>({
      mutation: setSelectedShippingMethod(this.extraCartFragments),
      variables: {
        cartId,
        method: this.shippingMethodInputTransformer.transform(shippingInfo)
      }
    }).pipe(
      switchMap(result =>
        // because Magento only returns the selected shipping method for the mutation
        // we have to manually refetch the available shipping methods
        // with fetchPolicy: 'network-only' in order to skip the cache
        this.apollo.query<MagentoListShippingMethodsResponse>({
          query: listShippingMethods(this.extraCartFragments),
          variables: {cartId},
          fetchPolicy: 'network-only'
        }).pipe(
          map(shippingMethods => ({
            ...this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart),
            available_shipping_methods: shippingMethods.data.cart.shipping_addresses[0].available_shipping_methods.map(item =>
              this.shippingRateTransformer.transform(item)
            )
          }))
        )
      )
    )
  }

  delete(cartId: string, id?: string | number): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedShippingMethodResponse>({
      mutation: setSelectedShippingMethod(this.extraCartFragments),
      variables: {
        cartId,
        method: {
          carrier_code: '',
          method_code: ''
        }
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart))
    )
  }
}
