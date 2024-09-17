import {
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  OnInitEffects,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  EMPTY,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

import { DaffLoadAcceptJs } from '@daffodil/authorizenet/state';
import { DaffCartStorageService } from '@daffodil/cart';
import {
  DaffCartDriverResolveService,
  DaffCartPaymentDriver,
  DaffCartPaymentServiceInterface,
  DaffCartShippingAddressDriver,
  DaffCartShippingAddressServiceInterface,
  DaffCartShippingInformationDriver,
  DaffCartShippingInformationServiceInterface,
  daffCartDriverHandleCartNotFound,
} from '@daffodil/cart/driver';
import {
  DAFF_CART_ERROR_MATCHER,
  daffCartPaymentProcessorUpdate,
} from '@daffodil/cart/state';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DAFF_PAYMENT_ERROR_MATCHER,
  DAFF_PAYMENT_PROCESSOR_COLLECTION,
  DaffPaymentProcessorCollection,
} from '@daffodil/payment/state';

import {
  DemoCheckoutStepActionTypes,
  DemoCheckoutStepActions,
  DemoCompleteAddressStepFailure,
  DemoCompleteAddressStepSuccess,
  DemoCompleteBillingStepFailure,
  DemoCompleteBillingStepSuccess,
  DemoCompleteShippingStepFailure,
  DemoCompleteShippingStepSuccess,
} from '../actions/checkout-step.actions';
import {
  DemoCheckoutStep,
  DemoCheckoutStepService,
} from '../step/public_api';

@Injectable()
export class CheckoutEffects implements OnInitEffects {
  constructor(
    private actions$: Actions<DemoCheckoutStepActions>,
    private stepService: DemoCheckoutStepService,
    private storage: DaffCartStorageService,
    @Inject(DaffCartShippingAddressDriver) private shippingAddressDriver: DaffCartShippingAddressServiceInterface,
    @Inject(DaffCartShippingInformationDriver) private shippingDriver: DaffCartShippingInformationServiceInterface,
    @Inject(DAFF_PAYMENT_PROCESSOR_COLLECTION) private processors: DaffPaymentProcessorCollection,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_PAYMENT_ERROR_MATCHER) private paymentErrorMatcher: ErrorTransformer,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface,
    private cartResolver: DaffCartDriverResolveService,
    private injector: Injector,
  ) {}

  ngrxOnInitEffects(): Action {
    return new DaffLoadAcceptJs();
  }

  completeAddressStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteAddressStepAction),
    switchMap((action) =>
      this.shippingAddressDriver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DemoCompleteAddressStepSuccess(resp)),
        daffCartDriverHandleCartNotFound(this.storage),
        catchAndArrayifyErrors((errors) => of(new DemoCompleteAddressStepFailure(errors.map(this.errorMatcher)))),
      ),
    ),
  ));

  onCompleteAddressStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteAddressStepSuccessAction),
    tap(() => this.stepService.goToStep(DemoCheckoutStep.SHIPPING)),
    switchMap(() => EMPTY),
  ), {
    dispatch: false,
  });

  completeShippingStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteShippingStepAction),
    switchMap((action) =>
      this.shippingDriver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DemoCompleteShippingStepSuccess(resp)),
        daffCartDriverHandleCartNotFound(this.storage),
        catchAndArrayifyErrors((errors) => of(new DemoCompleteShippingStepFailure(errors.map(this.errorMatcher)))),
      ),
    ),
  ));

  onCompleteShippingStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteShippingStepSuccessAction),
    tap(() => this.stepService.goToStep(DemoCheckoutStep.BILLING)),
    switchMap(() => EMPTY),
  ), {
    dispatch: false,
  });

  completeBillingStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteBillingStepAction),
    switchMap((action) =>
      daffCartPaymentProcessorUpdate(
        action,
        {
          paymentDriver: this.injector.get(this.processors[action.request.kind].driver),
          cartDriver: this.driver,
          cartResolver: this.cartResolver,
        },
        {
          success: (resp) => of(new DemoCompleteBillingStepSuccess(resp)),
          paymentFailure: (errors) => of(new DemoCompleteBillingStepFailure(errors.map(this.paymentErrorMatcher))),
          updateFailure: (errors) => of(new DemoCompleteBillingStepFailure(errors.map(this.errorMatcher))),
        },
      ),
    ),
  ));

  onCompleteBillingStep$ = createEffect(() => this.actions$.pipe(
    ofType(DemoCheckoutStepActionTypes.CompleteBillingStepSuccessAction),
    tap(() => this.stepService.goToStep(DemoCheckoutStep.REVIEW)),
    switchMap(() => EMPTY),
  ), {
    dispatch: false,
  });
}
