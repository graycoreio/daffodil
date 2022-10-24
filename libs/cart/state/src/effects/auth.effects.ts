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
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import {
  DaffAuthActionTypes,
  DaffAuthLoginActionTypes,
} from '@daffodil/auth/state';
import {
  DAFF_CART_ERROR_MATCHER,
  DaffCartStorageService,
  DaffCart,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartCreateFailure,
  DaffCartCreateSuccess,
  DaffResolveCartFailure,
  DaffResolveCartSuccess,
} from '../actions/public_api';

/**
 */
// TODO: move to `@daffodil/cart-auth`?
@Injectable()
export class DaffCartAuthEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private cartStorage: DaffCartStorageService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
  ) {}

  mergeAfterLogin$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCompleteAction),
    switchMap(() => of(null).pipe(
      map(() => this.cartStorage.getCartId()),
      switchMap(cartId => this.driver.merge(cartId).pipe(
        map(resp => new DaffResolveCartSuccess(resp.response)),
        catchError((innerError: DaffError) => of(
          new DaffResolveCartFailure([this.errorMatcher(innerError)]),
        )),
      )),
    )),
  ));

  createAfterLogout$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LogoutSuccessAction),
    switchMap(() => this.driver.create().pipe(
      map(resp => new DaffCartCreateSuccess(resp)),
      catchError((innerError: DaffError) => of(
        new DaffCartCreateFailure(this.errorMatcher(innerError)),
      )),
    )),
  ));
}
