import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffStorageServiceError
} from '@daffodil/core'

import {
  DaffCartOrderActionTypes,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure,
  DaffCartCreate
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartOrderServiceInterface, DaffCartOrderDriver } from '../drivers/interfaces/cart-order-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartPaymentMethod } from '../models/cart-payment';
import { DaffCartOrderResult } from '../models/cart-order-result';

@Injectable()
export class DaffCartOrderEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  R extends DaffCartOrderResult = DaffCartOrderResult
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartOrderDriver) private driver: DaffCartOrderServiceInterface<T, V, R>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  placeOrder$ = this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderAction),
    switchMap((action: DaffCartPlaceOrder<V>) => this.driver.placeOrder(this.storage.getCartId(), action.payload).pipe(
      map((resp: R) => new DaffCartPlaceOrderSuccess<R>(resp)),
      catchError(error => of(new DaffCartPlaceOrderFailure('Failed to place order')))
    )),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure('Cart Storage Failed')
      : new DaffCartPlaceOrderFailure('Failed to place order')
    ))
  )

  @Effect()
  resetCart$ = this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction),
    mapTo(new DaffCartCreate()),
  )
}
