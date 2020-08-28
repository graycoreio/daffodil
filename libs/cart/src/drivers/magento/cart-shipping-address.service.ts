import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

import { DaffCartShippingAddressServiceInterface } from '../interfaces/cart-shipping-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import {
  getShippingAddress,
  updateShippingAddress,
  updateShippingAddressWithEmail,
} from './queries/public_api';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import {
  MagentoGetShippingAddressResponse,
  MagentoUpdateShippingAddressResponse,
  MagentoUpdateShippingAddressWithEmailResponse,
} from './models/responses/public_api';
import { transformCartMagentoError } from './errors/transform';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    public shippingAddressInputTransformer: DaffMagentoShippingAddressInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartAddress> {
    return this.apollo.query<MagentoGetShippingAddressResponse>({
      query: getShippingAddress(this.extraCartFragments),
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
    return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address)
  }

  private updateAddress(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateShippingAddressResponse>({
      mutation: updateShippingAddress(this.extraCartFragments),
      variables: {
        cartId,
        address: this.shippingAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }

  private updateAddressWithEmail(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateShippingAddressWithEmailResponse>({
      mutation: updateShippingAddressWithEmail(this.extraCartFragments),
      variables: {
        cartId,
        email: address.email,
        address: this.shippingAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform({
        ...resp.data.setShippingAddressesOnCart.cart,
        email: resp.data.setGuestEmailOnCart.cart.email
      })),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }
}
