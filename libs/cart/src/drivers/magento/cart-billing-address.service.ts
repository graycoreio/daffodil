import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, zip, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCartBillingAddressServiceInterface } from '../interfaces/cart-billing-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import {
  getBillingAddress,
  updateBillingAddress,
  updateBillingAddressWithEmail
} from './queries/public_api';
import {
  MagentoGetBillingAddressResponse,
  MagentoUpdateBillingAddressResponse,
  MagentoUpdateBillingAddressWithEmailResponse
} from './models/responses/public_api';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { transformCartMagentoError } from './errors/transform';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartBillingAddressService implements DaffCartBillingAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public billingAddressTransformer: DaffMagentoBillingAddressTransformer,
    public billingAddressInputTransformer: DaffMagentoBillingAddressInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartAddress> {
    return this.apollo.query<MagentoGetBillingAddressResponse>({
      query: getBillingAddress,
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.billing_address
        ? this.billingAddressTransformer.transform({
          ...result.data.cart.billing_address,
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
    return this.apollo.mutate<MagentoUpdateBillingAddressResponse>({
      mutation: updateBillingAddress,
      variables: {
        cartId,
        address: this.billingAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setBillingAddressOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }

  private updateAddressWithEmail(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateBillingAddressWithEmailResponse>({
      mutation: updateBillingAddressWithEmail,
      variables: {
        cartId,
        email: address.email,
        address: this.billingAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform({
        ...resp.data.setBillingAddressOnCart.cart,
        email: resp.data.setGuestEmailOnCart.cart.email
      })),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }
}
