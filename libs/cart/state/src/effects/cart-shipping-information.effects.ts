import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartShippingInformation, DaffCart, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartShippingInformationDriver, DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartShippingInformationActionTypes,
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartShippingInformationEffects<T extends DaffCartShippingInformation, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartShippingInformationDriver) private driver: DaffCartShippingInformationServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction),
    switchMap((action: DaffCartShippingInformationLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartShippingInformationLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationLoadFailure('Failed to load cart shipping information')))
      )
    )
  )

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction),
    switchMap((action: DaffCartShippingInformationUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartShippingInformationUpdateSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationUpdateFailure('Failed to update cart shipping information')))
      )
    )
  )

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction),
    switchMap((action: DaffCartShippingInformationDelete<V['shipping_information']>) =>
      this.driver.delete(this.storage.getCartId()).pipe(
        map((resp: V) => new DaffCartShippingInformationDeleteSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationDeleteFailure('Failed to delete the cart shipping information')))
      )
    )
  )
}
