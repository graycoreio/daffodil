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
  of,
  EMPTY,
} from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  repeat,
  filter,
  tap,
} from 'rxjs/operators';

import {
  DaffAuthStorageService,
  DAFF_AUTH_ERROR_MATCHER,
} from '@daffodil/auth';
import {
  DAFF_AUTH_UNAUTHENTICATED_ERROR_CODES,
  DaffAuthDriverTokenCheck,
} from '@daffodil/auth/driver';
import {
  DaffError,
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
  DaffDriverHttpClientCacheServiceInterface,
} from '@daffodil/driver';

import {
  DaffAuthActionTypes,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DaffAuthCheck,
  DaffAuthStorageFailure,
  DaffAuthServerSide,
  DaffAuthLoginActionTypes,
  DaffAuthActions,
  DaffAuthLoginActions,
  DaffAuthResetToUnauthenticated,
} from '../actions/public_api';
import {
  DaffAuthStateConfig,
  DAFF_AUTH_STATE_CONFIG,
} from '../config/public_api';
import { DaffAuthUnauthenticatedHook } from '../injection-tokens/public_api';
import { DAFF_AUTH_UNAUTHENTICATED_HOOK } from '../injection-tokens/unauthenticated/hook.token';

@Injectable()
export class DaffAuthEffects {
  constructor(
    private actions$: Actions<DaffAuthActions | DaffAuthLoginActions>,
    private tokenCheck: DaffAuthDriverTokenCheck,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
    @Inject(DAFF_AUTH_STATE_CONFIG) private config: DaffAuthStateConfig,
    @Inject(DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE) private clientCache: DaffDriverHttpClientCacheServiceInterface,
    @Inject(DAFF_AUTH_UNAUTHENTICATED_HOOK) private unauthenticatedHook: DaffAuthUnauthenticatedHook,
  ) {}

  check$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action) =>
      this.tokenCheck.check().pipe(
        map(() => new DaffAuthCheckSuccess()),
        catchError((error: DaffError) => of(new DaffAuthCheckFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  removeAuthToken$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthCheckFailureAction,
    ),
    tap(() => {
      this.storage.removeAuthToken();
    }),
    switchMap(() => EMPTY),
    catchError((error: Error) => {
      switch (true) {
        case error instanceof DaffServerSideStorageError:
          return of(new DaffAuthServerSide(this.errorMatcher(error)));

        case error instanceof DaffStorageServiceError:
        default:
          return of(new DaffAuthStorageFailure(this.errorMatcher(error)));
      }
    }),
  ), { dispatch: false });

  // this needs to be defined after `check$` or else the driver call won't be run
  authCheckInterval$ = createEffect(() => of(new DaffAuthCheck()).pipe(
    repeat({ delay: this.config.checkInterval }),
    filter(() => !!this.storage.getAuthToken()),
    catchError((error: Error) => {
      switch (true) {
        case error instanceof DaffServerSideStorageError:
          return of(new DaffAuthServerSide(this.errorMatcher(error)));

        case error instanceof DaffStorageServiceError:
          return of(new DaffAuthStorageFailure(this.errorMatcher(error)));

        default:
          return EMPTY;
      }
    }),
  ));

  resetToUnauthenticated$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthCheckFailureAction,
      DaffAuthActionTypes.AuthGuardLogoutAction,
      DaffAuthLoginActionTypes.LogoutSuccessAction,
    ),
    filter((action) => {
      // if the auth check failure is for any reason other than auth failure,
      // such as a network failure, don't reset
      if (
        action.type === DaffAuthActionTypes.AuthCheckFailureAction
          && !DAFF_AUTH_UNAUTHENTICATED_ERROR_CODES.find((code) => code === action.errorMessage.code)
      ) {
        return false;
      }

      return true;
    }),
    map((action) => new DaffAuthResetToUnauthenticated(action.type)),
  ));

  clearClientCache$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.ResetToUnauthenticatedAction,
    ),
    switchMap((action) => this.unauthenticatedHook(action.reason)),
    tap(() => {
      this.clientCache.reset();
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
