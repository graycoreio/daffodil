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
  iif,
  defer,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';

import {
  DAFF_AUTH_ERROR_MATCHER,
  DaffAuthResetPasswordInfo,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffResetPasswordDriver,
  DaffResetPasswordServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffError,
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthResetPasswordActionTypes,
  DaffResetPassword,
  DaffResetPasswordSuccess,
  DaffResetPasswordFailure,
  DaffSendResetEmail,
  DaffSendResetEmailSuccess,
  DaffSendResetEmailFailure,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
} from '../actions/public_api';

@Injectable()
export class DaffAuthResetPasswordEffects<
  T extends DaffAuthResetPasswordInfo = DaffAuthResetPasswordInfo,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffResetPasswordDriver) private driver: DaffResetPasswordServiceInterface<T>,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
  ) {}

  sendResetEmail$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthResetPasswordActionTypes.SendResetEmailAction),
    switchMap((action: DaffSendResetEmail) =>
      this.driver.sendResetEmail(action.email).pipe(
        map(() =>
          new DaffSendResetEmailSuccess(),
        ),
        catchError((error: DaffError) =>
          of(new DaffSendResetEmailFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));

  resetPassword$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthResetPasswordActionTypes.ResetPasswordAction),
    switchMap((action: DaffResetPassword<T>) =>
      iif(
        () => action.autoLogin,
        defer(() => this.driver.resetPassword(action.info).pipe(
          tap(token => this.storage.setAuthToken(token)),
          map((token) => new DaffResetPasswordSuccess(token)),
        )),
        defer(() => this.driver.resetPasswordOnly(action.info).pipe(
          map(() => new DaffResetPasswordSuccess()),
        )),
      ).pipe(
        catchError((error: DaffError) => {
          switch (true) {
            case error instanceof DaffServerSideStorageError:
              return of(
                new DaffAuthServerSide(this.errorMatcher(error)),
                new DaffResetPasswordFailure(this.errorMatcher(error)),
              );

            case error instanceof DaffStorageServiceError:
              return of(
                new DaffAuthStorageFailure(this.errorMatcher(error)),
                new DaffResetPasswordFailure(this.errorMatcher(error)),
              );

            default:
              return of(new DaffResetPasswordFailure(this.errorMatcher(error)));
          }
        }),
      ),
    ),
  ));
}
