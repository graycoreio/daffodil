import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCartAddressServiceInterface } from '../interfaces/cart-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import {
  updateAddress, updateAddressWithEmail,
} from './queries/public_api';
import {
  MagentoUpdateAddressResponse, MagentoUpdateAddressWithEmailResponse,
} from './models/responses/public_api';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { transformCartMagentoError } from './errors/transform';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartAddressService implements DaffCartAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public cartAddressTransformer: DaffMagentoShippingAddressTransformer,
    public cartAddressInputTransformer: DaffMagentoShippingAddressInputTransformer,
  ) {}

  update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address)
  }

  private updateAddress(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateAddressResponse>({
      mutation: updateAddress,
      variables: {
        cartId,
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform({
        ...resp.data.setBillingAddressOnCart.cart,
        ...resp.data.setShippingAddressesOnCart.cart,
        billing_address: resp.data.setBillingAddressOnCart.cart.billing_address,
        shipping_addresses: resp.data.setShippingAddressesOnCart.cart.shipping_addresses,
      })),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }

  private updateAddressWithEmail(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateAddressWithEmailResponse>({
      mutation: updateAddressWithEmail,
      variables: {
        cartId,
        email: address.email,
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform({
        ...resp.data.setBillingAddressOnCart.cart,
        ...resp.data.setShippingAddressesOnCart.cart,
        billing_address: resp.data.setBillingAddressOnCart.cart.billing_address,
        shipping_addresses: resp.data.setShippingAddressesOnCart.cart.shipping_addresses,
        email: resp.data.setGuestEmailOnCart.cart.email
      })),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }
}
