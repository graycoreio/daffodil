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
import { MagentoGetCustomerResponse } from './models/public_api';
import { getCustomer } from './queries/public_api';
import { magentoCustomerTransform } from './transforms/public_api';
import { validateGetCustomerResponse } from './validators/public_api';

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

  get(): Observable<DaffCustomer> {
    return this.apollo.query<MagentoGetCustomerResponse>({
      query: getCustomer,
    }).pipe(
      map(validateGetCustomerResponse),
      map(result => magentoCustomerTransform(result.data)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
