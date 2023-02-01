import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
} from 'rxjs/operators';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerAddressDriverInterface,
  DaffCustomerAddressNotFoundError,
} from '@daffodil/customer/driver';

import { transformMagentoReviewsError } from './errors/transform';
import {
  MagentoCreateCustomerAddressResponse,
  MagentoDeleteCustomerAddressResponse,
  MagentoGetCustomerAddressesResponse,
  MagentoUpdateCustomerAddressResponse,
} from './models/public_api';
import {
  createCustomerAddress,
  deleteCustomerAddress,
  getCustomerAddresses,
  updateCustomerAddress,
} from './queries/public_api';
import {
  magentoCustomerAddressInputTransform,
  magentoCustomerAddressTransform,
} from './transforms/public_api';
import {
  validateCreateCustomerAddressResponse,
  validateDeleteCustomerAddressResponse,
  validateGetCustomerAddressesResponse,
  validateUpdateCustomerAddressResponse,
} from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for customers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerMagentoAddressService implements DaffCustomerAddressDriverInterface {
  constructor(
    private apollo: Apollo,
    private mutationQueue: DaffQueuedApollo,
  ) {}

  add(address: DaffCustomerAddress): Observable<DaffCustomerAddress[]> {
    return this.mutationQueue.mutate<MagentoCreateCustomerAddressResponse>({
      mutation: createCustomerAddress,
      variables: {
        input: magentoCustomerAddressInputTransform(address),
      },
      refetchQueries: [{
        query: getCustomerAddresses,
      }],
      onQueryUpdated: () => true,
    }).pipe(
      map(validateCreateCustomerAddressResponse),
      // magento doesn't return address collection so make an additional request >:(
      switchMap(() => this.listAddresses()),
      map(({ data }) => data.customer.addresses.map(magentoCustomerAddressTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  delete(addressId: DaffCustomerAddress['id']): Observable<DaffCustomerAddress[]> {
    return this.mutationQueue.mutate<MagentoDeleteCustomerAddressResponse>({
      mutation: deleteCustomerAddress,
      variables: {
        id: Number(addressId),
      },
      refetchQueries: [{
        query: getCustomerAddresses,
      }],
      onQueryUpdated: (query) => true,
    }).pipe(
      map(validateDeleteCustomerAddressResponse),
      // magento doesn't return address collection so make an additional request >:(
      switchMap(() => this.listAddresses()),
      map(({ data }) => data.customer.addresses.map(magentoCustomerAddressTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  list(): Observable<DaffCustomerAddress[]> {
    return this.listAddresses().pipe(
      map((response) => response.data.customer.addresses.map(magentoCustomerAddressTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  get(addressId: DaffCustomerAddress['id']): Observable<DaffCustomerAddress> {
    return this.listAddresses().pipe(
      map(({ data }) => {
        const address = data.customer.addresses.find(({ id }) => String(id) === addressId);
        if (!address) {
          throw new DaffCustomerAddressNotFoundError(`Could not find an address with ID: ${addressId}`);
        }
        return address;
      }),
      map(address => magentoCustomerAddressTransform(address)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  update(address: Partial<DaffCustomerAddress> & DaffIdentifiable): Observable<DaffCustomerAddress[]> {
    return this.mutationQueue.mutate<MagentoUpdateCustomerAddressResponse>({
      mutation: updateCustomerAddress,
      variables: {
        id: Number(address.id),
        input: magentoCustomerAddressInputTransform(address),
      },
      refetchQueries: [{
        query: getCustomerAddresses,
      }],
      onQueryUpdated: (query) => true,
    }).pipe(
      map(validateUpdateCustomerAddressResponse),
      switchMap(() => this.listAddresses()),
      map(({ data }) => data.customer.addresses.map(magentoCustomerAddressTransform)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  protected listAddresses(): Observable<ApolloQueryResult<MagentoGetCustomerAddressesResponse>> {
    return this.apollo.query<MagentoGetCustomerAddressesResponse>({
      query: getCustomerAddresses,
    }).pipe(
      map(validateGetCustomerAddressesResponse),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
