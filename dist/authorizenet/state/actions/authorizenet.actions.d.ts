import { Action } from '@ngrx/store';
import { DaffCartAddress } from '@daffodil/cart';
import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffStateError } from '@daffodil/core/state';
export declare enum DaffAuthorizeNetActionTypes {
    UpdatePaymentAction = "[Daff-Authorize-Net] Update Payment",
    UpdatePaymentSuccessAction = "[Daff-Authorize-Net] Update Payment Success",
    UpdatePaymentFailureAction = "[Daff-Authorize-Net] Update Payment Failure",
    LoadAcceptJsAction = "[Daff-Authorize-Net] Load Accept Js",
    LoadAcceptJsSuccessAction = "[Daff-Authorize-Net] Load Accept Js Success",
    LoadAcceptJsFailureAction = "[Daff-Authorize-Net] Load Accept Js Failure"
}
/**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 */
export declare class DaffAuthorizeNetUpdatePayment<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest, V extends DaffCartAddress = DaffCartAddress> implements Action {
    tokenRequest: T;
    address: V;
    readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
    constructor(tokenRequest: T, address: V);
}
/**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
export declare class DaffAuthorizeNetUpdatePaymentSuccess implements Action {
    readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
}
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
export declare class DaffAuthorizeNetUpdatePaymentFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffLoadAcceptJs implements Action {
    readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
}
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
export declare class DaffLoadAcceptJsSuccess implements Action {
    readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
}
/**
 * Indicates that the AcceptJs library has failed to load
 */
export declare class DaffLoadAcceptJsFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffAuthorizeNetActions<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> = DaffAuthorizeNetUpdatePayment<T> | DaffAuthorizeNetUpdatePaymentSuccess | DaffAuthorizeNetUpdatePaymentFailure | DaffLoadAcceptJsSuccess | DaffLoadAcceptJsFailure | DaffLoadAcceptJs;
