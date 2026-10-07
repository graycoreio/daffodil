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

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditDriverInterface } from '@daffodil/customer-store-credit/driver';

import { transformMagentoReviewsError } from './errors/transform';
import { MagentoGetCustomerStoreCreditResponse } from './models/public_api';
import { getCustomerStoreCredit } from './queries/public_api';
import { magentoCustomerStoreCreditTransform } from './transforms/public_api';
import { validateGetCustomerStoreCreditResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for customers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditMagentoService implements DaffCustomerStoreCreditDriverInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  get(): Observable<DaffCustomerStoreCredit> {
    return this.apollo.query<MagentoGetCustomerStoreCreditResponse>({
      query: getCustomerStoreCredit,
    }).pipe(
      map(validateGetCustomerStoreCreditResponse),
      map((response) => magentoCustomerStoreCreditTransform(response.data.customer.store_credit)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
