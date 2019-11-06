import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { DaffCartActionTypes } from '@daffodil/cart';

import { OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';

@Injectable()
export class AddToCartNotificationEffects {

  constructor(private actions$: Actions) {}
    
  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    map(() => new OpenAddToCartNotification())
  )
}
