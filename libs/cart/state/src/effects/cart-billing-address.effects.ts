import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartAddress, DaffCart, DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartBillingAddressDriver, DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartBillingAddressActionTypes,
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartBillingAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
    @Inject(DaffCartBillingAddressDriver) private driver: DaffCartBillingAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction),
    switchMap((action: DaffCartBillingAddressLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartBillingAddressLoadSuccess(resp)),
        catchError(error => of(new DaffCartBillingAddressLoadFailure(this.errorMatcher(error))))
      )
    )
  )

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction),
    switchMap((action: DaffCartBillingAddressUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartBillingAddressUpdateSuccess(resp)),
        catchError(error => of(new DaffCartBillingAddressUpdateFailure(this.errorMatcher(error))))
      )
    )
  )
}
