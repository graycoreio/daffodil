import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  ShowPaymentViewAction = "[Demo-Payment] Show Payment View Action",
  ShowPaymentFormAction = "[Demo-Payment] Show Payment Form Action",
  HidePaymentFormAction = "[Demo-Payment] Hide Payment Form Action",
  ToggleShowPaymentFormAction = "[Demo-Payment] Toggle Show Payment Form Action"
}

export class ShowPaymentView implements Action {
  readonly type = PaymentActionTypes.ShowPaymentViewAction;

  constructor() {}
}

export class ShowPaymentForm implements Action {
  readonly type = PaymentActionTypes.ShowPaymentFormAction;

  constructor() {}
}

export class HidePaymentForm implements Action {
  readonly type = PaymentActionTypes.HidePaymentFormAction;

  constructor() {}
}

export class ToggleShowPaymentForm implements Action {
  readonly type = PaymentActionTypes.ToggleShowPaymentFormAction;

  constructor() {}
}

export type PaymentActions =
    | ShowPaymentView
    | ShowPaymentForm
    | HidePaymentForm
    | ToggleShowPaymentForm;
