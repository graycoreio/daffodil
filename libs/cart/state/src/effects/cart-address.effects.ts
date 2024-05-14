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
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartAddressDriver,
  DaffCartAddressServiceInterface,
} from '@daffodil/cart/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartAddressActionTypes,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  DaffCartStorageFailure,
  DaffCartAddressActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartAddressEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffCartAddressActions>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartAddressDriver) private driver: DaffCartAddressServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartAddressActionTypes.CartAddressUpdateAction),
    switchMap((action) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.update(cartId, action.payload)),
      map((resp) => new DaffCartAddressUpdateSuccess(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartAddressUpdateFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));
}
