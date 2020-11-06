import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, debounceTime, take } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartItem, DaffCartItemInput, DaffCart, DaffCartStorageService, DaffCartOrderResult, DaffCartItemStateDebounceTime, DaffCartItemStateEnum } from '@daffodil/cart';
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
import { select, Store } from '@ngrx/store';
import { DaffCartReducersState } from '../reducers/public_api';
import { getDaffCartItemEntitiesSelectors } from '../selectors/cart-item-entities/cart-item-entities.selectors';

@Injectable()
export class DaffCartItemEffects<
  T extends DaffCartItem,
  U extends DaffCartItemInput,
	V extends DaffCart,
	X extends DaffCartOrderResult
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartItemDriver) private driver: DaffCartItemServiceInterface<T, U, V>,
		private storage: DaffCartStorageService,
		private store: Store<DaffCartReducersState<V, X, T>>,
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
      combineLatest([
				this.store.pipe(
					select(getDaffCartItemEntitiesSelectors<V, X, T>().selectAllCartItems),
					take(1)
				),
				this.driver.add(this.storage.getCartId(), action.input)
			]).pipe(
        map(([cartItems, resp]: [T[], V]) => new DaffCartItemAddSuccess({
					...resp,
					items: this.updateAddedCartItemState(cartItems, <T[]>resp.items)
				})),
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
				map((resp: V) => new DaffCartItemUpdateSuccess({
					...resp,
					items: this.updateMutatedCartItemState(<T[]>resp.items, action.itemId)
				})),
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

	private updateAddedCartItemState(oldCartItems: T[], newCartItems: T[]): T[] {
		return newCartItems.map(newItem => {
			const oldItem = oldCartItems.find(originalItem => originalItem.item_id === newItem.item_id);
			return !oldItem || (oldItem && oldItem.qty !== newItem.qty) ? 
				{ ...newItem, state: DaffCartItemStateEnum.New } : newItem;
		})
	}

	private updateMutatedCartItemState(cartItems: T[], itemId: T['item_id']): T[] {
		return cartItems.map(item => item.item_id === itemId ? 
			{ ...item, state: DaffCartItemStateEnum.Updated} : item)
	}
}
