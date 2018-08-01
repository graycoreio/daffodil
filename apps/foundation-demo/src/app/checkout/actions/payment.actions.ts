import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  ShowPaymentViewAction = "[Foundation-Payment] Show Payment View Action",
  ShowPaymentFormAction = "[Foundation-Payment] Show Payment Form Action",
  HidePaymentFormAction = "[Foundation-Payment] Hide Payment Form Action",
  ToggleShowPaymentFormAction = "[Foundation-Payment] Toggle Show Payment Form Action"
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
