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
  filter,
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
  DaffCartDriverErrorCodes,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartActionTypes,
  DaffCartCreate,
  DaffCartCreateFailure,
  DaffCartCreateSuccess,
  DaffCartLoadFailure,
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
    map(() => new DaffCartCreate()),
  ));

  createWhenUnathorized$ = createEffect(() => this.actions$.pipe(
    ofType<DaffResolveCartFailure | DaffCartLoadFailure>(DaffCartActionTypes.ResolveCartFailureAction, DaffCartActionTypes.CartLoadFailureAction),
    filter(action => !!action.payload.find(err => err.code === DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART)),
    map(() => new DaffCartCreate()),
  ));
}
