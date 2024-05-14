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
  DaffCartBillingAddressDriver,
  DaffCartBillingAddressServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartBillingAddressActionTypes,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
  DaffCartBillingAddressActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartBillingAddressEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffCartBillingAddressActions<T>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartBillingAddressDriver) private driver: DaffCartBillingAddressServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction),
    switchMap((action) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartBillingAddressLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartBillingAddressLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction),
    switchMap((action) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DaffCartBillingAddressUpdateSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartBillingAddressUpdateFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
