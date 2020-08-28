import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable, throwError } from 'rxjs';
import { map, mapTo, catchError } from 'rxjs/operators';

import { DaffCartPaymentServiceInterface } from '../interfaces/cart-payment-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import {
  getSelectedPaymentMethod,
  setSelectedPaymentMethod,
  setSelectedPaymentMethodWithBilling,
  setSelectedPaymentMethodWithBillingAndEmail
} from './queries/public_api';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  MagentoGetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodWithBillingResponse,
  MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse
} from './models/responses/public_api';
import { DaffCartAddress } from '../../models/cart-address';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentService implements DaffCartPaymentServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public paymentTransformer: DaffMagentoCartPaymentTransformer,
    public paymentInputTransformer: DaffMagentoPaymentMethodInputTransformer,
    public cartAddressInputTransformer: DaffMagentoBillingAddressInputTransformer,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
  ) {}

  get(cartId: string): Observable<DaffCartPaymentMethod> {
    return this.apollo.query<MagentoGetSelectedPaymentMethodResponse>({
      query: getSelectedPaymentMethod(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      map(result => this.paymentTransformer.transform(result.data.cart.selected_payment_method))
    );
  }

  update(cartId: string, payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedPaymentMethodResponse>({
      mutation: setSelectedPaymentMethod(this.extraCartFragments),
      variables: {
        cartId,
        payment: this.paymentInputTransformer.transform(payment)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart))
    )
  }

  updateWithBilling(cartId: string, payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return address.email
      ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
      : this.updateWithBillingAddress(cartId, payment, address)
  }

  remove(cartId: string): Observable<void> {
    return this.apollo.mutate({
      mutation: setSelectedPaymentMethod(this.extraCartFragments),
      variables: {
        cartId,
        payment: {code: ''}
      }
    }).pipe(
      mapTo(undefined)
    )
  }

  private updateWithBillingAddress(cartId: string, payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedPaymentMethodWithBillingResponse>({
      mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
      variables: {
        cartId,
        payment: this.paymentInputTransformer.transform(payment),
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }

  private updateWithBillingAddressAndEmail(cartId: string, payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse>({
      mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
      variables: {
        cartId,
        email: address.email,
        payment: this.paymentInputTransformer.transform(payment),
        address: this.cartAddressInputTransformer.transform(address)
      }
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart)),
      catchError(error => throwError(transformCartMagentoError(error))),
    )
  }
}
