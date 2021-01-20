import { Action } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { PaymentInfo } from '../../models/payment/payment-info';
export declare enum DaffBillingActionTypes {
    UpdateBillingAddressAction = "[Billing] Update Billing Address Action",
    UpdatePaymentInfoAction = "[Billing] Update Payment Info Action",
    ToggleBillingAddressIsShippingAddressAction = "[Billing] Billing Address Is Shipping Address Action"
}
export declare class DaffUpdateBillingAddress implements Action {
    payload: DaffAddress;
    readonly type = DaffBillingActionTypes.UpdateBillingAddressAction;
    constructor(payload: DaffAddress);
}
export declare class DaffUpdatePaymentInfo implements Action {
    payload: PaymentInfo;
    readonly type = DaffBillingActionTypes.UpdatePaymentInfoAction;
    constructor(payload: PaymentInfo);
}
export declare class DaffToggleBillingAddressIsShippingAddress implements Action {
    readonly type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
}
export declare type DaffBillingActions = DaffUpdateBillingAddress | DaffUpdatePaymentInfo | DaffToggleBillingAddressIsShippingAddress;
