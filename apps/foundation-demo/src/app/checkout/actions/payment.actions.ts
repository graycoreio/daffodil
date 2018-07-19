import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  ShowPaymentViewAction = "[Foundation-Payment] Show Payment View Action",
  SetShowPaymentFormAction = "[Foundation-Payment] Set Show Payment Form Action",
  ToggleShowPaymentFormAction = "[Foundation-Payment] Toggle Show Payment Form Action"
}

export class ShowPaymentView implements Action {
  readonly type = PaymentActionTypes.ShowPaymentViewAction;

  constructor() {}
}

export class SetShowPaymentForm implements Action {
  readonly type = PaymentActionTypes.SetShowPaymentFormAction;

  constructor(public payload: boolean) {}
}

export class ToggleShowPaymentForm implements Action {
  readonly type = PaymentActionTypes.ToggleShowPaymentFormAction;

  constructor() {}
}

export type PaymentActions =
    | ShowPaymentView
    | SetShowPaymentForm
    | ToggleShowPaymentForm;
