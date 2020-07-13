import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartStorageService, DaffCartStorageFailure } from '@daffodil/cart';

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
export class DaffOrderEffects<T extends DaffOrder = DaffOrder> {
  constructor(
    private actions$: Actions,
    @Inject(DaffOrderDriver) private driver: DaffOrderServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}

  /**
   * An effect for the loading of an order.
   */
  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderLoadAction),
    switchMap((action: DaffOrderLoad<T>) =>
      this.driver.get(action.payload, this.storage.getCartId())
    ),
    map(resp => new DaffOrderLoadSuccess<T>(resp)),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure('Cart Storage Failed')
      : new DaffOrderLoadFailure('Failed to load order')
    ))
  )

  /**
   * An effect for the list of orders.
   */
  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderListAction),
    switchMap((action: DaffOrderList) =>
      this.driver.list(this.storage.getCartId())
    ),
    map(resp => new DaffOrderListSuccess<T>(resp)),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure('Cart Storage Failed')
      : new DaffOrderListFailure('Failed to list the orders')
    ))
  )
}
