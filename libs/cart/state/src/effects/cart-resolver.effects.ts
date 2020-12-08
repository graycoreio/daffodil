import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { DaffStorageServiceError, DaffServerSideStorageError } from '@daffodil/core';
import { DaffCart, DaffCartOrderResult, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartDriver, DaffCartServiceInterface, DaffCartNotFoundError } from '@daffodil/cart/driver';

import {
	DaffCartActionTypes,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
} from '../actions/public_api';
import { DaffStatefulCartItem } from '../models/public_api';
import { getDaffCartSelectors } from '../selectors/public_api';

/**
 * An effect for resolving the Cart. It will check local state for a cart id, and retrieve the cart if it exists. If a cart
 * of that id does not exist, it will create a new cart.
 */
@Injectable()
export class DaffCartResolverEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
	constructor(
		private actions$: Actions,
    private cartStorage: DaffCartStorageService,
    private store: Store<any>,
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
      catchError(error => {
        switch(true) {
          case error instanceof DaffServerSideStorageError:
            return this.store.pipe(
              select(getDaffCartSelectors<T, V, U>().selectCartValue),
              map(cart => new DaffResolveCartSuccess(cart))
            );
          case error instanceof DaffStorageServiceError:
            return of(new DaffResolveCartFailure('Cart resolution failed while attempting to retrieve the cart ID from storage.'));
          case error instanceof DaffCartNotFoundError:
            return this.driver.create().pipe(
              switchMap(({ id }) => this.driver.get(id)),
              map(resp => new DaffResolveCartSuccess(resp)),
              catchError(() => of(new DaffResolveCartFailure('Cart resolution failed after attempting to generate and load a new cart.')))
            );
          default:
            return of(new DaffResolveCartFailure('Cart resolution has failed.'));
        }
      }),
    ))
  );
}
