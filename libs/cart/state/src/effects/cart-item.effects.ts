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
  combineLatest,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  debounceTime,
  mergeMap,
  take,
  concatMap,
} from 'rxjs/operators';

import {
  DaffCartItemInput,
  DaffCart,
  DaffCartStorageService,
  daffCartGetAffectedItems,
} from '@daffodil/cart';
import {
  DaffCartDriverResolveService,
  DaffCartItemDriver,
  DaffCartItemServiceInterface,
  daffCartDriverHandleCartNotFound,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartItemActionTypes,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemListSuccess,
  DaffCartItemListFailure,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
  DaffCartItemStateReset,
  DaffCartItemDeleteOutOfStockSuccess,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemActions,
} from '../actions/public_api';
import { DaffCartFacade } from '../facades/cart/cart.facade';
import { DaffCartItemStateDebounceTime } from '../injection-tokens/cart-item-state-debounce-time';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartItemEffects<
  T extends DaffCart = DaffCart,
  U extends DaffCartItemInput = DaffCartItemInput,
> {
  constructor(
    private actions$: Actions<DaffCartItemActions<T, U>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartItemDriver) private driver: DaffCartItemServiceInterface<T, U>,
    private storage: DaffCartStorageService,
    @Inject(DaffCartItemStateDebounceTime) private cartItemStateDebounceTime: number,
    private cartResolver: DaffCartDriverResolveService<T>,
    private cartFacade: DaffCartFacade<T>,
  ) {}

  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemListAction),
    switchMap((action) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartItemListSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartItemListFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));

  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemLoadAction),
    switchMap((action) =>
      this.driver.get(this.storage.getCartId(), action.itemId).pipe(
        map((resp) => new DaffCartItemLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartItemLoadFailure(error.map(this.errorMatcher), action.itemId))),
      ),
    ),
  ));

  add$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemAddAction),
    concatMap((action) => combineLatest([
      of(action),
      this.cartResolver.getCartIdOrFail(),
    ])),
    mergeMap(([action, id]) =>
      combineLatest([
        this.driver.add(
          id,
          action.input,
        ),
        this.cartFacade.cart$.pipe(
          take(1),
        ),
      ]).pipe(
        map(([newCart, oldCart]) => new DaffCartItemAddSuccess(
          newCart,
          daffCartGetAffectedItems(oldCart.items, newCart.items)[0],
        )),
        catchAndArrayifyErrors(error => of(new DaffCartItemAddFailure(error.map(this.errorMatcher), action.placeholderId))),
      ),
    ),
    daffCartDriverHandleCartNotFound(this.storage),
    // TODO: figure out how to get placeholder ID here
    catchAndArrayifyErrors(error => of(new DaffCartItemAddFailure(error.map(this.errorMatcher)))),
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemUpdateAction),
    mergeMap((action) =>
      this.driver.update(
        this.storage.getCartId(),
        action.itemId,
        action.changes,
      ).pipe(
        map((resp) => new DaffCartItemUpdateSuccess(resp, action.itemId)),
        catchAndArrayifyErrors(error => of(new DaffCartItemUpdateFailure(error.map(this.errorMatcher), action.itemId))),
      ),
    ),
  ));

  resetCartItemStateAfterChange$ = createEffect(() => this.actions$.pipe(
    ofType(
      // these actions will cause the cart item state reset
      DaffCartItemActionTypes.CartItemAddSuccessAction,
      DaffCartItemActionTypes.CartItemUpdateSuccessAction,
    ),
    debounceTime(this.cartItemStateDebounceTime),
    map((action) => new DaffCartItemStateReset(action.itemId)),
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemDeleteAction),
    mergeMap((action) =>
      this.driver.delete(this.storage.getCartId(), action.itemId).pipe(
        map((resp) => new DaffCartItemDeleteSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartItemDeleteFailure(error.map(this.errorMatcher), action.itemId))),
      ),
    ),
  ));

  removeOutOfStock$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartItemActionTypes.CartItemDeleteOutOfStockAction),
    switchMap((action) => this.cartFacade.outOfStockItems$.pipe(
      take(1),
    )),
    switchMap(items => items.length > 0
      ? combineLatest(items.map(item => this.driver.delete(this.storage.getCartId(), item.id))).pipe(
        map(partialCarts => <T>Object.assign({}, ...partialCarts)),
      )
      : this.cartFacade.cart$.pipe(
        take(1),
      ),
    ),
    map((cart) => new DaffCartItemDeleteOutOfStockSuccess(cart)),
    catchAndArrayifyErrors(error => of(new DaffCartItemDeleteOutOfStockFailure(error.map(this.errorMatcher)))),
  ));
}
