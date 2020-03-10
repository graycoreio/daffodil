import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartPaymentActionTypes,
  DaffCartPaymentLoad,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
} from '../actions';
import { DaffCart } from '../models/cart';
import { DaffCartPaymentMethod } from '../models/cart-payment';
import { DaffCartPaymentServiceInterface, DaffCartPaymentDriver } from '../drivers/interfaces/cart-payment-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';

@Injectable()
export class DaffCartPaymentEffects<T extends DaffCartPaymentMethod, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction),
    switchMap((action: DaffCartPaymentLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartPaymentLoadSuccess(resp)),
        catchError(error => of(new DaffCartPaymentLoadFailure('Failed to load cart payment')))
      )
    )
  )

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction),
    switchMap((action: DaffCartPaymentUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartPaymentUpdateSuccess(resp)),
        catchError(error => of(new DaffCartPaymentUpdateFailure('Failed to update cart payment')))
      )
    )
  )

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction),
    switchMap((action: DaffCartPaymentRemove) =>
      this.driver.remove(this.storage.getCartId()).pipe(
        mapTo(new DaffCartPaymentRemoveSuccess()),
        catchError(error => of(new DaffCartPaymentRemoveFailure('Failed to remove the cart payment')))
      )
    )
  )
}
