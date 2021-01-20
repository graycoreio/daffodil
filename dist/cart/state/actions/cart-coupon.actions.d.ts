import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartCoupon, DaffCart } from '@daffodil/cart';
export declare enum DaffCartCouponActionTypes {
    CartCouponApplyAction = "[DaffCart] Cart Coupon Apply Action",
    CartCouponApplySuccessAction = "[DaffCart] Cart Coupon Apply Success Action",
    CartCouponApplyFailureAction = "[DaffCart] Cart Coupon Apply Failure Action",
    CartCouponListAction = "[DaffCart] Cart Coupon List Action",
    CartCouponListSuccessAction = "[DaffCart] Cart Coupon List Success Action",
    CartCouponListFailureAction = "[DaffCart] Cart Coupon List Failure Action",
    CartCouponRemoveAction = "[DaffCart] Cart Coupon Remove Action",
    CartCouponRemoveSuccessAction = "[DaffCart] Cart Coupon Remove Success Action",
    CartCouponRemoveFailureAction = "[DaffCart] Cart Coupon Remove Failure Action",
    CartCouponRemoveAllAction = "[DaffCart] Cart Coupon Remove All Action",
    CartCouponRemoveAllSuccessAction = "[DaffCart] Cart Coupon Remove All Success Action",
    CartCouponRemoveAllFailureAction = "[DaffCart] Cart Coupon Remove All Failure Action"
}
export declare class DaffCartCouponApply<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
    payload: T;
    readonly type = DaffCartCouponActionTypes.CartCouponApplyAction;
    constructor(payload: T);
}
export declare class DaffCartCouponApplySuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartCouponApplyFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartCouponActionTypes.CartCouponApplyFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartCouponList implements Action {
    readonly type = DaffCartCouponActionTypes.CartCouponListAction;
}
export declare class DaffCartCouponListSuccess<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
    payload: T[];
    readonly type = DaffCartCouponActionTypes.CartCouponListSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffCartCouponListFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartCouponActionTypes.CartCouponListFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartCouponRemove<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
    payload: T;
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveAction;
    constructor(payload: T);
}
export declare class DaffCartCouponRemoveSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartCouponRemoveFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartCouponRemoveAll implements Action {
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllAction;
}
export declare class DaffCartCouponRemoveAllSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartCouponRemoveAllFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartCouponActions<T extends DaffCart = DaffCart, V extends DaffCartCoupon = DaffCartCoupon> = DaffCartCouponApply<V> | DaffCartCouponApplySuccess<T> | DaffCartCouponApplyFailure | DaffCartCouponList | DaffCartCouponListSuccess<V> | DaffCartCouponListFailure | DaffCartCouponRemove<V> | DaffCartCouponRemoveSuccess<T> | DaffCartCouponRemoveFailure | DaffCartCouponRemoveAll | DaffCartCouponRemoveAllSuccess<T> | DaffCartCouponRemoveAllFailure;
