import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  defer,
  Observable,
  of,
} from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  tap,
} from 'rxjs/operators';

import {
  DaffAcceptJsLoadingService,
  DaffAuthorizeNetTokenRequest,
} from '@daffodil/authorizenet';
import {
  DaffAuthorizeNetDriver,
  DaffAuthorizeNetService,
  DaffAuthorizeNetPaymentId,
  DaffAuthorizeNetAcceptjsMissingError,
} from '@daffodil/authorizenet/driver';
import {
  DaffCartPaymentActionTypes,
  DaffCartPaymentUpdateWithBilling,
  DaffCartPaymentUpdateWithBillingFailure,
} from '@daffodil/cart/state';
import {
  backoff,
  DaffError,
} from '@daffodil/core';
import {
  substream,
  ErrorTransformer,
} from '@daffodil/core/state';

import {
  DaffAuthorizeNetActionTypes,
  DaffAuthorizeNetUpdatePayment,
  DaffAuthorizeNetUpdatePaymentFailure,
  DaffLoadAcceptJs,
  DaffAuthorizeNetUpdatePaymentSuccess,
  DaffLoadAcceptJsFailure,
  DaffLoadAcceptJsSuccess,
} from '../actions/authorizenet.actions';
import {
  DAFF_AUTHORIZE_NET_STATE_CONFIG,
  DaffAuthorizeNetStateConfig,
} from '../config/public_api';
import { DAFF_AUTHORIZENET_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {

  constructor(
    private actions$: Actions,
    @Inject(DaffAuthorizeNetDriver) private driver: DaffAuthorizeNetService<T>,
    @Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
    @Inject(DAFF_AUTHORIZENET_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_AUTHORIZE_NET_STATE_CONFIG) private config: DaffAuthorizeNetStateConfig,
    private acceptJsLoadingService: DaffAcceptJsLoadingService,
  ) {}


  updatePayment$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction),
    switchMap((action: DaffAuthorizeNetUpdatePayment<T>) =>
      this.driver.generateToken(action.tokenRequest).pipe(
        map(resp => new DaffCartPaymentUpdateWithBilling(
          {
            method: this.authorizeNetPaymentId,
            payment_info: resp,
          },
          action.address,
        )),
        catchError((error: DaffError) =>
          of(new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));


  updatePaymentSuccessSubstream$: Observable<any> = createEffect(() => this.actions$.pipe(
    substream(
      [DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction],
      DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction,
    ),
    map(() => new DaffAuthorizeNetUpdatePaymentSuccess()),
  ));


  updatePaymentFailureSubstream$: Observable<any> = createEffect(() => this.actions$.pipe(
    substream(
      [DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction],
      DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction,
    ),
    map(([updatePaymentAction, updatePaymentFailureAction]: [DaffAuthorizeNetUpdatePayment, DaffCartPaymentUpdateWithBillingFailure]) =>
      new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(updatePaymentFailureAction.payload[0])),
    ),
  ));


  loadAcceptJs$ = createEffect(() => (maxTries = this.config.acceptMaxRetries, ms = this.config.acceptBackoffTiming): Observable<any> => this.actions$.pipe(
    ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction),
    tap((action: DaffLoadAcceptJs) => this.acceptJsLoadingService.load()),
    switchMap(() => defer(() => of(this.acceptJsLoadingService.getAccept())).pipe(
      backoff(maxTries, ms),
      map((Accept) => Accept ? new DaffLoadAcceptJsSuccess() : new DaffLoadAcceptJsFailure(new DaffAuthorizeNetAcceptjsMissingError('Accept.js failed to load.'))),
      catchError((error: DaffError) => of(new DaffLoadAcceptJsFailure(this.errorMatcher(error)))),
    )),
  ));
}
