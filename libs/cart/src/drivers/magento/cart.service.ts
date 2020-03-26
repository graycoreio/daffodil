import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable, zip, of, throwError, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { DaffCartServiceInterface } from '../interfaces/cart-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { getCart, createCart } from './queries/public_api';
import { DaffCartItemDriver, DaffCartItemServiceInterface } from '../interfaces/cart-item-service.interface';
import { DaffCartItem } from '../../models/cart-item';
import { DaffCartItemInput } from '../../models/cart-item-input';
import { MagentoGetCartResponse } from './models/responses/get-cart';
import { MagentoCreateCartResponse } from './models/responses/create-cart';
import { transformError } from './errors/transform';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartService implements DaffCartServiceInterface<DaffCart> {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    @Inject(DaffCartItemDriver) private cartItemDriver: DaffCartItemServiceInterface<
      DaffCartItem,
      DaffCartItemInput,
      DaffCart
    >
  ) {}

  get(cartId: string): Observable<DaffCart> {
    return this.apollo.query<MagentoGetCartResponse>({
      query: getCart,
      variables: {cartId}
    }).pipe(
      catchError((error: Error) => throwError(transformError(error))),
      map(result => this.cartTransformer.transform(result.data.cart))
    );
  }

  create(): Observable<{id: string}> {
    return this.apollo.mutate<MagentoCreateCartResponse>({mutation: createCart}).pipe(
      map(result => ({id: result.data.createEmptyCart}))
    )
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
  }

  clear(cartId: string): Observable<Partial<DaffCart>> {
    return this.cartItemDriver.list(cartId).pipe(
      switchMap(items =>
				// make the delete requests in parallel and collect them into a single observable
				// return null if there are no items in the cart
        items.length ? forkJoin(...items.map(item =>
          this.cartItemDriver.delete(cartId, item.item_id)
        )) : of(null)
      ),
			// make a get request if there were no items in the cart
			// todo: find a better way to do this. Because all of the remove item requests are made
			// asynchronously, there is no guarantee that any cart response will be the "last" one, i.e.
			// the one with no more items.
			switchMap(updatedCarts => updatedCarts ? 
				of(this.removeLeftoverItems(updatedCarts)) : 
				this.get(cartId))
    )
	}
	
	/**
	 * This assumes that the remove requests all succeed, and manually sets the cart items to an empty array.
	 */
	private removeLeftoverItems(carts: DaffCart[]): DaffCart {
		carts[0].items = [];

		return carts[0];
	}
}
