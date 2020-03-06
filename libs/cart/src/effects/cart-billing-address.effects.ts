import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartBillingAddressActionTypes,
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
} from '../actions';
import { DaffCart } from '../models/cart';
import { DaffCartAddress } from '../models/cart-address';
import { DaffCartBillingAddressServiceInterface, DaffCartBillingAddressDriver } from '../drivers/interfaces/cart-billing-address-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';

@Injectable()
export class DaffCartBillingAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartBillingAddressDriver) private driver: DaffCartBillingAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction),
    switchMap((action: DaffCartBillingAddressLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map(resp => {
          return new DaffCartBillingAddressLoadSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffCartBillingAddressLoadFailure('Failed to load cart billing address'));
        })
      )
    )
  )

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction),
    switchMap((action: DaffCartBillingAddressUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map(resp => {
          return new DaffCartBillingAddressUpdateSuccess(resp);
        }),
        catchError(error => {
          return of(new DaffCartBillingAddressUpdateFailure('Failed to update cart billing address'));
        })
      )
    )
  )
}
