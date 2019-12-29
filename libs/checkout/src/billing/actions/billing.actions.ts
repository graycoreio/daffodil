import { Action } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { PaymentInfo } from '../../models/payment/payment-info';

export enum DaffBillingActionTypes {
  UpdateBillingAddressAction = '[Billing] Update Billing Address Action',
  UpdatePaymentInfoAction = '[Billing] Update Payment Info Action',
  ToggleBillingAddressIsShippingAddressAction = '[Billing] Billing Address Is Shipping Address Action'
}

export class DaffUpdateBillingAddress implements Action {
  readonly type = DaffBillingActionTypes.UpdateBillingAddressAction;

  constructor(public payload: DaffAddress) {}
}

export class DaffUpdatePaymentInfo implements Action {
  readonly type = DaffBillingActionTypes.UpdatePaymentInfoAction;

  constructor(public payload: PaymentInfo) {}
}

export class DaffToggleBillingAddressIsShippingAddress implements Action {
  readonly type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
}

export type DaffBillingActions =
    | DaffUpdateBillingAddress
    | DaffUpdatePaymentInfo
    | DaffToggleBillingAddressIsShippingAddress;
