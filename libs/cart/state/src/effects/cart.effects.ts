import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, switchMapTo, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffStorageServiceError
} from '@daffodil/core'
import { DaffCart, DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartDriver, DaffCartServiceInterface } from '@daffodil/cart/driver';

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
  DaffCartStorageFailure
} from '../actions/public_api';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  create$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateAction),
    switchMap((action: DaffCartCreate) => this.driver.create().pipe(
      map((resp: {id: T['id']}) => new DaffCartCreateSuccess(resp)),
      catchError(error => of(new DaffCartCreateFailure(this.errorMatcher(error))))
    ))
  )

  @Effect()
  storeId$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction),
    switchMap((action: DaffCartCreateSuccess<T>) => of(null).pipe(
      tap(() => {
        this.storage.setCartId(String(action.payload.id))
      }),
      switchMapTo(EMPTY),
      catchError(error => of(new DaffCartStorageFailure(this.errorMatcher(error)))),
    )),
  )

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.get(cartId)),
      map((resp: T) => new DaffCartLoadSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartLoadFailure(this.errorMatcher(error))
      )),
    )),
  )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    switchMap((action: DaffAddToCart) =>
      this.driver.addToCart(String(action.payload.productId), action.payload.qty).pipe(
        map((resp: T) => new DaffAddToCartSuccess(resp)),
        catchError(error => of(new DaffAddToCartFailure(this.errorMatcher(error))))
      )
    )
  )

  @Effect()
  clear$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartClearAction),
    switchMap((action: DaffCartClear) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.clear(cartId)),
      map((resp: T) => new DaffCartClearSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartClearFailure(this.errorMatcher(error))
      )),
    )),
  )
}
