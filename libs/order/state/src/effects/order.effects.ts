import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCart
} from '@daffodil/cart';
import {
  DaffOrder,
  DaffOrderServiceInterface,
  DaffOrderDriver
} from '@daffodil/order';

import {
  DaffOrderActionTypes,
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
} from '../actions/order.actions';

@Injectable()
export class DaffOrderEffects<
  T extends DaffOrder = DaffOrder,
  V extends DaffCart = DaffCart
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffOrderDriver) private driver: DaffOrderServiceInterface<T>,
  ) {}

  /**
   * An effect for the loading of an order.
   */
  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderLoadAction),
    switchMap((action: DaffOrderLoad<T, V>) =>
      this.driver.get(action.orderId, action.cartId).pipe(
        map(resp => new DaffOrderLoadSuccess<T>(resp)),
        catchError(error => of(new DaffOrderLoadFailure('Failed to load order')))
      )
    ),
  )

  /**
   * An effect for the listing of orders.
   */
  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderListAction),
    switchMap((action: DaffOrderList) =>
      this.driver.list(action.payload).pipe(
        map(resp => new DaffOrderListSuccess<T>(resp)),
        catchError(error => of(new DaffOrderListFailure('Failed to list the orders')))
      )
    ),
  )
}
