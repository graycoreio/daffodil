import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, delay } from 'rxjs/operators';

import { CartActionTypes } from '@daffodil/state';

import { CloseAddToCartNotification, OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';

@Injectable()
export class AddToCartNotificationEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  productAddedToCart$ = 
    this.actions$.pipe(
      ofType(CartActionTypes.AddToCartSuccessAction),
        delay(3000),
        map(() => {
          return new CloseAddToCartNotification();
        })
    )

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(CartActionTypes.AddToCartAction),
    map(() => {
      return new OpenAddToCartNotification();
    })
  )
}