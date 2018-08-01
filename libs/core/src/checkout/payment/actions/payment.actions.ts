import { Action } from '@ngrx/store';

import { PaymentInfo } from '../models/payment-info';

export enum PaymentActionTypes {
  UpdatePaymentInfoAction = "[Payment] Update Payment Info Action"
}

export class UpdatePaymentInfo implements Action {
  readonly type = PaymentActionTypes.UpdatePaymentInfoAction;

  constructor(public payload: PaymentInfo) {}
}

export type PaymentActions =
    | UpdatePaymentInfo;
