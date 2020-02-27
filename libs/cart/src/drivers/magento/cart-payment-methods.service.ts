import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartPaymentMethodsServiceInterface } from '../interfaces/cart-payment-methods-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { listPaymentMethods } from './queries';
import { unwrapResult } from './utils/unwrapResult';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { ListPaymentMethodsResponse } from './models/responses/list-payment-methods';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface<DaffCartPaymentMethod> {
  constructor(
    private apollo: Apollo,
    public paymentTransformer: DaffMagentoCartPaymentTransformer
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod[]> {
    return this.apollo.query<ListPaymentMethodsResponse>({
      query: listPaymentMethods,
      variables: {cartId}
    }).pipe(
      unwrapResult,
      map((result: ListPaymentMethodsResponse) => result.cart.available_payment_methods.map(item => this.paymentTransformer.transform(item)))
    )
  }
}
