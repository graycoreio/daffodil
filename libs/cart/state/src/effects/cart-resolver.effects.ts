import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  Inject,
  PLATFORM_ID,
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
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  catchAndArrayifyErrors,
  DAFF_SERVER_STORAGE_SERVICE_ERROR_CODE,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartActionTypes,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartServerSide,
  DaffResolveCart,
  DaffResolveCartPartialSuccess,
  DaffCartActions,
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
    private actions$: Actions<DaffCartActions<T>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private cartStorage: DaffCartStorageService,
    private cartResolver: DaffCartDriverResolveService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {}

  ngrxOnInitEffects(): Action {
    return isPlatformBrowser(this.platformId) && this.cartStorage.getCartId() ? new DaffResolveCart() : { type: '' };
  }

  onResolveCart = createEffect(() => (): Observable<Action> => this.actions$.pipe(
    ofType(
      DaffCartActionTypes.ResolveCartAction,
      DaffCartActionTypes.ResolveCartSuccessAction,
    ),
    switchMap(action =>
      iif(
        // if something else resolves the cart during an outstanding resolve
        () => action.type === DaffCartActionTypes.ResolveCartSuccessAction,
        // then just cancel the outstanding operation
        EMPTY,
        this.cartResolver.getCartOrFail().pipe(
          map(({ response, errors }) =>
            errors.length > 0
              ? new DaffResolveCartPartialSuccess(response, errors.map(this.errorMatcher))
              : new DaffResolveCartSuccess(response),
          ),
          daffCartDriverHandleCartNotFound(this.cartStorage),
          catchAndArrayifyErrors<DaffResolveCartFailure | DaffResolveCartServerSide>((error) => {
            switch (true) {
              case !!error.find((err) => err.code === DAFF_SERVER_STORAGE_SERVICE_ERROR_CODE):
                return of(new DaffResolveCartServerSide([
                  this.errorMatcher(new DaffCartServerSideResolutionError(error[0].message)),
                ]));

              case !!error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE):
                return of(new DaffResolveCartFailure([
                  this.errorMatcher(new DaffCartStorageResolutionError(error[0].message)),
                ]));

              default:
                return of(new DaffResolveCartFailure(error.map((err) =>
                  // I wish there was a better way to check this
                  this.errorMatcher(err instanceof DaffInheritableError || !!(<DaffError>err).code
                    ? err
                    : new DaffCartResolutionError(err.message)),
                )));
            }
          }),
        ),
      ),
    ),
  ));
}
