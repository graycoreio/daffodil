import {
  Injectable,
  Inject,
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  Observable,
  throwError,
  forkJoin,
  of,
  merge,
} from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInput,
} from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartItemDriver,
  DaffCartItemServiceInterface,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import { DaffInheritableError } from '@daffodil/core';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffDriverResponse } from '@daffodil/driver';

import {
  transformCartMagentoError,
  transformMagentoCartGraphQlError,
} from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import {
  getCart,
  createCart,
  magentoMergeCartsMutation,
  MagentoMergeCartResponse,
} from './queries/public_api';
import { MagentoCreateCartResponse } from './queries/responses/create-cart';
import { MagentoGetCartResponse } from './queries/responses/get-cart';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';

export const DAFF_MAGENTO_GET_RECOVERABLE_ERRORS = [
  DaffProductOutOfStockError,
];

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartService implements DaffCartServiceInterface<DaffCart> {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    private cartTransformer: DaffMagentoCartTransformer,
    @Inject(DaffCartItemDriver) private cartItemDriver: DaffCartItemServiceInterface<
    DaffCartItem,
    DaffCartItemInput,
    DaffCart
    >,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.apollo.query<MagentoGetCartResponse>({
      fetchPolicy: 'network-only',
      query: getCart(this.extraCartFragments),
      variables: { cartId },
      errorPolicy: 'all',
    }).pipe(
      map(({ data, errors }) => ({
        response: data ? this.cartTransformer.transform(data.cart) : undefined,
        errors: errors?.map(e => {
          const error = transformMagentoCartGraphQlError(e);

          if (DAFF_MAGENTO_GET_RECOVERABLE_ERRORS.find(klass => error instanceof klass)) {
            error.recoverable = true;
          }

          return error;
        }) || [],
      })),
      switchMap((resp) =>
        resp.errors.reduce((acc, err) => acc && err.recoverable, true)
          ? of(resp)
          : throwError(() => resp.errors.filter((err) => !err.recoverable)[0]),
      ),
    );
  }

  create(): Observable<{id: DaffCart['id']}> {
    return this.mutationQueue.mutate<MagentoCreateCartResponse>({ mutation: createCart }).pipe(
      map(result => ({ id: result.data.createEmptyCart })),
    );
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
  }

  clear(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.cartItemDriver.list(cartId).pipe(
      switchMap(items =>
        forkJoin(...items.map(item =>
          this.cartItemDriver.delete(cartId, item.id),
        )),
      ),
      switchMap(() => this.get(cartId)),
      map(({ response }) => response),
    );
  }

  merge(guestCart: DaffCart['id'], customerCart?: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return this.mutationQueue.mutate<MagentoMergeCartResponse>({
      mutation: magentoMergeCartsMutation(this.extraCartFragments),
      variables: {
        source: guestCart,
        destination: customerCart,
      },
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
    }).pipe(
      map(({ data, errors }) => ({
        response: data ? this.cartTransformer.transform(data.mergeCarts) : undefined,
        errors: errors?.map(e => {
          const error = transformMagentoCartGraphQlError(e);

          if (DAFF_MAGENTO_GET_RECOVERABLE_ERRORS.filter(klass => error instanceof klass).length > 0) {
            error.recoverable = true;
          }

          return error;
        }) || [],
      })),
      switchMap((resp) =>
        resp.errors.reduce((acc, err) => acc && err.recoverable, true)
          ? of(resp)
          : throwError(() => resp.errors.filter((err) => !err.recoverable)[0]),
      ),
    );
  };
}
