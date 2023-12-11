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
  DaffAccountRegistration,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffError,
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
  DaffAuthRegisterActions,
} from '../actions/public_api';
import { DAFF_AUTH_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffAuthRegisterEffects<
  T extends DaffAccountRegistration = DaffAccountRegistration,
> {
  constructor(
    private actions$: Actions<DaffAuthRegisterActions<T>>,
    @Inject(DaffRegisterDriver) private registerDriver: DaffRegisterServiceInterface<T>,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
  ) {}

  register$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthRegisterActionTypes.RegisterAction),
    switchMap((action) =>
      iif(
        () => action.autoLogin,
        defer(() => this.registerDriver.register(action.registration).pipe(
          tap(token => this.storage.setAuthToken(token)),
          map((token) => new DaffAuthRegisterSuccess(token)),
        )),
        defer(() => this.registerDriver.registerOnly(action.registration).pipe(
          map(() => new DaffAuthRegisterSuccess()),
        )),
      ).pipe(
        catchError((error: DaffError) => {
          switch (true) {
            case error instanceof DaffServerSideStorageError:
              return of(
                new DaffAuthServerSide(this.errorMatcher(error)),
                new DaffAuthRegisterFailure(this.errorMatcher(error)),
              );

            case error instanceof DaffStorageServiceError:
              return of(
                new DaffAuthStorageFailure(this.errorMatcher(error)),
                new DaffAuthRegisterFailure(this.errorMatcher(error)),
              );

            default:
              return of(new DaffAuthRegisterFailure(this.errorMatcher(error)));
          }
        }),
      ),
    ),
  ));
}
