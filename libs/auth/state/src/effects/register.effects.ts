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
  DAFF_AUTH_ERROR_MATCHER,
} from '@daffodil/auth';
import {
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
} from '@daffodil/auth/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthRegisterActionTypes,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  DaffAuthComplete,
} from '../actions/public_api';

@Injectable()
export class DaffAuthRegisterEffects<
  T extends DaffAccountRegistration = DaffAccountRegistration,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffRegisterDriver) private registerDriver: DaffRegisterServiceInterface<T>,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
  ) {}

  register$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthRegisterActionTypes.RegisterAction),
    switchMap((action: DaffAuthRegister<T>) =>
      iif(
        () => action.autoLogin,
        defer(() => this.registerDriver.register(action.registration).pipe(
          tap(token => this.storage.setAuthToken(token)),
          switchMap(() => of(new DaffAuthRegisterSuccess(), new DaffAuthComplete())),
        )),
        defer(() => this.registerDriver.registerOnly(action.registration).pipe(
          map(() => new DaffAuthRegisterSuccess()),
        )),
      ).pipe(
        catchError((error: DaffError) =>
          of(new DaffAuthRegisterFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));
}
