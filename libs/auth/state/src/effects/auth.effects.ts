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
  Observable,
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
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffError,
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthActionTypes,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DaffAuthCheck,
  DaffAuthGuardCheckCompletion,
  DaffAuthGuardCheck,
  DaffAuthStorageFailure,
  DaffAuthServerSide,
} from '../actions/public_api';
import {
  DaffAuthStateConfig,
  DAFF_AUTH_STATE_CONFIG,
} from '../config/public_api';

@Injectable()
export class DaffAuthEffects {
  constructor(
    private actions$: Actions,
    @Inject(DaffAuthDriver) private authDriver: DaffAuthServiceInterface,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
    @Inject(DAFF_AUTH_STATE_CONFIG) private config: DaffAuthStateConfig,
  ) {}

  check$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.authDriver.check().pipe(
        map(() => new DaffAuthCheckSuccess()),
        catchError((error: DaffError) => of(new DaffAuthCheckFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  guardCheck$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.authDriver.check().pipe(
        map(() => new DaffAuthGuardCheckCompletion(true)),
        catchError((error: DaffError) => of(new DaffAuthGuardCheckCompletion(false))),
      ),
    ),
  ));

  removeAuthToken$ = createEffect(() => this.actions$.pipe(
    ofType<DaffAuthCheckFailure | DaffAuthGuardCheckCompletion>(
      DaffAuthActionTypes.AuthGuardCheckCompletionAction,
      DaffAuthActionTypes.AuthCheckFailureAction,
    ),
    filter(action => {
      if (action.type === DaffAuthActionTypes.AuthGuardCheckCompletionAction && !action.result) {
        return false;
      }

      return true;
    }),
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
  ));

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
}
