import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartActionTypes,
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffAddToCart,
  DaffCartResetSuccess,
  DaffCartResetFailure
} from '../actions/cart.actions';
import { DaffCartServiceInterface, DaffCartDriver } from '../drivers/interfaces/cart-service.interface';
import { DaffCart } from '../models/cart';
import { DaffCartStorageService } from '../storage/cart-storage.service';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService) { }

  @Effect()
  load$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) =>
      this.driver.get(this.storage.getCartId())
        .pipe(
          map((resp) => {
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
      this.driver.addToCart(action.payload.productId, action.payload.qty)
        .pipe(
          map((resp) => {
            return new DaffAddToCartSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffAddToCartFailure('Failed to add item to cart'));
          })
        )
    )
  )

  @Effect()
  clearCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartResetAction),
    switchMap(() =>
      this.driver.clear(this.storage.getCartId()).pipe(
        map(() => {
          return new DaffCartResetSuccess();
        }
        ),
        catchError(error => {
          return of(new DaffCartResetFailure('Failed to clear the cart.'));
        })
      )
    )
  )
}
