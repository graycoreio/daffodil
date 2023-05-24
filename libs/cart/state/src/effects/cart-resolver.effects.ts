import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  defer,
  EMPTY,
  iif,
  Observable,
  of,
  throwError,
} from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
  DaffCartServerSideResolutionError,
  DaffCartStorageResolutionError,
  DaffCartNotFoundOrCreatedResolutionError,
  DaffCartResolutionError,
  DaffCartExceededMaxResolutionAttemptsError,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
  DaffCartNotFoundError,
} from '@daffodil/cart/driver';
import {
  DaffStorageServiceError,
  DaffServerSideStorageError,
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffDriverResponse } from '@daffodil/driver';

import {
  DaffCartActionTypes,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartServerSide,
  DaffResolveCart,
  DaffResolveCartPartialSuccess,
} from '../actions/public_api';
import {
  DAFF_CART_STATE_CONFIG,
  DaffCartStateConfig,
} from '../config/public_api';
import { DaffCartFacade } from '../facades/cart/cart.facade';

/**
 * An effect for resolving a guest cart for a customer.
 * It will:
 * 1. Check storage for an id, and retrieve the cart if it exists.
 * 2. If a cart doesn't exist, it will attempt to create a new cart exactly once.
 * 3. If the cart resolution fails, it will bailout.
 */
@Injectable()
export class DaffCartResolverEffects<T extends DaffCart = DaffCart>
implements OnInitEffects {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_CART_STATE_CONFIG) private config: DaffCartStateConfig,
    private cartStorage: DaffCartStorageService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private facade: DaffCartFacade,
  ) {}

  ngrxOnInitEffects(): Action {
    return new DaffResolveCart();
  }

  onResolveCart = createEffect(() => (): Observable<Action> => this.actions$.pipe(
    ofType<DaffResolveCart | DaffResolveCartSuccess>(DaffCartActionTypes.ResolveCartAction, DaffCartActionTypes.ResolveCartSuccessAction),
    switchMap(action =>
      iif(
        // if something else resolves the cart during an outstanding resolve
        () => action.type === DaffCartActionTypes.ResolveCartSuccessAction,
        // then just cancel the outstanding operation
        EMPTY,
        defer(() => of(this.cartStorage.getCartId())).pipe(
          withLatestFrom(this.facade.keepAttemptingResolution$),
          switchMap(([cartId, keepAttemptingResolution]) =>
            cartId
              ? of({ id: cartId })
              : keepAttemptingResolution
                ? this.driver.create()
                : throwError(() => new DaffCartExceededMaxResolutionAttemptsError(`Not attempting automatic cart creation during cart resolution because the max attempts exceed the configured limit of ${this.config.maxResolutionAttempts}`)),
          ),
          switchMap(({ id }) => this.driver.get(id)),
          switchMap(({ response, errors }) => {
            if (errors.length === 0) {
              return of(new DaffResolveCartSuccess(response));
            }

            const hasOnlyRecoverableErrors = errors.reduce((acc, error) => acc && error.recoverable, true);

            if (hasOnlyRecoverableErrors) {
              return of(new DaffResolveCartPartialSuccess(response, errors.map(error => this.errorMatcher(error))));
            }

            if (errors.find(error => error instanceof DaffCartNotFoundError)) {
              return this.driver.create().pipe(
                switchMap(({ id }) => this.driver.get(id)),
                map(resp => new DaffResolveCartSuccess(resp.response)),
                catchError((innerError: DaffError) => of(
                  new DaffResolveCartFailure([this.errorMatcher(
                    new DaffCartNotFoundOrCreatedResolutionError(innerError.message),
                  )]),
                )),
              );
            }

            // there are no special case errors, DaffResolveCartFailure will suffice
            // just map the errors
            return of(new DaffResolveCartFailure(errors.map(error => this.errorMatcher(
              // I wish there was a better way to check this
              error instanceof DaffInheritableError || !!(<DaffError>error).code
                ? error
                : new DaffCartResolutionError(error.message),
            ))),
            );
          }),
          catchError((error: Error) => {
            switch (true) {
              case error instanceof DaffServerSideStorageError:
                return of(new DaffResolveCartServerSide(this.errorMatcher(
                  new DaffCartServerSideResolutionError(error.message),
                )));

              case error instanceof DaffStorageServiceError:
                return of(new DaffResolveCartFailure([this.errorMatcher(
                  new DaffCartStorageResolutionError(error.message),
                )]));

              case error instanceof DaffCartExceededMaxResolutionAttemptsError:
                return of(new DaffResolveCartFailure([this.errorMatcher(error)]));

              default:
                return of(new DaffResolveCartFailure([this.errorMatcher(
                  new DaffCartResolutionError(error.message),
                )]));
            }
          }),
        ),
      ),
    ),
  ));
}
