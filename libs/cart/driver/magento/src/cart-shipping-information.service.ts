import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';

import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import {
  getSelectedShippingMethod,
  setSelectedShippingMethod,
  listShippingMethods
} from './queries/public_api';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoGetSelectedShippingMethodResponse, MagentoSetSelectedShippingMethodResponse, MagentoListShippingMethodsResponse } from './queries/responses/public_api';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingInformationService implements DaffCartShippingInformationServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
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
    return this.mutationQueue.mutate<MagentoSetSelectedShippingMethodResponse>({
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
    return this.mutationQueue.mutate<MagentoSetSelectedShippingMethodResponse>({
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
