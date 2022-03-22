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
  Observable,
  of,
} from 'rxjs';
import {
  switchMap,
  catchError,
  map,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
  DaffCartServerSideResolutionError,
  DaffCartStorageResolutionError,
  DaffCartNotFoundOrCreatedResolutionError,
  DaffCartResolutionError,
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

import {
  DaffCartActionTypes,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartServerSide,
  DaffResolveCart,
  DaffResolveCartPartialSuccess,
} from '../actions/public_api';

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
    private cartStorage: DaffCartStorageService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
  ) {}

  ngrxOnInitEffects(): Action {
    return new DaffResolveCart();
  }


  onResolveCart = createEffect(() => (): Observable<Action> => this.actions$.pipe(
    ofType(DaffCartActionTypes.ResolveCartAction),
    switchMap(() =>
      of(null).pipe(
        map(() => this.cartStorage.getCartId()),
        switchMap(cartId =>
          cartId ? of({ id: cartId }) : this.driver.create(),
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

          if (errors.filter(error => error instanceof DaffCartNotFoundError).length > 0) {
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
            default:
              return of(new DaffResolveCartFailure([this.errorMatcher(
                new DaffCartResolutionError(error.message),
              )]));
          }
        }),
      ),
    ),
  ));
}
