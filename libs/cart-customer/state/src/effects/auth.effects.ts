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
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
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

import { DAFF_CART_CUSTOMER_ERROR_MATCHER } from '../injection-tokens/public_api';

/**
 * Handles merging and resolving carts in response to auth actions.
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
          // if a merge fails, just try to load the customer cart
          catchError(() => this.getCustomerCart()),
        )
        : this.getCustomerCart(),
    ),
  ));

  /**
   * Resolves the customer cart when the user is authenticated but there is no cart ID in storage,
   * such as when the page is refreshed after the cart ID was cleared.
   * Once the cart is resolved, its ID is stored, so subsequent auth checks will not refetch it.
   */
  resolveAfterAuthCheck$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckSuccessAction),
    filter(() => !this.cartStorage.getCartId()),
    switchMap(() => this.getCustomerCart()),
  ));

  /**
   * Loads the customer cart. The customer cart driver does not need a cart ID
   * since the cart is determined by the authenticated customer.
   */
  private getCustomerCart(): Observable<DaffResolveCartSuccess<T> | DaffResolveCartFailure> {
    return this.driver.get('').pipe(
      map(resp => new DaffResolveCartSuccess(resp.response)),
      catchError((error: DaffError) => of(
        new DaffResolveCartFailure([this.errorMatcher(error)]),
      )),
    );
  }
}
