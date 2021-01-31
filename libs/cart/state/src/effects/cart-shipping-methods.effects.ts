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
  DaffCartShippingRate,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartShippingMethodsDriver,
  DaffCartShippingMethodsServiceInterface,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingMethodsActionTypes,
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartShippingMethodsEffects<T extends DaffCartShippingRate> {

  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingMethodsDriver) private driver: DaffCartShippingMethodsServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction),
    switchMap((action: DaffCartShippingMethodsLoad) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartShippingMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingMethodsLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  );
}
