import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerDriverInterface } from '@daffodil/customer/driver';

import { transformMagentoReviewsError } from './errors/transform';
import {
  MagentoChangeEmailResponse,
  MagentoChangePasswordResponse,
  MagentoGetCustomerResponse,
  MagentoUpdateCustomerResponse,
} from './models/public_api';
import {
  changePassword,
  getCustomer,
  updateCustomer,
  updateEmail,
} from './queries/public_api';
import {
  magentoCustomerInputTransform,
  magentoCustomerTransform,
} from './transforms/public_api';
import { validateChangeEmailResponse } from './validators/change-email';
import { validateChangePasswordResponse } from './validators/change-password';
import { validateGetCustomerResponse } from './validators/public_api';
import { validateUpdateCustomerResponse } from './validators/update-customer';

/**
 * A service for making Magento GraphQL queries for customers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerMagentoService implements DaffCustomerDriverInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  changeEmail(email: string, password: string): Observable<DaffCustomer> {
    return this.apollo.mutate<MagentoChangeEmailResponse>({
      mutation: updateEmail,
      variables: {
        email,
        password,
      },
    }).pipe(
      map(validateChangeEmailResponse),
      map(result => magentoCustomerTransform(result.data.updateCustomerEmail.customer)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  changePassword(oldPassword: string, newPassword: string): Observable<void> {
    return this.apollo.mutate<MagentoChangePasswordResponse>({
      mutation: changePassword,
      variables: {
        old: oldPassword,
        new: newPassword,
      },
    }).pipe(
      map(validateChangePasswordResponse),
      map(() => undefined),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  get(): Observable<DaffCustomer> {
    return this.apollo.query<MagentoGetCustomerResponse>({
      query: getCustomer,
    }).pipe(
      map(validateGetCustomerResponse),
      map(result => magentoCustomerTransform(result.data.customer)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  update(customer: Partial<DaffCustomer>): Observable<DaffCustomer> {
    return this.apollo.mutate<MagentoUpdateCustomerResponse>({
      mutation: updateCustomer,
      variables: {
        customer: magentoCustomerInputTransform(customer),
      },
    }).pipe(
      map(validateUpdateCustomerResponse),
      map(result => magentoCustomerTransform(result.data.updateCustomerV2.customer)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

}
