import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartItem, DaffCartItemInput, DaffCart, DaffCartStorageService, DaffCartItemStateDebounceTime } from '@daffodil/cart';
import { DaffCartItemDriver, DaffCartItemServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartItemActionTypes,
  DaffCartItemLoad,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemDelete,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure,
  DaffCartItemUpdate,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemList,
  DaffCartItemListSuccess,
  DaffCartItemListFailure,
  DaffCartItemAdd,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
	DaffCartItemStateReset,
} from '../actions/public_api';

@Injectable()
export class DaffCartItemEffects<
  T extends DaffCartItem,
  U extends DaffCartItemInput,
	V extends DaffCart,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartItemDriver) private driver: DaffCartItemServiceInterface<T, U, V>,
		private storage: DaffCartStorageService,
		@Inject(DaffCartItemStateDebounceTime) private cartItemStateDebounceTime: number
  ) {}

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemListAction),
    switchMap((action: DaffCartItemList) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartItemListSuccess(resp)),
        catchError(error => of(new DaffCartItemListFailure('Failed to list cart items')))
      )
    )
  )

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemLoadAction),
    switchMap((action: DaffCartItemLoad<T>) =>
      this.driver.get(this.storage.getCartId(), action.itemId).pipe(
        map((resp: T) => new DaffCartItemLoadSuccess(resp)),
        catchError(error => of(new DaffCartItemLoadFailure('Failed to load cart item')))
      )
    )
  )

  @Effect()
  add$ = this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemAddAction),
    switchMap((action: DaffCartItemAdd<U>) =>
			this.driver.add(
				this.storage.getCartId(), 
				action.input
			).pipe(
        map((resp: V) => new DaffCartItemAddSuccess(resp)),
        catchError(error => of(new DaffCartItemAddFailure('Failed to add cart item')))
      )
    )
	)

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemUpdateAction),
    switchMap((action: DaffCartItemUpdate<T>) =>
			this.driver.update(
				this.storage.getCartId(),
				action.itemId,
				action.changes
			).pipe(
				map((resp: V) => new DaffCartItemUpdateSuccess(resp, action.itemId)),
				catchError(error => of(new DaffCartItemUpdateFailure('Failed to update cart item')))
			)
		)
	)

	@Effect()
  resetCartItemStateAfterChange$ = this.actions$.pipe(
		ofType(DaffCartItemActionTypes.CartItemAddSuccessAction, DaffCartItemActionTypes.CartItemUpdateSuccessAction),
		debounceTime(this.cartItemStateDebounceTime),
		map(() => new DaffCartItemStateReset())
  )

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemDeleteAction),
    switchMap((action: DaffCartItemDelete<T>) =>
      this.driver.delete(this.storage.getCartId(), action.itemId).pipe(
        map((resp: V) => new DaffCartItemDeleteSuccess(resp)),
        catchError(error => of(new DaffCartItemDeleteFailure('Failed to remove the cart item')))
      )
    )
  )
}
