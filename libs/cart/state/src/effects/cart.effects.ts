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
  of,
  EMPTY,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  switchMapTo,
  tap,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import { DaffStorageServiceError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartActionTypes,
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffAddToCart,
  DaffCartClear,
  DaffCartClearSuccess,
  DaffCartClearFailure,
  DaffCartCreate,
  DaffCartCreateSuccess,
  DaffCartCreateFailure,
  DaffCartStorageFailure,
  DaffCartLoadPartialSuccess,
} from '../actions/public_api';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  create$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateAction),
    switchMap((action: DaffCartCreate) => this.driver.create().pipe(
      map((resp: {id: T['id']}) => new DaffCartCreateSuccess(resp)),
      catchError(error => of(new DaffCartCreateFailure(this.errorMatcher(error)))),
    )),
  ));


  storeId$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction),
    switchMap((action: DaffCartCreateSuccess<T>) => of(null).pipe(
      tap(() => {
        this.storage.setCartId(action.payload.id);
      }),
      switchMapTo(EMPTY),
      catchError(error => of(new DaffCartStorageFailure(this.errorMatcher(error)))),
    )),
  ));


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.get(cartId)),
      map(({ response, errors }) => {
        if (errors.length === 0) {
          return new DaffCartLoadSuccess(response);
        }

        const hasOnlyRecoverableErrors = errors.reduce((acc, error) => acc && error.recoverable, true);

        if (hasOnlyRecoverableErrors) {
          return new DaffCartLoadPartialSuccess(response, errors.map(error => this.errorMatcher(error)));
        }

        return new DaffCartLoadFailure(errors.map(error => this.errorMatcher(error)));
      }),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartLoadFailure([this.errorMatcher(error)]),
      )),
    )),
  ));


  addToCart$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    switchMap((action: DaffAddToCart) =>
      this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(
        map((resp: T) => new DaffAddToCartSuccess(resp)),
        catchError(error => of(new DaffAddToCartFailure(this.errorMatcher(error)))),
      ),
    ),
  ));


  clear$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartClearAction),
    switchMap((action: DaffCartClear) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.clear(cartId)),
      map((resp: T) => new DaffCartClearSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartClearFailure(this.errorMatcher(error)),
      )),
    )),
  ));
}
