import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  ShowPaymentViewAction = "[Foundation-Payment] Show Payment View Action"
}

export class ShowPaymentView implements Action {
  readonly type = PaymentActionTypes.ShowPaymentViewAction;

  constructor() {}
}

export type PaymentActions =
    | ShowPaymentView;
