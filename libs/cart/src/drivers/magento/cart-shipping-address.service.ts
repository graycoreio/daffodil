import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartShippingAddressServiceInterface } from '../interfaces/cart-shipping-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import { getShippingAddress, updateShippingAddress } from './queries';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { MagentoGetShippingAddressResponse, MagentoUpdateShippingAddressResponse } from './models/responses';

/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingAddressService implements DaffCartShippingAddressServiceInterface<DaffCartAddress, DaffCart> {
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
      map(result => this.shippingAddressTransformer.transform({
        ...result.data.cart.shipping_addresses[0],
        email: result.data.cart.email
      }))
    )
  }

  update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateShippingAddressResponse>({
      mutation: updateShippingAddress,
      variables: {
        cartId,
        address: this.shippingAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.setShippingAddressesOnCart.cart))
    )
  }
}
