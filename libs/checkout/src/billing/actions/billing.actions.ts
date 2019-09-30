import { Action } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { PaymentInfo } from '../../models/payment/payment-info';

export enum BillingActionTypes {
  UpdateBillingAddressAction = '[Billing] Update Billing Address Action',
  UpdatePaymentInfoAction = '[Billing] Update Payment Info Action',
  ToggleBillingAddressIsShippingAddressAction = '[Billing] Billing Address Is Shipping Address Action'
}

export class UpdateBillingAddress implements Action {
  readonly type = BillingActionTypes.UpdateBillingAddressAction;

  constructor(public payload: DaffAddress) {}
}

export class UpdatePaymentInfo implements Action {
  readonly type = BillingActionTypes.UpdatePaymentInfoAction;

  constructor(public payload: PaymentInfo) {}
}

export class ToggleBillingAddressIsShippingAddress implements Action {
  readonly type = BillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
}

export type BillingActions =
    | UpdateBillingAddress
    | UpdatePaymentInfo
    | ToggleBillingAddressIsShippingAddress;
