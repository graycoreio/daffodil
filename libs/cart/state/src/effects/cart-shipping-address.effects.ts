import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingAddressDriver,
  DaffCartShippingAddressServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingAddressActionTypes,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
  DaffCartShippingAddressActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartShippingAddressEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffCartShippingAddressActions<T>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingAddressDriver) private driver: DaffCartShippingAddressServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction),
    switchMap((action) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartShippingAddressLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingAddressLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction),
    switchMap((action) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DaffCartShippingAddressUpdateSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingAddressUpdateFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
