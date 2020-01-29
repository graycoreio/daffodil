import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of , Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { 
  DaffCartActionTypes, 
  DaffCartLoad, 
  DaffCartLoadSuccess, 
  DaffCartLoadFailure, 
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffAddToCart} from '../actions/cart.actions';
import { DaffCartDriver } from '../drivers/injection-tokens/cart-driver.token';
import { DaffCartServiceInterface } from '../drivers/interfaces/cart-service.interface';
import { DaffCart } from '../models/cart';

@Injectable()
export class DaffCartEffects<T extends DaffCart> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>) {}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) =>
      this.driver.get()
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
}
