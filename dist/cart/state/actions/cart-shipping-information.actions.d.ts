import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
export declare enum DaffCartShippingInformationActionTypes {
    CartShippingInformationLoadAction = "[DaffCart] Shipping Information Load Action",
    CartShippingInformationLoadSuccessAction = "[DaffCart] Shipping Information Load Success Action",
    CartShippingInformationLoadFailureAction = "[DaffCart] Shipping Information Load Failure Action",
    CartShippingInformationUpdateAction = "[DaffCart] Shipping Information Update Action",
    CartShippingInformationUpdateSuccessAction = "[DaffCart] Shipping Information Update Success Action",
    CartShippingInformationUpdateFailureAction = "[DaffCart] Shipping Information Update Failure Action",
    CartShippingInformationDeleteAction = "[DaffCart] Shipping Information Remove Action",
    CartShippingInformationDeleteSuccessAction = "[DaffCart] Shipping Information Remove Success Action",
    CartShippingInformationDeleteFailureAction = "[DaffCart] Shipping Information Remove Failure Action"
}
export declare class DaffCartShippingInformationLoad implements Action {
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
}
export declare class DaffCartShippingInformationLoadSuccess<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
    payload: T;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartShippingInformationLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartShippingInformationUpdate<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartShippingInformationUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartShippingInformationUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartShippingInformationDelete<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
    id?: T['id'];
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;
    constructor(id?: T['id']);
}
export declare class DaffCartShippingInformationDeleteSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartShippingInformationDeleteFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartShippingInformationActions<T extends DaffCartShippingRate = DaffCartShippingRate, V extends DaffCart = DaffCart> = DaffCartShippingInformationLoad | DaffCartShippingInformationLoadSuccess<T> | DaffCartShippingInformationLoadFailure | DaffCartShippingInformationUpdate<T> | DaffCartShippingInformationUpdateSuccess<V> | DaffCartShippingInformationUpdateFailure | DaffCartShippingInformationDelete<T> | DaffCartShippingInformationDeleteSuccess<V> | DaffCartShippingInformationDeleteFailure;
