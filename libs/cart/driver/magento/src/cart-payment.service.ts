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

import {
  DaffCartPaymentMethod,
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformCartMagentoError } from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import {
  getSelectedPaymentMethod,
  setSelectedPaymentMethod,
  setSelectedPaymentMethodWithBilling,
  setSelectedPaymentMethodWithBillingAndEmail,
} from './queries/public_api';
import {
  MagentoGetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodWithBillingResponse,
  MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse,
} from './queries/responses/public_api';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartPaymentService implements DaffCartPaymentServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    private cartTransformer: DaffMagentoCartTransformer,
    private paymentTransformer: DaffMagentoCartPaymentTransformer,
    private paymentInputTransformer: DaffMagentoPaymentMethodInputTransformer,
    private cartAddressInputTransformer: DaffMagentoBillingAddressInputTransformer,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartPaymentMethod> {
    return this.apollo.query<MagentoGetSelectedPaymentMethodResponse>({
      query: getSelectedPaymentMethod(this.extraCartFragments),
      variables: { cartId },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => this.paymentTransformer.transform(result.data.cart.selected_payment_method)),
    );
  }

  update(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    billingAddress?: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    return billingAddress
      ? this.updateWithBilling(cartId, payment, billingAddress)
      : this.mutationQueue.mutate<MagentoSetSelectedPaymentMethodResponse>({
        mutation: setSelectedPaymentMethod(this.extraCartFragments),
        variables: {
          cartId,
          payment: this.paymentInputTransformer.transform(payment),
        },
        fetchPolicy: 'network-only',
      }).pipe(
        map(result => this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart)),
      );
  }

  updateWithBilling(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    address: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    return address.email
      ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
      : this.updateWithBillingAddress(cartId, payment, address);
  }

  remove(cartId: DaffCart['id']): Observable<void> {
    return this.mutationQueue.mutate({
      mutation: setSelectedPaymentMethod(this.extraCartFragments),
      variables: {
        cartId,
        payment: { code: '' },
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(() => undefined),
    );
  }

  private updateWithBillingAddress(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    address: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoSetSelectedPaymentMethodWithBillingResponse>({
      mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
      variables: {
        cartId,
        payment: this.paymentInputTransformer.transform(payment),
        address: this.cartAddressInputTransformer.transform(address),
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart)),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }

  private updateWithBillingAddressAndEmail(
    cartId: DaffCart['id'],
    payment: Partial<DaffCartPaymentMethod>,
    address: Partial<DaffCartAddress>,
  ): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse>({
      mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
      variables: {
        cartId,
        email: address.email,
        payment: this.paymentInputTransformer.transform(payment),
        address: this.cartAddressInputTransformer.transform(address),
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart)),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }
}
