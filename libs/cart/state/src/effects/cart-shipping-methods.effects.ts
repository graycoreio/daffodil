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
  catchError,
} from 'rxjs/operators';

import {
  DaffCartShippingRate,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingMethodsDriver,
  DaffCartShippingMethodsServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingMethodsActionTypes,
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartShippingMethodsEffects<T extends DaffCartShippingRate> {

  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingMethodsDriver) private driver: DaffCartShippingMethodsServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction),
    switchMap((action: DaffCartShippingMethodsLoad) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartShippingMethodsLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingMethodsLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
