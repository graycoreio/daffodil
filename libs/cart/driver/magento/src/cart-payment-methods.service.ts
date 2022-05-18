import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffCartPaymentMethod,
  DaffCart,
} from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';

import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { listPaymentMethods } from './queries/public_api';
import { MagentoListPaymentMethodsResponse } from './queries/responses/list-payment-methods';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    private paymentTransformer: DaffMagentoCartPaymentTransformer,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return this.apollo.query<MagentoListPaymentMethodsResponse>({
      query: listPaymentMethods(this.extraCartFragments),
      variables: { cartId },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => result.data.cart.available_payment_methods.map(item => this.paymentTransformer.transform(item))),
    );
  }
}
