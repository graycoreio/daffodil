import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { PaymentActionTypes } from '../actions/payment.actions';
import { ShowReviewView, CheckoutActionTypes, PlaceOrderSuccess } from '../actions/checkout.actions';
import { Router } from '@angular/router';
import { NavigatingToThankYou } from '../../thank-you/actions/thank-you.actions';

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

  @Effect()
  onPlaceOrder$ : Observable<any> = this.actions$.pipe(
    ofType(CheckoutActionTypes.PlaceOrderAction),
    map(() => {
      return new PlaceOrderSuccess();
    })
  );

  @Effect()
  onPlaceOrderSuccess$ : Observable<any> = this.actions$.pipe(
    ofType(CheckoutActionTypes.PlaceOrderSuccessAction),
    map(() => {
      this.router.navigateByUrl('/thank-you');
      return new NavigatingToThankYou();
    })
  );
}
