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
  defer,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCartStorageService } from '@daffodil/cart';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
  DAFF_PAYPAL_ERROR_MATCHER,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressDriver,
  DaffPaypalExpressServiceInterface,
} from '@daffodil/paypal/driver';

import {
  DaffPaypalActionTypes,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '../actions/paypal.actions';

@Injectable()
export class DaffPaypalEffects<T extends DaffPaypalExpressTokenRequest, V extends DaffPaypalExpressTokenResponse>{

  constructor(
    private actions$: Actions,
    @Inject(DaffPaypalExpressDriver) private driver: DaffPaypalExpressServiceInterface<T, V>,
    @Inject(DAFF_PAYPAL_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffCartStorageService,
  ) { }

  generatePaypalExpressToken$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction),
    switchMap((action: DaffGeneratePaypalExpressToken<T>) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.generateToken(cartId, action.payload)),
      map((resp: V) => new DaffGeneratePaypalExpressTokenSuccess(resp)),
      catchError((error: DaffError) => of(new DaffGeneratePaypalExpressTokenFailure(this.errorMatcher(error)))),
    )),
  ));
}
