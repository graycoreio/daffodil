import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
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
  DaffCartShippingAddressDriver,
  DaffCartShippingAddressServiceInterface,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingAddressActionTypes,
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartShippingAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingAddressDriver) private driver: DaffCartShippingAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction),
    switchMap((action: DaffCartShippingAddressLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartShippingAddressLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingAddressLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction),
    switchMap((action: DaffCartShippingAddressUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartShippingAddressUpdateSuccess(resp)),
        catchError(error => of(new DaffCartShippingAddressUpdateFailure(this.errorMatcher(error)))),
      ),
    ),
  );
}
