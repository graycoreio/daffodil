import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartAddress, DaffCart, DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartAddressDriver, DaffCartAddressServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartAddressActionTypes,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  DaffCartStorageFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: Function,
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
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartAddressUpdateFailure(this.errorMatcher(error))
      )),
    )),
  )
}
