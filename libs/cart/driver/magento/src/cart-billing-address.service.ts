import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';

import {
  getBillingAddress,
  updateBillingAddress,
  updateBillingAddressWithEmail
} from './queries/public_api';
import {
  MagentoGetBillingAddressResponse,
  MagentoUpdateBillingAddressResponse,
  MagentoUpdateBillingAddressWithEmailResponse
} from './queries/responses/public_api';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartBillingAddressService implements DaffCartBillingAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public billingAddressTransformer: DaffMagentoBillingAddressTransformer,
    public billingAddressInputTransformer: DaffMagentoBillingAddressInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartAddress> {
    return this.apollo.query<MagentoGetBillingAddressResponse>({
      query: getBillingAddress(this.extraCartFragments),
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
    return this.mutationQueue.mutate<MagentoUpdateBillingAddressResponse>({
      mutation: updateBillingAddress(this.extraCartFragments),
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
    return this.mutationQueue.mutate<MagentoUpdateBillingAddressWithEmailResponse>({
      mutation: updateBillingAddressWithEmail(this.extraCartFragments),
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
