import { Injectable, Inject } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { DaffDriver, DaffDriverInterface, DaffCartServiceInterface } from '@daffodil/driver';

import { 
  CartActionTypes, 
  CartLoad, 
  CartLoadSuccess, 
  CartLoadFailure, 
  AddToCartSuccess,
  AddToCartFailure,
  AddToCart} from '../actions/cart.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffDriver) private driver: DaffDriverInterface) {}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(CartActionTypes.CartLoadAction),
    switchMap((action: CartLoad) =>
      this.driver.cartService.get()
        .pipe(
          map((resp) => {
            return new CartLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new CartLoadFailure("Failed to load cart"));
          })
        )
    )
  )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(CartActionTypes.AddToCartAction),
    switchMap((action: AddToCart) =>
      this.driver.cartService.addToCart(action.payload.productId, action.payload.qty)
        .pipe(
          map((resp) => {
            return new AddToCartSuccess(resp);
          }),
          catchError(error => {
            return of(new AddToCartFailure("Failed to add item to cart"));
          })
        )
    )
  )
}
