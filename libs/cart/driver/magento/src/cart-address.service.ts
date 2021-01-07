import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';

import {
  updateAddress,
  updateAddressWithEmail,
} from './queries/public_api';
import {
  MagentoUpdateAddressResponse,
  MagentoUpdateAddressWithEmailResponse,
} from './queries/responses/public_api';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartAddressService implements DaffCartAddressServiceInterface {
  constructor(
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public cartAddressTransformer: DaffMagentoShippingAddressTransformer,
    public cartAddressInputTransformer: DaffMagentoCartAddressInputTransformer,
  ) {}

  update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address)
  }

  private updateAddress(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateAddressResponse>({
      mutation: updateAddress(this.extraCartFragments),
      variables: {
        cartId,
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }

  private updateAddressWithEmail(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateAddressWithEmailResponse>({
      mutation: updateAddressWithEmail(this.extraCartFragments),
      variables: {
        cartId,
        email: address.email,
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }
}
