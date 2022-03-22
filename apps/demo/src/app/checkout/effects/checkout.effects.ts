import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import { OrderActionTypes } from '@daffodil/checkout';

import { ShowReviewView } from '../actions/checkout.actions';
import { PaymentActionTypes } from '../actions/payment.actions';

@Injectable()
export class CheckoutEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}


  onToggleShowPaymentForm$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(PaymentActionTypes.ToggleShowPaymentFormAction),
    map(() => new ShowReviewView()),
  ));


  onPlaceOrder$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(OrderActionTypes.PlaceOrderAction),
    tap(() => {
      this.router.navigateByUrl('/checkout/thank-you');
    }),
  ), { dispatch: false });
}
