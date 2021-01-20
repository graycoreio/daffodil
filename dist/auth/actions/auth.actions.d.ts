import { Action } from '@ngrx/store';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAccountRegistration } from '../models/account-registration';
export declare enum DaffAuthActionTypes {
    AuthGuardCheckAction = "[Daff-Auth] Auth Guard Check Action",
    AuthGuardCheckCompletionAction = "[Daff-Auth] Auth Guard Check Completion Action",
    AuthStorageFailureAction = "[Daff-Auth] Auth Storage Failure Action",
    AuthLoginAction = "[Daff-Auth] Auth Login Action",
    AuthLoginSuccessAction = "[Daff-Auth] Auth Login Success Action",
    AuthLoginFailureAction = "[Daff-Auth] Auth Login Failure Action",
    AuthLogoutAction = "[Daff-Auth] Auth Logout Action",
    AuthLogoutSuccessAction = "[Daff-Auth] Auth Logout Success Action",
    AuthLogoutFailureAction = "[Daff-Auth] Auth Logout Failure Action",
    AuthCheckAction = "[Daff-Auth] Auth Check Action",
    AuthCheckSuccessAction = "[Daff-Auth] Auth Check Success Action",
    AuthCheckFailureAction = "[Daff-Auth] Auth Check Failure Action",
    AuthRegisterAction = "[Daff-Auth] Auth Register Action",
    AuthRegisterSuccessAction = "[Daff-Auth] Auth Register Success Action",
    AuthRegisterFailureAction = "[Daff-Auth] Auth Register Failure Action"
}
/**
 * An action triggered by guards to initialize an auth check request.
 */
export declare class DaffAuthGuardCheck implements Action {
    readonly type = DaffAuthActionTypes.AuthGuardCheckAction;
}
/**
 * An action triggered on the completion of a guard token check.
 */
export declare class DaffAuthGuardCheckCompletion implements Action {
    result: boolean;
    readonly type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;
    constructor(result: boolean);
}
export declare class DaffAuthStorageFailure implements Action {
    errorMessage: string;
    readonly type = DaffAuthActionTypes.AuthStorageFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action triggered to initialize a auth login request.
 */
export declare class DaffAuthLogin<T extends DaffLoginInfo> implements Action {
    loginInfo: T;
    readonly type = DaffAuthActionTypes.AuthLoginAction;
    constructor(loginInfo: T);
}
/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 */
export declare class DaffAuthLoginSuccess<T extends DaffAuthToken> implements Action {
    auth: T;
    readonly type = DaffAuthActionTypes.AuthLoginSuccessAction;
    constructor(auth: T);
}
/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffAuthLoginFailure implements Action {
    errorMessage: string;
    readonly type = DaffAuthActionTypes.AuthLoginFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action triggered to initialize a logout request.
 */
export declare class DaffAuthLogout implements Action {
    readonly type = DaffAuthActionTypes.AuthLogoutAction;
}
/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
export declare class DaffAuthLogoutSuccess implements Action {
    readonly type = DaffAuthActionTypes.AuthLogoutSuccessAction;
}
/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffAuthLogoutFailure implements Action {
    errorMessage: string;
    readonly type = DaffAuthActionTypes.AuthLogoutFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action triggered to initialize an auth check request.
 */
export declare class DaffAuthCheck implements Action {
    readonly type = DaffAuthActionTypes.AuthCheckAction;
}
/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
export declare class DaffAuthCheckSuccess implements Action {
    readonly type = DaffAuthActionTypes.AuthCheckSuccessAction;
}
/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffAuthCheckFailure implements Action {
    errorMessage: string;
    readonly type = DaffAuthActionTypes.AuthCheckFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 */
export declare class DaffAuthRegister<T extends DaffAccountRegistration> implements Action {
    registration: T;
    readonly type = DaffAuthActionTypes.AuthRegisterAction;
    constructor(registration: T);
}
/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 */
export declare class DaffAuthRegisterSuccess<T extends DaffLoginInfo> implements Action {
    loginInfo: T;
    readonly type = DaffAuthActionTypes.AuthRegisterSuccessAction;
    constructor(loginInfo: T);
}
/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffAuthRegisterFailure implements Action {
    errorMessage: string;
    readonly type = DaffAuthActionTypes.AuthRegisterFailureAction;
    constructor(errorMessage: string);
}
export declare type DaffAuthActions<T extends DaffLoginInfo, U extends DaffAuthToken, S extends DaffAccountRegistration> = DaffAuthGuardCheckCompletion | DaffAuthGuardCheck | DaffAuthStorageFailure | DaffAuthLogin<T> | DaffAuthLoginSuccess<U> | DaffAuthLoginFailure | DaffAuthLogout | DaffAuthLogoutSuccess | DaffAuthLogoutFailure | DaffAuthCheck | DaffAuthCheckSuccess | DaffAuthCheckFailure | DaffAuthRegister<S> | DaffAuthRegisterSuccess<T> | DaffAuthRegisterFailure;
