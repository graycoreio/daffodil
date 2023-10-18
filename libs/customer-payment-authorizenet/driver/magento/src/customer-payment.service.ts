import {
  Inject,
  Injectable,
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
} from 'rxjs/operators';

import { DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import { DaffMagentoAuthorizeNetService } from '@daffodil/authorizenet/driver/magento';
import { DaffIdentifiable } from '@daffodil/core';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerPaymentDriverInterface,
  DaffCustomerPaymentNotFoundError,
} from '@daffodil/customer-payment/driver';
import {
  DaffCustomerPaymentAuthorizeNet,
  DaffCustomerPaymentAuthorizeNetRequest,
} from '@daffodil/customer-payment-authorizenet';
import { DaffPersonalAddress } from '@daffodil/geography';

import { transformMagentoReviewsError } from './errors/transform';
import {
  MagentoCreateCustomerPaymentResponse,
  MagentoDeleteCustomerPaymentResponse,
  MagentoGetCustomerPaymentResponse,
  MagentoGetCustomerPaymentsResponse,
  MagentoUpdateCustomerPaymentResponse,
} from './models/public_api';
import {
  createTokenBaseCard,
  deleteTokenBaseCard,
  getCustomerPayment,
  getCustomerPayments,
  updateTokenBaseCard,
} from './queries/public_api';
import {
  magentoCustomerPaymentCreateInputTransform,
  magentoCustomerPaymentAuthorizeNetTransform,
  magentoCustomerPaymentUpdateInputTransform,
} from './transforms/public_api';
import { validateGetCustomerPaymentResponse } from './validators/get-customer-payment';
import {
  validateCreateCustomerPaymentResponse,
  validateDeleteCustomerPaymentResponse,
  validateGetCustomerPaymentsResponse,
  validateUpdateCustomerPaymentResponse,
} from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for customers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentAuthorizeNetMagentoService implements DaffCustomerPaymentDriverInterface<DaffCustomerPaymentAuthorizeNet, DaffCustomerPaymentAuthorizeNetRequest> {
  constructor(
    private apollo: Apollo,
    private mutationQueue: DaffQueuedApollo,
    private anetDriver: DaffMagentoAuthorizeNetService,
    @Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
  ) {}

  add(payment: DaffCustomerPaymentAuthorizeNetRequest): Observable<DaffCustomerPaymentAuthorizeNet[]> {
    return this.anetDriver.generateToken(payment.data).pipe(
      switchMap((response) => this.mutationQueue.mutate<MagentoCreateCustomerPaymentResponse>({
        mutation: createTokenBaseCard,
        variables: {
          input: magentoCustomerPaymentCreateInputTransform(payment, response, this.authorizeNetPaymentId),
        },
        refetchQueries: [{
          query: getCustomerPayments,
        }],
        onQueryUpdated: () => true,
      })),
      map(validateCreateCustomerPaymentResponse),
      // magento doesn't return payment collection so make an additional request >:(
      switchMap(() => this.listPayments()),
      map(({ data }) => data.tokenBaseCards.map(magentoCustomerPaymentAuthorizeNetTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  delete(paymentId: DaffCustomerPaymentAuthorizeNet['id']): Observable<DaffCustomerPaymentAuthorizeNet[]> {
    return this.mutationQueue.mutate<MagentoDeleteCustomerPaymentResponse>({
      mutation: deleteTokenBaseCard,
      variables: {
        id: paymentId,
      },
      refetchQueries: [{
        query: getCustomerPayments,
      }],
      onQueryUpdated: (query) => true,
    }).pipe(
      map(validateDeleteCustomerPaymentResponse),
      // magento doesn't return payment collection so make an additional request >:(
      switchMap(() => this.listPayments()),
      map(({ data }) => data.tokenBaseCards.map(magentoCustomerPaymentAuthorizeNetTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  list(): Observable<DaffCustomerPaymentAuthorizeNet[]> {
    return this.listPayments().pipe(
      map((response) => response.data.tokenBaseCards.map(magentoCustomerPaymentAuthorizeNetTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  get(paymentId: DaffCustomerPaymentAuthorizeNet['id']): Observable<DaffCustomerPaymentAuthorizeNet> {
    return this.apollo.query<MagentoGetCustomerPaymentResponse>({
      query: getCustomerPayment,
      variables: {
        id: paymentId,
      },
    }).pipe(
      map(validateGetCustomerPaymentResponse),
      map((response) => magentoCustomerPaymentAuthorizeNetTransform(response.data.tokenBaseCards[0])),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  update(payment: Partial<DaffCustomerPaymentAuthorizeNet> & DaffIdentifiable): Observable<DaffCustomerPaymentAuthorizeNet[]> {
    return this.mutationQueue.mutate<MagentoUpdateCustomerPaymentResponse>({
      mutation: updateTokenBaseCard,
      variables: {
        input: magentoCustomerPaymentUpdateInputTransform(payment, this.authorizeNetPaymentId),
      },
      refetchQueries: [{
        query: getCustomerPayments,
      }],
      onQueryUpdated: (query) => true,
    }).pipe(
      map(validateUpdateCustomerPaymentResponse),
      switchMap(() => this.listPayments()),
      map(({ data }) => data.tokenBaseCards.map(magentoCustomerPaymentAuthorizeNetTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  protected listPayments(): Observable<ApolloQueryResult<MagentoGetCustomerPaymentsResponse>> {
    return this.apollo.query<MagentoGetCustomerPaymentsResponse>({
      query: getCustomerPayments,
    }).pipe(
      map(validateGetCustomerPaymentsResponse),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
