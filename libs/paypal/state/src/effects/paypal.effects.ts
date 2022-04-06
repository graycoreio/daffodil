import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  ofType,
  createEffect,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
  DAFF_PAYPAL_ERROR_MATCHER,
} from '@daffodil/paypal';
import {
  DaffPaypalDriver,
  DaffPaypalServiceInterface,
} from '@daffodil/paypal/driver';

import {
  DaffPaypalActionTypes,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '../actions/paypal.actions';

@Injectable()
export class DaffPaypalEffects<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse>{

  constructor(
    private actions$: Actions,
    @Inject(DaffPaypalDriver) private driver: DaffPaypalServiceInterface<T, V>,
    @Inject(DAFF_PAYPAL_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) { }

  generatePaypalExpressToken$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction),
    switchMap((action: DaffGeneratePaypalExpressToken<T>) => this.driver.generateToken(action.payload).pipe(
      map((resp: V) => new DaffGeneratePaypalExpressTokenSuccess(resp)),
      catchError((error: DaffError) => of(new DaffGeneratePaypalExpressTokenFailure(this.errorMatcher(error)))),
    )),
  ));
}
