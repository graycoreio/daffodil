import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, mapTo } from 'rxjs/operators';

import {
	DaffStorageServiceError,
	DaffServerSideStorageError,
	DaffError,
} from '@daffodil/core';
import {
	DaffCart,
	DaffCartStorageService,
	DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
	DaffCartDriver,
	DaffCartServiceInterface,
	DaffCartNotFoundError,
} from '@daffodil/cart/driver';

import {
	DaffCartActionTypes,
	DaffResolveCartSuccess,
	DaffResolveCartFailure,
	DaffResolveCartServerSide,
	DaffResolveCart,
} from '../actions/public_api';

/**
 * An effect for resolving a guest cart for a customer.
 * It will:
 * 1. Check storage for an id, and retrieve the cart if it exists.
 * 2. If a cart doesn't exist, it will attempt to create a new cart exactly once.
 * 3. If the cart resolution fails, it will bailout.
 */
@Injectable()
export class DaffCartResolverEffects<T extends DaffCart = DaffCart>
	implements OnInitEffects {
	constructor(
		private actions$: Actions,
		@Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
		private cartStorage: DaffCartStorageService,
		@Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
	) {}

	ngrxOnInitEffects(): Action {
		return new DaffResolveCart();
	}

	@Effect()
	onResolveCart = (): Observable<Action> => this.actions$.pipe(
		ofType(DaffCartActionTypes.ResolveCartAction),
		switchMap(() =>
			of(null).pipe(
				map(() => this.cartStorage.getCartId()),
				switchMap(cartId =>
					cartId ? of({ id: cartId }) : this.driver.create(),
				),
				switchMap(({ id }) => this.driver.get(id)),
				map(resp => new DaffResolveCartSuccess(resp)),
				catchError(error => {
					switch (true) {
						case error instanceof DaffServerSideStorageError:
							return of(new DaffResolveCartServerSide());
						case error instanceof DaffStorageServiceError:
							error.message =
								'Cart resolution failed while attempting to retrieve the cart ID from storage.';
							return of(new DaffResolveCartFailure(this.errorMatcher(error)));
						case error instanceof DaffCartNotFoundError:
							return this.driver.create().pipe(
								switchMap(({ id }) => this.driver.get(id)),
								map(resp => new DaffResolveCartSuccess(resp)),
								catchError((innerError: DaffError) => {
									innerError.message =
										'Cart resolution failed after attempting to generate and load a new cart.';
									return of(
										new DaffResolveCartFailure(this.errorMatcher(innerError)),
									);
								}),
							);
						default:
							error.message = 'Cart resolution has failed.';
							return of(new DaffResolveCartFailure(this.errorMatcher(error)));
					}
				}),
			),
		),
	);
}
