import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import {
  DaffOrderActionTypes,
  DaffPlaceOrderSuccess,
  DaffPlaceOrder,
  DaffPlaceOrderFailure
} from '../actions/order.actions';
import { DaffCheckoutDriver } from '../../drivers/injection-tokens/driver-checkout.token';
import { DaffCheckoutServiceInterface } from '../../drivers/interfaces/checkout-service.interface';

/**
 * @deprecated
 */
@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffCheckoutDriver) private checkoutDriver: DaffCheckoutServiceInterface
  ) {}

  @Effect()
  onPlaceOrder$ : Observable<any> = this.actions$.pipe(
    ofType(DaffOrderActionTypes.PlaceOrderAction),
    switchMap((action: DaffPlaceOrder) =>
      this.checkoutDriver.placeOrder(action.payload.id.toString())
        .pipe(
          map((resp) => {
            return new DaffPlaceOrderSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffPlaceOrderFailure('Failed to place order'));
          })
        )
    )
  )
}
