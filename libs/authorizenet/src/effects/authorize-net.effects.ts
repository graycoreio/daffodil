import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffPaymentDriver } from '@daffodil/checkout';

import { DaffAuthorizeNetPaymentService } from '../drivers/authorize-net.service';
import { 
	DaffAuthorizeNetActionTypes, 
	DaffAuthorizeNetGenerateToken, 
	DaffAuthorizeNetGenerateTokenFailure, 
	DaffAuthorizeNetGenerateTokenSuccess, 
	DaffLoadAcceptJs
} from '../actions/authorizenet.actions';

const ACCEPT_LIBRARY = 'https://jstest.authorize.net/v1/Accept.js';

@Injectable()
export class DaffAuthorizeNetEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffPaymentDriver) private driver: DaffAuthorizeNetPaymentService
  ){}

  @Effect()
  generateToken$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.GenerateTokenAction),
		switchMap((action: DaffAuthorizeNetGenerateToken) => 
			this.driver.generateToken(action.payload).pipe(
				map(resp => {
					return new DaffAuthorizeNetGenerateTokenSuccess(resp);
				}),
				catchError(error => of(new DaffAuthorizeNetGenerateTokenFailure(error)))
			)
		)
	)
	
	@Effect({ dispatch: false })
  loadAcceptJs$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction),
		tap((action: DaffLoadAcceptJs) => {
			const acceptJsScript = document.createElement('script');
			acceptJsScript.async = true;
			acceptJsScript.setAttribute('type', 'text/javascript');
			acceptJsScript.setAttribute('src', ACCEPT_LIBRARY);
			acceptJsScript.setAttribute('charset', 'utf-8');
			document.body.appendChild(acceptJsScript);
		})
  )
}
