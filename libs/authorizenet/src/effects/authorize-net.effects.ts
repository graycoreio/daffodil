import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { 
	DaffAuthorizeNetActionTypes, 
	DaffAuthorizeNetGenerateToken, 
	DaffAuthorizeNetGenerateTokenFailure, 
	DaffAuthorizeNetGenerateTokenSuccess, 
	DaffLoadAcceptJs
} from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetDriver } from '../drivers/injection-tokens/authorize-net-driver.token';
import { DaffAuthorizeNetService } from '../drivers/interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

const ACCEPT_LIBRARY = 'https://jstest.authorize.net/v1/Accept.js';

@Injectable()
export class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse> {

  constructor(
    private actions$: Actions,
    @Inject(DaffAuthorizeNetDriver) private driver: DaffAuthorizeNetService<T, V>
  ){}

  @Effect()
  generateToken$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.GenerateTokenAction),
		switchMap((action: DaffAuthorizeNetGenerateToken<T>) => 
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
