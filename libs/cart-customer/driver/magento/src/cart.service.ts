import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import {
  DaffMagentoCartService,
  DaffMagentoCartTransformer,
  DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,
  DAFF_MAGENTO_GET_RECOVERABLE_ERRORS,
  transformMagentoCartGraphQlError,
} from '@daffodil/cart/driver/magento';
import { DaffDriverResponse } from '@daffodil/driver';

import {
  getCustomerCart,
  MagentoGetCustomerCartResponse,
} from './queries/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartCustomerService implements DaffCartServiceInterface<DaffCart> {
  constructor(
    private apollo: Apollo,
    private cartTransformer: DaffMagentoCartTransformer,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    private guestDriver: DaffMagentoCartService,
  ) {}

  get(): Observable<DaffDriverResponse<DaffCart>> {
    return this.apollo.query<MagentoGetCustomerCartResponse>({
      fetchPolicy: 'network-only',
      query: getCustomerCart(this.extraCartFragments),
      errorPolicy: 'all',
    }).pipe(
      map(({ data, errors }) => ({
        response: data ? this.cartTransformer.transform(data.customerCart) : undefined,
        errors: errors?.map(e => {
          const error = transformMagentoCartGraphQlError(e);

          if (DAFF_MAGENTO_GET_RECOVERABLE_ERRORS.filter(klass => error instanceof klass).length > 0) {
            error.recoverable = true;
          }

          return error;
        }) || [],
      })),
    );
  }

  create(): Observable<{id: DaffCart['id']}> {
    return this.guestDriver.create();
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
  }

  clear(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.guestDriver.clear(cartId);
  }

  merge(guestCart: DaffCart['id'], customerCart?: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.guestDriver.merge(guestCart, customerCart);
  };
}
