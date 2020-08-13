import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, mapTo } from 'rxjs/operators';

import { DaffStorageServiceError, substream } from '@daffodil/core';

import {
	DaffCartActionTypes,
	DaffCartLoadSuccess,
	DaffCartCreate,
	DaffCartLoadFailure,
	DaffCartStorageFailure,
  DaffResolveCart,
  DaffResolveCartSuccess,
  DaffCartCreateSuccess,
  DaffResolveCartFailure,
  DaffCartCreateFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartDriver, DaffCartServiceInterface } from '../drivers/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartNotFoundError } from '../errors/not-found';

/**
 * An effect for resolving the Cart. It will check local state for a cart id, and retrieve the cart if it exists. If a cart
 * of that id does not exist, it will create a new cart.
 */
@Injectable()
export class DaffCartResolverEffects<T extends DaffCart = DaffCart> {
	constructor(
		private actions$: Actions,
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
      switchMap(resp => {
        this.cartStorage.setCartId(String(resp.id))
        return of(new DaffCartLoadSuccess(resp))
      }),
      catchError(error => {
        switch(error.name) {
          case DaffStorageServiceError.name:
            return of(new DaffCartStorageFailure('Cart Storage Failed'))
          case DaffCartNotFoundError.name:
            return of(new DaffCartCreate());
          default:
            return of(new DaffCartLoadFailure('Cart loading has failed'));
        }
      }),
    ))
  );

  @Effect()
	onResolveCartSuccess$: Observable<Action> = this.actions$.pipe(
    substream(
      [
        DaffCartActionTypes.ResolveCartAction,
        [DaffCartActionTypes.CartLoadSuccessAction, DaffCartActionTypes.CartCreateSuccessAction]
      ],
      DaffCartActionTypes.ResolveCartFailureAction
    ),
    mapTo(new DaffResolveCartSuccess())
  );

  @Effect()
	onResolveCartFailure$: Observable<Action> = this.actions$.pipe(
    substream(
      [
        DaffCartActionTypes.ResolveCartAction,
        [DaffCartActionTypes.CartLoadFailureAction, DaffCartActionTypes.CartCreateFailureAction]
      ],
      DaffCartActionTypes.ResolveCartSuccessAction
    ),
    map(([
      resolveCartAction,
      cartFailureAction
    ]: [
      DaffResolveCart,
      DaffCartLoadFailure | DaffCartCreateFailure
    ]) => new DaffResolveCartFailure(cartFailureAction.payload))
	);
}
