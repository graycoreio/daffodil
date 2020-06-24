import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffCartPaymentUpdate } from '@daffodil/cart';

import { 
	DaffAuthorizeNetActionTypes, 
	DaffAuthorizeNetGenerateToken, 
	DaffAuthorizeNetGenerateTokenFailure, 
	DaffLoadAcceptJs,
	DaffAuthorizeNetGenerateTokenSuccess
} from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetService, DaffAuthorizeNetDriver } from '../drivers/interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetPaymentId } from '../drivers/interfaces/authorize-net-payment-id.token';
import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken } from '../drivers/public_api';

const ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
const ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';

@Injectable()
export class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {

  constructor(
    private actions$: Actions,
		@Inject(DaffAuthorizeNetDriver) private driver: DaffAuthorizeNetService<T>,
		@Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
		@Inject(DaffAuthorizeNetConfigToken) public config: DaffAuthorizeNetConfig
	){}

  @Effect()
  generateToken$ : Observable<any> = this.actions$.pipe(
		ofType(DaffAuthorizeNetActionTypes.GenerateTokenAction),
		switchMap((action: DaffAuthorizeNetGenerateToken<T>) => 
			this.driver.generateToken(action.payload).pipe(
				switchMap(resp => [
					new DaffAuthorizeNetGenerateTokenSuccess(),
					new DaffCartPaymentUpdate({
						method: this.authorizeNetPaymentId,
						payment_info: resp
					})
				]),
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
			acceptJsScript.setAttribute('src', this.config.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
			acceptJsScript.setAttribute('charset', 'utf-8');
			document.body.appendChild(acceptJsScript);
		})
  )
}
