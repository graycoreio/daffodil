import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartPaymentMethodsServiceInterface } from '../interfaces/cart-payment-methods-service.interface';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { listPaymentMethods } from './queries';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { MagentoListPaymentMethodsResponse } from './models/responses/list-payment-methods';

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

  list(cartId: string): Observable<DaffCartPaymentMethod[]> {
    return this.apollo.query<MagentoListPaymentMethodsResponse>({
      query: listPaymentMethods,
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.available_payment_methods.map(item => this.paymentTransformer.transform(item)))
    )
  }
}
