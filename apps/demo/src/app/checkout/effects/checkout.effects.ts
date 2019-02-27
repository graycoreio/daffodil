import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { OrderActionTypes } from '@daffodil/checkout';

import { PaymentActionTypes } from '../actions/payment.actions';
import { ShowReviewView } from '../actions/checkout.actions';

@Injectable()
export class CheckoutEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect()
  onToggleShowPaymentForm$ : Observable<any> = this.actions$.pipe(
    ofType(PaymentActionTypes.ToggleShowPaymentFormAction),
    map(() => {
      return new ShowReviewView();
    })
  );

  @Effect({ dispatch: false })
  onPlaceOrder$ : Observable<any> = this.actions$.pipe(
    ofType(OrderActionTypes.PlaceOrderAction),
    tap(() => {
      this.router.navigateByUrl('/checkout/thank-you');
    })
  );
}
