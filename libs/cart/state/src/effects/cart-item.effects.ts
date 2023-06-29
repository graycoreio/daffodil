import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  combineLatest,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  debounceTime,
  mergeMap,
  take,
  concatMap,
} from 'rxjs/operators';

import {
  DaffCartItemInput,
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartDriverResolveService,
  DaffCartItemDriver,
  DaffCartItemServiceInterface,
  daffCartDriverHandleCartNotFound,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';

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
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
  DaffCartItemStateReset,
  DaffCartItemDeleteOutOfStock,
  DaffCartItemDeleteOutOfStockSuccess,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemActions,
} from '../actions/public_api';
import { DaffCartItemStateDebounceTime } from '../injection-tokens/cart-item-state-debounce-time';
import { DaffStatefulCartItem } from '../models/public_api';
import { getDaffCartSelectors } from '../selectors/public_api';

@Injectable()
export class DaffCartItemEffects<
  T extends DaffStatefulCartItem,
  U extends DaffCartItemInput,
  V extends DaffCart,
> {
  constructor(
    private actions$: Actions<DaffCartItemActions<T, U, V>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartItemDriver) private driver: DaffCartItemServiceInterface<T, U, V>,
    private storage: DaffCartStorageService,
    @Inject(DaffCartItemStateDebounceTime) private cartItemStateDebounceTime: number,
    private store: Store,
    private cartResolver: DaffCartDriverResolveService,
  ) {}


  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemListAction),
    switchMap((action: DaffCartItemList) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartItemListSuccess(resp)),
        catchError(error => of(new DaffCartItemListFailure(this.errorMatcher(error)))),
      ),
    ),
  ));


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemLoadAction),
    switchMap((action: DaffCartItemLoad<T>) =>
      this.driver.get(this.storage.getCartId(), action.itemId).pipe(
        map((resp: T) => new DaffCartItemLoadSuccess(resp)),
        catchError(error => of(new DaffCartItemLoadFailure(this.errorMatcher(error), action.itemId))),
      ),
    ),
  ));

  private addCartItem$(
    cartId: DaffCart['id'],
    input: U,
  ) {
    return this.driver.add(
      cartId,
      input,
    ).pipe(
      map((resp: V) => new DaffCartItemAddSuccess(resp)),
      catchError(error => of(new DaffCartItemAddFailure(this.errorMatcher(error)))),
    );
  }

  add$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemAddAction),
    concatMap((action) => combineLatest([
      of(action),
      this.cartResolver.getCartIdOrFail(),
    ])),
    mergeMap(([action, id]) =>
      this.addCartItem$(
        id,
        action.input,
      ),
    ),
    daffCartDriverHandleCartNotFound(this.storage),
    catchError(error => of(new DaffCartItemAddFailure(this.errorMatcher(error)))),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemUpdateAction),
    mergeMap((action: DaffCartItemUpdate<T>) =>
      this.driver.update(
        this.storage.getCartId(),
        action.itemId,
        action.changes,
      ).pipe(
        map((resp: V) => new DaffCartItemUpdateSuccess(resp, action.itemId)),
        catchError(error => of(new DaffCartItemUpdateFailure(this.errorMatcher(error), action.itemId))),
      ),
    ),
  ));


  resetCartItemStateAfterChange$ = createEffect(() => this.actions$.pipe(
    ofType(
      // these actions will reset the debounce interval
      DaffCartItemActionTypes.CartItemAddSuccessAction,
      DaffCartItemActionTypes.CartItemUpdateSuccessAction,
      DaffCartItemActionTypes.CartItemUpdateAction,
    ),
    debounceTime(this.cartItemStateDebounceTime),
    ofType(
      // these actions will cause the cart item state reset
      DaffCartItemActionTypes.CartItemAddSuccessAction,
      DaffCartItemActionTypes.CartItemUpdateSuccessAction,
    ),
    map(() => new DaffCartItemStateReset()),
  ));


  delete$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemDeleteAction),
    mergeMap((action: DaffCartItemDelete<T>) =>
      this.driver.delete(this.storage.getCartId(), action.itemId).pipe(
        map((resp: V) => new DaffCartItemDeleteSuccess(resp)),
        catchError(error => of(new DaffCartItemDeleteFailure(this.errorMatcher(error), action.itemId))),
      ),
    ),
  ));


  removeOutOfStock$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemDeleteOutOfStockAction),
    switchMap((action: DaffCartItemDeleteOutOfStock) => this.store.pipe(
      select(getDaffCartSelectors().selectOutOfStockCartItems),
      take(1),
    )),
    switchMap(items => items.length > 0
      ? combineLatest(items.map(item => this.driver.delete(this.storage.getCartId(), item.id))).pipe(
        map(partialCarts => Object.assign({}, ...partialCarts)),
      )
      : this.store.pipe(
        select(getDaffCartSelectors().selectCartValue),
        take(1),
      ),
    ),
    map(cart => new DaffCartItemDeleteOutOfStockSuccess(cart)),
    catchError(error => of(new DaffCartItemDeleteOutOfStockFailure(this.errorMatcher(error)))),
  ));
}
