import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  defer,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCartAddress,
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartAddressDriver,
  DaffCartAddressServiceInterface,
} from '@daffodil/cart/driver';
import { DaffStorageServiceError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

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
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartAddressDriver) private driver: DaffCartAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartAddressActionTypes.CartAddressUpdateAction),
    switchMap((action: DaffCartAddressUpdate<T>) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.update(cartId, action.payload)),
      map((resp: V) => new DaffCartAddressUpdateSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartAddressUpdateFailure(this.errorMatcher(error)),
      )),
    )),
  ));
}
