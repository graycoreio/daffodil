import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartPaymentMethodsServiceInterface } from '../interfaces/cart-payment-methods-service.interface';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { listPaymentMethods } from './queries/public_api';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { MagentoListPaymentMethodsResponse } from './models/responses/list-payment-methods';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
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
