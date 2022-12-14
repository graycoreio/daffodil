import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformCartMagentoError } from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import {
  getShippingAddress,
  updateShippingAddress,
  updateShippingAddressWithEmail,
} from './queries/public_api';
import {
  MagentoGetShippingAddressResponse,
  MagentoUpdateShippingAddressResponse,
  MagentoUpdateShippingAddressWithEmailResponse,
} from './queries/responses/public_api';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';

/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    private cartTransformer: DaffMagentoCartTransformer,
    private shippingAddressTransformer: DaffMagentoShippingAddressTransformer,
    private shippingAddressInputTransformer: DaffMagentoShippingAddressInputTransformer,
    private authStorage: DaffAuthStorageService,
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return this.apollo.query<MagentoGetShippingAddressResponse>({
      query: getShippingAddress(this.extraCartFragments),
      variables: { cartId },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0]
        ? this.shippingAddressTransformer.transform({
          ...result.data.cart.shipping_addresses[0],
          email: result.data.cart.email,
        })
        : null,
      ),
    );
  }

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return address.email && !this.authStorage.getAuthToken() ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
  }

  private updateAddress(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateShippingAddressResponse>({
      mutation: updateShippingAddress(this.extraCartFragments),
      variables: {
        cartId,
        address: this.shippingAddressInputTransformer.transform(address),
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart)),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }

  private updateAddressWithEmail(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateShippingAddressWithEmailResponse>({
      mutation: updateShippingAddressWithEmail(this.extraCartFragments),
      variables: {
        cartId,
        email: address.email,
        address: this.shippingAddressInputTransformer.transform(address),
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(resp => this.cartTransformer.transform({
        ...resp.data.setShippingAddressesOnCart.cart,
        email: resp.data.setGuestEmailOnCart.cart.email,
      })),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }
}
