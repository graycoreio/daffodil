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
  DaffCartResolutionError,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
  DaffCartDriverResolveService,
  daffCartDriverHandleCartNotFound,
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
    private cartResolver: DaffCartDriverResolveService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
  ) {}

  ngrxOnInitEffects(): Action {
    return this.cartStorage.getCartId() ? new DaffResolveCart() : { type: '' };
  }

  onResolveCart = createEffect(() => (): Observable<Action> => this.actions$.pipe(
    ofType<DaffResolveCart | DaffResolveCartSuccess>(DaffCartActionTypes.ResolveCartAction, DaffCartActionTypes.ResolveCartSuccessAction),
    switchMap(action =>
      iif(
        // if something else resolves the cart during an outstanding resolve
        () => action.type === DaffCartActionTypes.ResolveCartSuccessAction,
        // then just cancel the outstanding operation
        EMPTY,
        this.cartResolver.getCartOrFail().pipe(
          map(({ response, errors }) =>
            errors.length > 0
              ? new DaffResolveCartPartialSuccess(response, errors.map(error => this.errorMatcher(error)))
              : new DaffResolveCartSuccess(response),
          ),
          daffCartDriverHandleCartNotFound(this.cartStorage),
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
                  // I wish there was a better way to check this
                  error instanceof DaffInheritableError || !!(<DaffError>error).code
                    ? error
                    : new DaffCartResolutionError(error.message),
                )]));
            }
          }),
        ),
      ),
    ),
  ));
}
