import { Injectable } from '@angular/core';
import {
  Actions,
  ofType,
  createEffect,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  EMPTY,
  Observable,
  switchMap,
  tap,
} from 'rxjs';

import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';
import {
  DaffPaypalActionTypes,
  DaffGeneratePaypalExpressTokenSuccess,
} from '@daffodil/paypal/state';

/**
 * Effects to handle redirecting the user automatically when a paypal express token generation completes successfully.
 */
@Injectable()
export class DaffPaypalExpressRedirectEffects<T extends DaffPaypalExpressTokenResponse = DaffPaypalExpressTokenResponse>{
  constructor(
    private actions$: Actions,
  ) { }

  redirectUserToStartUrl$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction),
    tap((action: DaffGeneratePaypalExpressTokenSuccess<T>) => {
      const url = action.payload.urls.start;
      if (url) {
        window.location.assign(action.payload.urls.start);
      }
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
