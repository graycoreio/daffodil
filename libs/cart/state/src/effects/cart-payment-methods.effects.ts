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
  DaffCartPaymentMethod,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartPaymentMethodsDriver,
  DaffCartPaymentMethodsServiceInterface,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartPaymentMethodsActionTypes,
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartPaymentMethodsEffects<T extends DaffCartPaymentMethod> {

  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartPaymentMethodsDriver) private driver: DaffCartPaymentMethodsServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction),
    switchMap((action: DaffCartPaymentMethodsLoad) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartPaymentMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartPaymentMethodsLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
