import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';

import { CartActionTypes } from '@daffodil/cart';

import { CloseAddToCartNotification, OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';

@Injectable()
export class AddToCartNotificationEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  productAddedToCart$ = 
    this.actions$.pipe(
      ofType(CartActionTypes.AddToCartSuccessAction),
      switchMap(() => 
        interval(3000)
        .pipe(map(() => {
          return new CloseAddToCartNotification();
        }))
      )
    )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(CartActionTypes.AddToCartAction),
    map(() => {
      return new OpenAddToCartNotification();
    })
  )
}
