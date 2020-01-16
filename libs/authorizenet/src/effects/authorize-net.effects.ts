import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DaffPaymentDriver } from '@daffodil/checkout';

import { DaffAuthorizeNetPaymentService } from '../drivers/authorize-net.service';
import { DaffAuthorizeNetActionTypes, DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';

@Injectable()
export class DaffAuthorizeNetEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffPaymentDriver) private driver: DaffAuthorizeNetPaymentService
  ){}

  @Effect({ dispatch: false })
  generateToken$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.GenerateTokenAction),
    tap((action: DaffAuthorizeNetGenerateToken) => {
			this.driver.generateToken(action.payload);
		})
  )
}
