import { Action } from '@ngrx/store';

import { DaffAuthorizenetPaymentRequest } from '@daffodil/authorizenet';
import { DaffCart } from '@daffodil/cart';
import {
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateSuccess,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateFailure,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateFailure,
  DaffCartShippingInformationUpdateSuccess,
} from '@daffodil/cart/state';
import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPaymentRequest } from '@daffodil/payment';
import { DaffPaymentGenerateToken } from '@daffodil/payment/state';

export enum DemoCheckoutStepActionTypes {
  CompleteAddressStepAction = '[@daffodil/demo] Checkout Complete Address Step Action',
  CompleteAddressStepSuccessAction = '[@daffodil/demo] Checkout Complete Address Step Success Action',
  CompleteAddressStepFailureAction = '[@daffodil/demo] Checkout Complete Address Step Failure Action',

  CompleteShippingStepAction = '[@daffodil/demo] Checkout Complete Shipping Step Action',
  CompleteShippingStepSuccessAction = '[@daffodil/demo] Checkout Complete Shipping Step Success Action',
  CompleteShippingStepFailureAction = '[@daffodil/demo] Checkout Complete Shipping Step Failure Action',

  CompleteBillingStepAction = '[@daffodil/demo] Checkout Complete Billing Step Action',
  CompleteBillingStepSuccessAction = '[@daffodil/demo] Checkout Complete Billing Step Success Action',
  CompleteBillingStepFailureAction = '[@daffodil/demo] Checkout Complete Billing Step Failure Action',
}

export class DemoCompleteAddressStep implements Action, Omit<DaffCartShippingAddressUpdate, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteAddressStepAction;

  constructor(public payload: DaffCart['shipping_address']) {}
}

export class DemoCompleteAddressStepSuccess implements Action, Omit<DaffCartShippingAddressUpdateSuccess, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteAddressStepSuccessAction;

  constructor(public payload: Partial<DaffCart>) {}
}

export class DemoCompleteAddressStepFailure implements Action, Omit<DaffCartShippingAddressUpdateFailure, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteAddressStepFailureAction;

  constructor(public payload: Array<DaffStateError>) {}
}

export class DemoCompleteShippingStep implements Action, Omit<DaffCartShippingInformationUpdate, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteShippingStepAction;

  constructor(public payload: DaffCart['shipping_information']) {}
}

export class DemoCompleteShippingStepSuccess implements Action, Omit<DaffCartShippingInformationUpdateSuccess, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteShippingStepSuccessAction;

  constructor(public payload: Partial<DaffCart>) {}
}

export class DemoCompleteShippingStepFailure implements Action, Omit<DaffCartShippingInformationUpdateFailure, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteShippingStepFailureAction;

  constructor(public payload: Array<DaffStateError>) {}
}

export class DemoCompleteBillingStep implements DaffPaymentGenerateToken<DaffAuthorizenetPaymentRequest> {
  readonly type = DemoCheckoutStepActionTypes.CompleteBillingStepAction;

  constructor(
    public request: DaffAuthorizenetPaymentRequest,
    public address?: DaffPersonalAddress | DaffIdentifiable,
  ) {}
}

export class DemoCompleteBillingStepSuccess implements Action, Omit<DaffCartPaymentUpdateSuccess, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteBillingStepSuccessAction;

  constructor(public payload: Partial<DaffCart>) {}
}

export class DemoCompleteBillingStepFailure implements Action, Omit<DaffCartPaymentUpdateFailure, keyof Action> {
  readonly type = DemoCheckoutStepActionTypes.CompleteBillingStepFailureAction;

  constructor(public payload: Array<DaffStateError>) {}
}

export type DemoCheckoutStepActions =
  | DemoCompleteAddressStep
  | DemoCompleteAddressStepSuccess
  | DemoCompleteAddressStepFailure
  | DemoCompleteShippingStep
  | DemoCompleteShippingStepSuccess
  | DemoCompleteShippingStepFailure
  | DemoCompleteBillingStep
  | DemoCompleteBillingStepSuccess
  | DemoCompleteBillingStepFailure;
