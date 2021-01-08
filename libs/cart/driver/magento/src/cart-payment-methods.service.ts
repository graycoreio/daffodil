import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';

import { listPaymentMethods } from './queries/public_api';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { MagentoListPaymentMethodsResponse } from './queries/responses/list-payment-methods';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public paymentTransformer: DaffMagentoCartPaymentTransformer
  ) {}

  list(cartId: string): Observable<DaffCartPaymentMethod[]> {
    return this.apollo.query<MagentoListPaymentMethodsResponse>({
      query: listPaymentMethods(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.available_payment_methods.map(item => this.paymentTransformer.transform(item)))
    )
  }
}
