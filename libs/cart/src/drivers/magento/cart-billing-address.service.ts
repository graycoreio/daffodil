import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartBillingAddressServiceInterface } from '../interfaces/cart-billing-address-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';
import {
  getBillingAddress,
  updateBillingAddress,
  setGuestEmail
} from './queries/public_api';
import {
  MagentoGetBillingAddressResponse,
  MagentoUpdateBillingAddressResponse,
  MagentoSetGuestEmailResponse
} from './models/responses/public_api';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartBillingAddressService implements DaffCartBillingAddressServiceInterface<DaffCartAddress, DaffCart> {
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
    return zip(
      this.apollo.mutate<MagentoUpdateBillingAddressResponse>({
        mutation: updateBillingAddress,
        variables: {
          cartId,
          address: this.billingAddressInputTransformer.transform(address)
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
        ...updateResult.data.setBillingAddressOnCart.cart,
        email: setEmailResult.data.setGuestEmailOnCart.cart.email
      }))
    )
  }
}
