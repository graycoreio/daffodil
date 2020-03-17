import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingInformationServiceInterface } from '../interfaces/cart-shipping-information-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import {
  getSelectedShippingMethod,
  setSelectedShippingMethod
} from './queries/public_api';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { MagentoGetSelectedShippingMethodResponse, MagentoSetSelectedShippingMethodResponse } from './models/responses/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingInformationService implements DaffCartShippingInformationServiceInterface<DaffCartShippingRate, DaffCart> {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public shippingRateTransformer: DaffMagentoCartShippingRateTransformer,
    public shippingMethodInputTransformer: DaffMagentoShippingMethodInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartShippingRate> {
    return this.apollo.query<MagentoGetSelectedShippingMethodResponse>({
      query: getSelectedShippingMethod,
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
      mutation: setSelectedShippingMethod,
      variables: {
        cartId,
        method: this.shippingMethodInputTransformer.transform(shippingInfo)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart))
    )
  }

  delete(cartId: string, id?: string | number): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedShippingMethodResponse>({
      mutation: setSelectedShippingMethod,
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
