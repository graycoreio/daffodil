import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, mapTo } from 'rxjs/operators';

import { DaffStorageServiceError, DaffError } from '@daffodil/core';
import { substream } from '@daffodil/core/state';
import { DaffCart, DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartDriver, DaffCartServiceInterface, DaffCartNotFoundError } from '@daffodil/cart/driver';

import {
	DaffCartActionTypes,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
} from '../actions/public_api';

/**
 * An effect for resolving the Cart. It will check local state for a cart id, and retrieve the cart if it exists. If a cart
 * of that id does not exist, it will create a new cart.
 */
@Injectable()
export class DaffCartResolverEffects<T extends DaffCart = DaffCart> {
	constructor(
		private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
		private cartStorage: DaffCartStorageService,
		@Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
	) {}

  @Effect()
  onResolveCart$: Observable<Action> = this.actions$.pipe(
    ofType(DaffCartActionTypes.ResolveCartAction),
    switchMap(() => of(null).pipe(
      map(() => this.cartStorage.getCartId()),
      switchMap(cartId => cartId ? of({ id: cartId }) : this.driver.create()),
      switchMap(({ id }) => this.driver.get(id)),
      map(resp => new DaffResolveCartSuccess(resp)),
      catchError((error: DaffError) => {
        switch(true) {
          case error instanceof DaffStorageServiceError:
            error.message = 'Cart resolution failed while attempting to retrieve the cart ID from storage.'
            return of(new DaffResolveCartFailure(this.errorMatcher(error)));
          case error instanceof DaffCartNotFoundError:
            return this.driver.create().pipe(
              switchMap(({ id }) => this.driver.get(id)),
              map(resp => new DaffResolveCartSuccess(resp)),
              catchError((innerError: DaffError) => {
                innerError.message = 'Cart resolution failed after attempting to generate and load a new cart.'
                return of(new DaffResolveCartFailure(this.errorMatcher(innerError)))
              })
            );
          default:
            error.message = 'Cart resolution has failed.'
            return of(new DaffResolveCartFailure(this.errorMatcher(error)));
        }
      }),
    ))
  );
}
