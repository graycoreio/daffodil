import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffStorageServiceError
} from '@daffodil/core'
import { DaffCart, DaffCartPaymentMethod, DaffCartOrderResult, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartOrderDriver, DaffCartOrderServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartOrderActionTypes,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure,
  DaffCartCreate
} from '../actions/public_api';

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
    switchMap((action: DaffCartPlaceOrder<V>) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.placeOrder(cartId, action.payload)),
      map((resp: R) => new DaffCartPlaceOrderSuccess<R>(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartPlaceOrderFailure('Failed to place order')
      )),
    )),
  )

  @Effect()
  resetCart$ = this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction),
    mapTo(new DaffCartCreate()),
  )
}
