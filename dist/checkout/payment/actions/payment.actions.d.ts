import { Action } from '@ngrx/store';
import { PaymentInfo } from '../../models/payment/payment-info';
export declare enum DaffPaymentActionTypes {
    UpdatePaymentInfoAction = "[Payment] Update Payment Info Action"
}
export declare class DaffUpdatePaymentInfo implements Action {
    payload: PaymentInfo;
    readonly type = DaffPaymentActionTypes.UpdatePaymentInfoAction;
    constructor(payload: PaymentInfo);
}
export declare type DaffPaymentActions = DaffUpdatePaymentInfo;
