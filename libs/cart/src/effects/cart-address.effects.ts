import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartAddressActionTypes,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  DaffCartStorageFailure,
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartAddress } from '../models/cart-address';
import { DaffCartAddressServiceInterface, DaffCartAddressDriver } from '../drivers/interfaces/cart-address-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffStorageServiceError } from '@daffodil/core';

@Injectable()
export class DaffCartAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCartAddressDriver) private driver: DaffCartAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService
  ) {}

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartAddressActionTypes.CartAddressUpdateAction),
    switchMap((action: DaffCartAddressUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartAddressUpdateSuccess(resp)),
        catchError(error => of(new DaffCartAddressUpdateFailure('Failed to update cart address')))
      )
    ),
    catchError(error => of(error instanceof DaffStorageServiceError
      ? new DaffCartStorageFailure('Cart Storage Failed')
      : new DaffCartAddressUpdateFailure('Failed to update cart address')
    ))
  )
}
