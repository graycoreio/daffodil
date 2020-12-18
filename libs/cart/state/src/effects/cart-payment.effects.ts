import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartPaymentMethod, DaffCart, DaffCartAddress, DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartPaymentDriver, DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';

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
  DaffCartPaymentUpdateWithBilling,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartPaymentUpdateWithBillingFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartPaymentEffects<
  T extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  V extends DaffCart = DaffCart,
  R extends DaffCartAddress = DaffCartAddress,
> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface<T, V, R>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction),
    switchMap((action: DaffCartPaymentLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartPaymentLoadSuccess(resp)),
        catchError(error => of(new DaffCartPaymentLoadFailure(this.errorMatcher(error))))
      )
    )
  )

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction),
    switchMap((action: DaffCartPaymentUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartPaymentUpdateSuccess(resp)),
        catchError(error => of(new DaffCartPaymentUpdateFailure(this.errorMatcher(error))))
      )
    )
  )

  @Effect()
  updateWithBilling$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction),
    switchMap((action: DaffCartPaymentUpdateWithBilling<T, R>) =>
      this.driver.updateWithBilling(this.storage.getCartId(), action.payment, action.address).pipe(
        map(resp => new DaffCartPaymentUpdateWithBillingSuccess(resp)),
        catchError(error => of(new DaffCartPaymentUpdateWithBillingFailure(this.errorMatcher(error))))
      )
    )
  )

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction),
    switchMap((action: DaffCartPaymentRemove) =>
      this.driver.remove(this.storage.getCartId()).pipe(
        mapTo(new DaffCartPaymentRemoveSuccess()),
        catchError(error => of(new DaffCartPaymentRemoveFailure(this.errorMatcher(error))))
      )
    )
  )
}
