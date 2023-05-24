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
  catchError,
  map,
} from 'rxjs/operators';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';

import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { listShippingMethods } from './queries/public_api';
import { MagentoListShippingMethodsResponse } from './queries/responses/list-shipping-methods';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';

/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    private shippingRateTransformer: DaffMagentoCartShippingRateTransformer,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return this.apollo.query<MagentoListShippingMethodsResponse>({
      query: listShippingMethods(this.extraCartFragments),
      variables: { cartId },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => result.data.cart.shipping_addresses[0].available_shipping_methods.map(item =>
        this.shippingRateTransformer.transform(item),
      )),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }
}
