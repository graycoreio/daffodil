import { Action } from '@ngrx/store';
import { DaffPaypalTokenRequest } from '../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
export declare enum DaffPaypalActionTypes {
    GeneratePaypalExpressTokenAction = "[Daff Paypal] Generate Express Token Action",
    GeneratePaypalExpressTokenSuccessAction = "[Daff Paypal] Generate Express Token Success Action",
    GeneratePaypalExpressTokenFailureAction = "[Daff Paypal] Generate Express Token Failure Action"
}
export declare class DaffGeneratePaypalExpressToken<T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest> implements Action {
    payload: T;
    readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;
    constructor(payload: T);
}
export declare class DaffGeneratePaypalExpressTokenSuccess<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> implements Action {
    payload: T;
    readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;
    constructor(payload: T);
}
export declare class DaffGeneratePaypalExpressTokenFailure implements Action {
    payload: string;
    readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
    constructor(payload: string);
}
export declare type DaffPaypalActions<T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> = DaffGeneratePaypalExpressToken<T> | DaffGeneratePaypalExpressTokenSuccess<V> | DaffGeneratePaypalExpressTokenFailure;
