import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffStorageServiceError } from '@daffodil/core';

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
    switchMap((action: DaffCartAddressUpdate<T>) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.update(cartId, action.payload)),
      map((resp: V) => new DaffCartAddressUpdateSuccess(resp)),
      catchError(error => of(error.name === DaffStorageServiceError.name
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartAddressUpdateFailure('Failed to update cart address')
      )),
    )),
  )
}
