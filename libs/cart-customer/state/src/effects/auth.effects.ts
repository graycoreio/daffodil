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
  catchError,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

import {
  DaffAuthActionTypes,
  DaffAuthActions,
  DaffAuthLoginActionTypes,
  DaffAuthLoginActions,
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterActions,
  DaffAuthResetPasswordActionTypes,
  DaffAuthResetPasswordActions,
} from '@daffodil/auth/state';
import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DAFF_CART_CUSTOMER_ERROR_MATCHER } from '@daffodil/cart-customer';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import {
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
} from '@daffodil/cart/state';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

/**
 * Handles merging and creating carts in response to auth actions.
 */
@Injectable()
export class DaffCartCustomerAuthEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffAuthLoginActions | DaffAuthActions | DaffAuthRegisterActions | DaffAuthResetPasswordActions>,
    @Inject(DAFF_CART_CUSTOMER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private cartStorage: DaffCartStorageService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
  ) {}

  mergeAfterLogin$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthLoginActionTypes.LoginSuccessAction,
      DaffAuthRegisterActionTypes.RegisterSuccessAction,
      DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction,
    ),
    filter((action) => {
      if ((action.type === DaffAuthRegisterActionTypes.RegisterSuccessAction || action.type === DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction) && !action.token) {
        return false;
      }
      return true;
    }),
    map(() => this.cartStorage.getCartId()),
    switchMap((cartId) =>
      cartId
        ? this.driver.merge(cartId).pipe(
          map(resp => new DaffResolveCartSuccess(resp.response)),
          catchError((error: DaffError) =>
            // if a merge fails, just try to load the cart
            // with an empty ID, the customer cart driver shouldn't need it
            this.driver.get('').pipe(
              map(resp => new DaffResolveCartSuccess(resp.response)),
              catchError((innerError: DaffError) => of(
                new DaffResolveCartFailure([this.errorMatcher(innerError)]),
              )),
            ),
          ),
        )
        : this.driver.get('').pipe(
          map(resp => new DaffResolveCartSuccess(resp.response)),
          catchError((innerError: DaffError) => of(
            new DaffResolveCartFailure([this.errorMatcher(innerError)]),
          )),
        ),
    ),
  ));
}
