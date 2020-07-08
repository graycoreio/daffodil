import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffCartPaymentActionTypes, DaffCartPaymentUpdateWithBilling } from '@daffodil/cart';
import { substream } from '@daffodil/core';

import { 
	DaffAuthorizeNetActionTypes, 
	DaffAuthorizeNetUpdatePayment, 
	DaffAuthorizeNetUpdatePaymentFailure, 
	DaffLoadAcceptJs,
	DaffAuthorizeNetUpdatePaymentSuccess
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
  updatePayment$ : Observable<any> = this.actions$.pipe(
		ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction),
		switchMap((action: DaffAuthorizeNetUpdatePayment<T>) => 
			this.driver.generateToken(action.tokenRequest).pipe(
				map(resp => new DaffCartPaymentUpdateWithBilling(
					{
						method: this.authorizeNetPaymentId,
						payment_info: resp
					}, 
					action.address
				)),
				catchError(error => of(new DaffAuthorizeNetUpdatePaymentFailure(error)))
			)
		)
	)

	@Effect()
	updatePaymentSuccessSubstream$ : Observable<any> = this.actions$.pipe(
		substream(
			[DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction],
			DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction
		),
		map((actions: Actions[]) => new DaffAuthorizeNetUpdatePaymentSuccess())
	)

	@Effect()
	updatePaymentFailureSubstream$ : Observable<any> = this.actions$.pipe(
		substream(
			[DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction],
			DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction
		),
		map((actions: Actions[]) => new DaffAuthorizeNetUpdatePaymentFailure('The payment method has failed to update the cart.'))
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
