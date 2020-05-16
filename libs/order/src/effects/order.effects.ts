import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffOrderActionTypes,
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
} from '../actions/order.actions';
import { DaffOrderServiceInterface, DaffOrderDriver } from '../drivers/interfaces/order-service.interface';
import { DaffOrder } from '../models/order';

@Injectable()
export class DaffOrderEffects<T extends DaffOrder> {
  constructor(
    private actions$: Actions,
    @Inject(DaffOrderDriver) private driver: DaffOrderServiceInterface<T>,
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderLoadAction),
    switchMap((action: DaffOrderLoad<T>) => this.driver.get(action.payload).pipe(
      map(resp => new DaffOrderLoadSuccess<T>(resp)),
      catchError(error => of(new DaffOrderLoadFailure('Failed to load order')))
    )),
  )

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderListAction),
    switchMap((action: DaffOrderList) => this.driver.list().pipe(
      map(resp => new DaffOrderListSuccess<T>(resp)),
      catchError(error => of(new DaffOrderListFailure('Failed to list the orders')))
    ))
  )
}
