import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
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
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartOrderServiceInterface, DaffCartOrderDriver } from '../drivers/interfaces/cart-order-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartPaymentMethod } from '../models/cart-payment';

@Injectable()
export class DaffCartOrderEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartOrderDriver) private driver: DaffCartOrderServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  placeOrder$ = this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderAction),
    switchMap((action: DaffCartPlaceOrder) => this.driver.placeOrder(this.storage.getCartId()).pipe(
      map((resp: T) => new DaffCartPlaceOrderSuccess(resp)),
    )),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure()
      : new DaffCartPlaceOrderFailure('Failed to place order')
    ))
  )
}
