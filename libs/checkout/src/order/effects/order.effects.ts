import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  Observable,
  of,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  tap,
} from 'rxjs/operators';

import { DaffCheckoutDriver } from '../../drivers/injection-tokens/driver-checkout.token';
import { DaffCheckoutServiceInterface } from '../../drivers/interfaces/checkout-service.interface';
import {
  DaffOrderActionTypes,
  DaffPlaceOrderSuccess,
  DaffPlaceOrder,
  DaffPlaceOrderFailure,
} from '../actions/order.actions';

/**
 * @deprecated
 */
@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffCheckoutDriver) private checkoutDriver: DaffCheckoutServiceInterface,
  ) {}

  @Effect()
  onPlaceOrder$: Observable<any> = this.actions$.pipe(
    ofType(DaffOrderActionTypes.PlaceOrderAction),
    switchMap((action: DaffPlaceOrder) =>
      this.checkoutDriver.placeOrder(action.payload.id.toString())
        .pipe(
          map((resp) => new DaffPlaceOrderSuccess(resp)),
          catchError(error => of(new DaffPlaceOrderFailure('Failed to place order'))),
        ),
    ),
  );
}
