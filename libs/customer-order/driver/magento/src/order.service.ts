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

import { DaffAuthStorageService } from '@daffodil/auth';
import { DaffCollectionRequest } from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
import { DaffOrderMagentoService } from '@daffodil/order/driver/magento/2.4.1';

import { transformMagentoReviewsError } from './errors/transform';
import {
  MagentoGetCustomerOrderResponse,
  MagentoGetCustomerOrdersResponse,
} from './models/public_api';
import {
  getCustomerOrder,
  getCustomerOrders,
} from './queries/public_api';
import {
  daffMagentoCustomerOrderTransformOrder,
  magentoCustomerOrderCollectionTransform,
} from './transforms/public_api';
import { validateGetCustomerOrderResponse } from './validators/get-order';
import { validateGetCustomerOrdersResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for customers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerOrderMagentoService implements DaffOrderServiceInterface {
  constructor(
    private apollo: Apollo,
    private authStorage: DaffAuthStorageService,
    private guestDriver: DaffOrderMagentoService,
  ) {}

  list(cartId?: string, request: DaffCollectionRequest = {}): Observable<DaffOrderCollection> {
    return this.authStorage.getAuthToken()
      ? this.apollo.query<MagentoGetCustomerOrdersResponse>({
        query: getCustomerOrders,
        variables: {
          currentPage: request.currentPage,
          pageSize: request.pageSize,
        },
      }).pipe(
        map(validateGetCustomerOrdersResponse),
        map(response => magentoCustomerOrderCollectionTransform(response.data)),
        catchError(err => throwError(() => transformMagentoReviewsError(err))),
      )
      : this.guestDriver.list(cartId);
  }

  get(orderId: string, cartId?: string): Observable<DaffOrder> {
    return this.authStorage.getAuthToken()
      ? this.apollo.query<MagentoGetCustomerOrderResponse>({
        query: getCustomerOrder,
        variables: {
          id: orderId,
        },
      }).pipe(
        map(validateGetCustomerOrderResponse),
        map(result => daffMagentoCustomerOrderTransformOrder(result.data.customer.orders.items[0], result.data.customer.email)),
        catchError(err => throwError(() => transformMagentoReviewsError(err))),
      )
      : this.guestDriver.get(orderId, cartId);
  }
}
