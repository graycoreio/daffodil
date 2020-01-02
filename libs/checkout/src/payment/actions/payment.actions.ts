import { Action } from '@ngrx/store';

import { PaymentInfo } from '../../models/payment/payment-info';

export enum DaffPaymentActionTypes {
  UpdatePaymentInfoAction = '[Payment] Update Payment Info Action'
}

export class DaffUpdatePaymentInfo implements Action {
  readonly type = DaffPaymentActionTypes.UpdatePaymentInfoAction;

  constructor(public payload: PaymentInfo) {}
}

export type DaffPaymentActions =
    | DaffUpdatePaymentInfo;
