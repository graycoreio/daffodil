import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, switchMapTo, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

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
} from '../actions';
import { DaffCart } from '../models/cart';
import { DaffCartServiceInterface, DaffCartDriver } from '../drivers/interfaces/cart-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  create$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateAction),
    switchMap((action: DaffCartCreate) =>
      this.driver.create().pipe(
        map(resp => {
          return new DaffCartCreateSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffCartCreateFailure('Failed to create cart'));
        })
      )
    )
  )

  @Effect({
    dispatch: false
  })
  storeId$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateSuccessAction),
    tap((action: DaffCartCreateSuccess<DaffCart>) =>
      this.storage.setCartId(String(action.payload.id))
    ),
    switchMapTo(EMPTY)
  )

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map(resp => {
          return new DaffCartLoadSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffCartLoadFailure('Failed to load cart'));
        })
      )
    )
  )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    switchMap((action: DaffAddToCart) =>
      this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(
        map(resp => {
          return new DaffAddToCartSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffAddToCartFailure('Failed to add item to cart'));
        })
      )
    )
  )

  @Effect()
  clear$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartClearAction),
    switchMap((action: DaffCartClear) =>
      this.driver.clear(this.storage.getCartId()).pipe(
        map(resp => {
          return new DaffCartClearSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffCartClearFailure('Failed to clear the cart.'));
        })
      )
    )
  )
}
