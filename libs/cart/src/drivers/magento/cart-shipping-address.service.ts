import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingAddressServiceInterface } from '../interfaces/cart-shipping-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import {
  getShippingAddress,
  updateShippingAddress,
  setGuestEmail
} from './queries/public_api';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import {
  MagentoGetShippingAddressResponse,
  MagentoUpdateShippingAddressResponse,
  MagentoSetGuestEmailResponse
} from './models/responses/public_api';

/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    public shippingAddressInputTransformer: DaffMagentoShippingAddressInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartAddress> {
    return this.apollo.query<MagentoGetShippingAddressResponse>({
      query: getShippingAddress,
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0]
        ? this.shippingAddressTransformer.transform({
          ...result.data.cart.shipping_addresses[0],
          email: result.data.cart.email
        })
        : null
      )
    )
  }

  update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return zip(
      this.apollo.mutate<MagentoUpdateShippingAddressResponse>({
        mutation: updateShippingAddress,
        variables: {
          cartId,
          address: this.shippingAddressInputTransformer.transform(address)
        }
      }),
      this.apollo.mutate<MagentoSetGuestEmailResponse>({
        mutation: setGuestEmail,
        variables: {
          cartId,
          email: address.email
        }
      })
    ).pipe(
      map(([updateResult, setEmailResult]) => this.cartTransformer.transform({
        ...updateResult.data.setShippingAddressesOnCart.cart,
        email: setEmailResult.data.setGuestEmailOnCart.cart.email
      }))
    )
  }
}
