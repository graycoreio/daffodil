import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCart } from '@daffodil/cart';
export declare enum DaffCartActionTypes {
    CartStorageFailureAction = "[DaffCart] Cart Storage Failure Action",
    CartLoadAction = "[DaffCart] Cart Load Action",
    CartLoadSuccessAction = "[DaffCart] Cart Load Success Action",
    CartLoadFailureAction = "[DaffCart] Cart Load Failure Action",
    CartCreateAction = "[DaffCart] Cart Create Action",
    CartCreateSuccessAction = "[DaffCart] Cart Create Success Action",
    CartCreateFailureAction = "[DaffCart] Cart Create Failure Action",
    AddToCartAction = "[DaffCart] Cart Add To Cart Action",
    AddToCartSuccessAction = "[DaffCart] Cart Add to Cart Success Action",
    AddToCartFailureAction = "[DaffCart] Cart Add to Cart Failure Action",
    CartClearAction = "[DaffCart] Cart Reset Action",
    CartClearSuccessAction = "[DaffCart] Cart Reset Success Action",
    CartClearFailureAction = "[DaffCart] Cart Reset Failure Action",
    ResolveCartAction = "[DaffCart] Resolve Cart Action",
    ResolveCartSuccessAction = "[DaffCart] Resolve Cart Success Action",
    ResolveCartServerSideAction = "[DaffCart] Resolve Cart Server Side Action",
    ResolveCartFailureAction = "[DaffCart] Resolve Cart Failure Action"
}
export declare class DaffCartStorageFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.CartStorageFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartLoad implements Action {
    readonly type = DaffCartActionTypes.CartLoadAction;
}
export declare class DaffCartLoadSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: T;
    readonly type = DaffCartActionTypes.CartLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.CartLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartCreate implements Action {
    readonly type = DaffCartActionTypes.CartCreateAction;
}
export declare class DaffCartCreateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: {
        id: T['id'];
    };
    readonly type = DaffCartActionTypes.CartCreateSuccessAction;
    constructor(payload: {
        id: T['id'];
    });
}
export declare class DaffCartCreateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.CartCreateFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffAddToCart implements Action {
    payload: {
        productId: string;
        qty: number;
    };
    readonly type = DaffCartActionTypes.AddToCartAction;
    constructor(payload: {
        productId: string;
        qty: number;
    });
}
export declare class DaffAddToCartSuccess implements Action {
    payload: DaffCart;
    readonly type = DaffCartActionTypes.AddToCartSuccessAction;
    constructor(payload: DaffCart);
}
export declare class DaffAddToCartFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.AddToCartFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartClear implements Action {
    readonly type = DaffCartActionTypes.CartClearAction;
}
export declare class DaffCartClearSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartActionTypes.CartClearSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartClearFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.CartClearFailureAction;
    constructor(payload: DaffStateError);
}
/**
 * An action indicating that cart resolution begins.
 */
export declare class DaffResolveCart implements Action {
    readonly type = DaffCartActionTypes.ResolveCartAction;
}
/**
 * An action that indicates a user's cart is resolved successfully.
 */
export declare class DaffResolveCartSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: T;
    readonly type = DaffCartActionTypes.ResolveCartSuccessAction;
    constructor(payload: T);
}
/**
 * An action that indicates that a cart failed to resolve.
 */
export declare class DaffResolveCartFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartActionTypes.ResolveCartFailureAction;
    constructor(payload: DaffStateError);
}
/**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
export declare class DaffResolveCartServerSide implements Action {
    readonly type = DaffCartActionTypes.ResolveCartServerSideAction;
}
export declare type DaffCartActions<T extends DaffCart = DaffCart> = DaffCartStorageFailure | DaffCartLoad | DaffCartLoadSuccess<T> | DaffCartLoadFailure | DaffCartCreate | DaffCartCreateSuccess<T> | DaffCartCreateFailure | DaffAddToCart | DaffAddToCartSuccess | DaffAddToCartFailure | DaffCartClear | DaffCartClearSuccess<T> | DaffCartClearFailure | DaffResolveCart | DaffResolveCartSuccess<T> | DaffResolveCartServerSide | DaffResolveCartFailure;
