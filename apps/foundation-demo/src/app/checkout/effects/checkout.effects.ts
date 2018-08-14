import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { PaymentActionTypes } from '../actions/payment.actions';
import { ShowReviewView } from '../actions/checkout.actions';

@Injectable()
export class CheckoutEffects {

  constructor(
    private actions$: Actions
  ) {}

  @Effect()
  onToggleShowPaymentForm$ : Observable<any> = this.actions$.pipe(
    ofType(PaymentActionTypes.ToggleShowPaymentFormAction),
    map(() => {
      return new ShowReviewView();
    })
  );
}
