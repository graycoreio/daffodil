import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap, mapTo } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { DaffCartPaymentActionTypes, DaffCartPaymentUpdateWithBilling, DaffCartPaymentUpdateWithBillingFailure } from '@daffodil/cart/state';
import { backoff, DaffError } from '@daffodil/core';
import { substream } from '@daffodil/core/state';
import { DaffAcceptJsLoadingService, DaffAuthorizeNetTokenRequest, DAFF_AUTHORIZENET_ERROR_MATCHER } from '@daffodil/authorizenet';
import { DaffAuthorizeNetDriver, DaffAuthorizeNetService, DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';

import {
	DaffAuthorizeNetActionTypes,
	DaffAuthorizeNetUpdatePayment,
	DaffAuthorizeNetUpdatePaymentFailure,
	DaffLoadAcceptJs,
	DaffAuthorizeNetUpdatePaymentSuccess,
	DaffLoadAcceptJsFailure,
	DaffLoadAcceptJsSuccess
} from '../actions/authorizenet.actions';

@Injectable()
export class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {

  constructor(
    private actions$: Actions,
		@Inject(DaffAuthorizeNetDriver) private driver: DaffAuthorizeNetService<T>,
		@Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
		@Inject(DAFF_AUTHORIZENET_ERROR_MATCHER) private errorMatcher: Function,
		private acceptJsLoadingService: DaffAcceptJsLoadingService
	) {}

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
        catchError((error: DaffError) =>
          of(new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(error)))
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
		mapTo(new DaffAuthorizeNetUpdatePaymentSuccess())
	)

	@Effect()
	updatePaymentFailureSubstream$ : Observable<any> = this.actions$.pipe(
		substream(
			[DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction],
			DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction
		),
    map(([updatePaymentAction, updatePaymentFailureAction]: [DaffAuthorizeNetUpdatePayment, DaffCartPaymentUpdateWithBillingFailure]) =>
      // TODO: change once cart failure actions use DaffStateError
      new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher({
        code: 'DaffCartPaymentUpdateWithBillingFailure placeholder code',
        message: updatePaymentFailureAction.payload
      }))
    )
	)

	@Effect()
  loadAcceptJs$ = (maxTries = 10, ms = 10): Observable<any> => this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction),
		tap((action: DaffLoadAcceptJs) => this.acceptJsLoadingService.load()),
		switchMap(() => of(null).pipe(
			map(() => this.acceptJsLoadingService.getAccept()),
			backoff(maxTries, ms),
			mapTo(new DaffLoadAcceptJsSuccess()),
			catchError((error: DaffError) => of(new DaffLoadAcceptJsFailure(this.errorMatcher(error))))
		))
	)
}
