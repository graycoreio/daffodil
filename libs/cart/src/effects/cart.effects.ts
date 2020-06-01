import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, switchMapTo, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffStorageServiceError
} from '@daffodil/core'

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
import { DaffCart } from '../models/cart';
import { DaffCartServiceInterface, DaffCartDriver } from '../drivers/interfaces/cart-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  create$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateAction),
    switchMap((action: DaffCartCreate) => this.driver.create().pipe(
      map((resp: {id: T['id']}) => new DaffCartCreateSuccess(resp)),
      catchError(error => of(new DaffCartCreateFailure('Failed to create cart')))
    ))
  )

  @Effect({
    dispatch: false
  })
  storeId$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.CartLoadSuccessAction),
    tap((action: DaffCartCreateSuccess<T> | DaffCartLoadSuccess<T>) => {
      this.storage.setCartId(String(action.payload.id))
    }),
    switchMapTo(EMPTY),
    catchError(error => of(new DaffCartStorageFailure()))
  )

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) => this.driver.get(this.storage.getCartId()).pipe(
      map((resp: T) => new DaffCartLoadSuccess(resp)),
    )),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure()
      : new DaffCartLoadFailure('Failed to load cart')
    ))
  )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    switchMap((action: DaffAddToCart) =>
      this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(
        map((resp: T) => new DaffAddToCartSuccess(resp)),
        catchError(error => of(new DaffAddToCartFailure('Failed to add item to cart')))
      )
    )
  )

  @Effect()
  clear$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartClearAction),
    switchMap((action: DaffCartClear) => this.driver.clear(this.storage.getCartId()).pipe(
      map((resp: T) => new DaffCartClearSuccess(resp)),
      catchError(error => of(new DaffCartClearFailure('Failed to clear the cart.')))
    ))
  )
}
