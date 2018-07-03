import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { CartActionTypes } from '@daffodil/core';
import { RedirectToCartSuccess } from '../actions/product.actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private router: Router) {}

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(CartActionTypes.AddToCartAction),
    map(() => {
      this.router.navigateByUrl('/cart');
      console.log('test');
      return new RedirectToCartSuccess('');
    })
  )
}
