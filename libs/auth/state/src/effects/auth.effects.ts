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
} from 'rxjs/operators';

import { DAFF_AUTH_ERROR_MATCHER } from '@daffodil/auth';
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

@Injectable()
export class DaffAuthEffects {
  constructor(
    private actions$: Actions,
    @Inject(DaffAuthDriver) private authDriver: DaffAuthServiceInterface,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  check$: Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.checkToken().pipe(
        map(() => new DaffAuthCheckSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthCheckFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));

  guardCheck$: Observable<DaffAuthGuardCheckCompletion> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.checkToken().pipe(
        map(() => new DaffAuthGuardCheckCompletion(true)),
        catchError((error: DaffError) =>
          of(new DaffAuthGuardCheckCompletion(false)),
        ),
      ),
    ),
  ));

  private checkToken() {
    return this.authDriver.check();
  }
}
