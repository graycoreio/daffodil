import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

import { DaffCartPaymentServiceInterface } from '../interfaces/cart-payment-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import {
  getSelectedPaymentMethod,
  setSelectedPaymentMethod
} from './queries';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  MagentoGetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodResponse
} from './models/responses';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentService implements DaffCartPaymentServiceInterface<DaffCartPaymentMethod, DaffCart> {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public paymentTransformer: DaffMagentoCartPaymentTransformer,
    public paymentInputTransformer: DaffMagentoPaymentMethodInputTransformer
  ) {}

  get(cartId: string): Observable<DaffCartPaymentMethod> {
    return this.apollo.query<MagentoGetSelectedPaymentMethodResponse>({
      query: getSelectedPaymentMethod,
      variables: {cartId}
    }).pipe(
      map(result => this.paymentTransformer.transform(result.data.cart.selected_payment_method))
    );
  }

  update(cartId: string, payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedPaymentMethodResponse>({
      mutation: setSelectedPaymentMethod,
      variables: {
        cartId,
        payment: this.paymentInputTransformer.transform(payment)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart))
    )
  }

  remove(cartId: string): Observable<void> {
    return this.apollo.mutate({
      mutation: setSelectedPaymentMethod,
      variables: {
        cartId,
        payment: {code: ''}
      }
    }).pipe(
      mapTo(undefined)
    )
  }
}
