import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffCartPaymentActionTypes, DaffCartPaymentUpdateWithBilling } from '@daffodil/cart';
import { backoff } from '@daffodil/core';
import { substream } from '@daffodil/core/state';

import {
	DaffAuthorizeNetActionTypes,
	DaffAuthorizeNetUpdatePayment,
	DaffAuthorizeNetUpdatePaymentFailure,
	DaffLoadAcceptJs,
	DaffAuthorizeNetUpdatePaymentSuccess,
	DaffLoadAcceptJsFailure,
	DaffLoadAcceptJsSuccess
} from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetService, DaffAuthorizeNetDriver } from '../drivers/interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetPaymentId } from '../drivers/interfaces/authorize-net-payment-id.token';
import { DaffAcceptJsLoadingService } from '../services/accept-js-loading.service';

@Injectable()
export class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {

  constructor(
    private actions$: Actions,
		@Inject(DaffAuthorizeNetDriver) private driver: DaffAuthorizeNetService<T>,
		@Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
		private acceptJsLoadingService: DaffAcceptJsLoadingService
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
        catchError((error: Error) =>
          of(new DaffAuthorizeNetUpdatePaymentFailure(error.message))
        )
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

	@Effect()
  loadAcceptJs$ = (maxTries = 10, ms = 10): Observable<any> => this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction),
		tap((action: DaffLoadAcceptJs) => this.acceptJsLoadingService.load()),
		switchMap(() => of(null).pipe(
			map(() => this.acceptJsLoadingService.getAccept()),
			backoff(maxTries, ms),
			map(() => new DaffLoadAcceptJsSuccess()),
			catchError(() => of(new DaffLoadAcceptJsFailure('Accept Js has failed to load.')))
		))
	)
}
