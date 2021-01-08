import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { DocumentNode } from 'graphql';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCart, DaffCartItem, DaffCartItemInput } from '@daffodil/cart';
import { DaffCartServiceInterface, DaffCartItemDriver, DaffCartItemServiceInterface } from '@daffodil/cart/driver';

import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { getCart, createCart } from './queries/public_api';
import { MagentoGetCartResponse } from './queries/responses/get-cart';
import { MagentoCreateCartResponse } from './queries/responses/create-cart';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartService implements DaffCartServiceInterface<DaffCart> {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    public cartTransformer: DaffMagentoCartTransformer,
    @Inject(DaffCartItemDriver) private cartItemDriver: DaffCartItemServiceInterface<
      DaffCartItem,
      DaffCartItemInput,
      DaffCart
    >,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
  ) {}

  get(cartId: string): Observable<DaffCart> {
    return this.apollo.query<MagentoGetCartResponse>({
      query: getCart(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      catchError((error: Error) => throwError(transformCartMagentoError(error))),
      map(result => this.cartTransformer.transform(result.data.cart))
    );
  }

  create(): Observable<{id: string}> {
    return this.mutationQueue.mutate<MagentoCreateCartResponse>({mutation: createCart}).pipe(
      map(result => ({id: result.data.createEmptyCart}))
    )
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
  }

  clear(cartId: string): Observable<Partial<DaffCart>> {
    return this.cartItemDriver.list(cartId).pipe(
      switchMap(items =>
        forkJoin(...items.map(item =>
          this.cartItemDriver.delete(cartId, item.item_id)
        ))
      ),
			switchMap(() => this.get(cartId))
    )
	}
}
