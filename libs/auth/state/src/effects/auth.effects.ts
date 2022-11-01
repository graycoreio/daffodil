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
} from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  repeat,
  filter,
} from 'rxjs/operators';

import {
  DaffAuthStorageService,
  DAFF_AUTH_ERROR_MATCHER,
} from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '@daffodil/auth/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthActionTypes,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DaffAuthCheck,
  DaffAuthGuardCheckCompletion,
  DaffAuthGuardCheck,
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

  check$: Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.authDriver.check().pipe(
        map(() => new DaffAuthCheckSuccess()),
        catchError((error: DaffError) => {
          this.storage.removeAuthToken();
          return of(new DaffAuthCheckFailure(this.errorMatcher(error)));
        }),
      ),
    ),
  ));

  guardCheck$: Observable<DaffAuthGuardCheckCompletion> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.authDriver.check().pipe(
        map(() => new DaffAuthGuardCheckCompletion(true)),
        catchError((error: DaffError) => {
          this.storage.removeAuthToken();
          return of(new DaffAuthGuardCheckCompletion(false));
        }),
      ),
    ),
  ));

  // this needs to be defined after `check$` or else the driver call won't be run
  authCheckInterval$ = createEffect(() => of(new DaffAuthCheck()).pipe(
    repeat({ delay: this.config.checkInterval }),
    filter(() => !!this.storage.getAuthToken()),
  ));
}
