import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartPaymentMethod } from '@daffodil/cart';
export declare enum DaffCartPaymentMethodsActionTypes {
    CartPaymentMethodsLoadAction = "[DaffCart] Payment Methods Load Action",
    CartPaymentMethodsLoadSuccessAction = "[DaffCart] Payment Methods Load Success Action",
    CartPaymentMethodsLoadFailureAction = "[DaffCart] Payment Methods Load Failure Action"
}
export declare class DaffCartPaymentMethodsLoad implements Action {
    readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;
    constructor();
}
export declare class DaffCartPaymentMethodsLoadSuccess<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
    payload: T[];
    readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffCartPaymentMethodsLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartPaymentMethodsActions<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> = DaffCartPaymentMethodsLoad | DaffCartPaymentMethodsLoadSuccess<T> | DaffCartPaymentMethodsLoadFailure;
