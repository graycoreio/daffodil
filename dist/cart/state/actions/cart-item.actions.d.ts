import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCart, DaffCartItemInput } from '@daffodil/cart';
import { DaffStatefulCartItem } from '../models/public_api';
export declare enum DaffCartItemActionTypes {
    CartItemListAction = "[DaffCart] Cart Items List Action",
    CartItemListSuccessAction = "[DaffCart] Cart Items List Success Action",
    CartItemListFailureAction = "[DaffCart] Cart Items List Failure Action",
    CartItemLoadAction = "[DaffCart] Cart Item Load Action",
    CartItemLoadSuccessAction = "[DaffCart] Cart Item Load Success Action",
    CartItemLoadFailureAction = "[DaffCart] Cart Item Load Failure Action",
    CartItemUpdateAction = "[DaffCart] Cart Item Update Action",
    CartItemUpdateSuccessAction = "[DaffCart] Cart Item Update Success Action",
    CartItemUpdateFailureAction = "[DaffCart] Cart Item Update Failure Action",
    CartItemAddAction = "[DaffCart] Cart Item Add Action",
    CartItemAddSuccessAction = "[DaffCart] Cart Item Add Success Action",
    CartItemAddFailureAction = "[DaffCart] Cart Item Add Failure Action",
    CartItemDeleteAction = "[DaffCart] Cart Item Remove Action",
    CartItemDeleteSuccessAction = "[DaffCart] Cart Item Remove Success Action",
    CartItemDeleteFailureAction = "[DaffCart] Cart Item Remove Failure Action",
    CartItemStateResetAction = "[DaffCart] Cart Item State Reset Action"
}
export declare class DaffCartItemList implements Action {
    readonly type = DaffCartItemActionTypes.CartItemListAction;
}
export declare class DaffCartItemListSuccess<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    payload: T[];
    readonly type = DaffCartItemActionTypes.CartItemListSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffCartItemListFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartItemActionTypes.CartItemListFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartItemLoad<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    itemId: T['item_id'];
    readonly type = DaffCartItemActionTypes.CartItemLoadAction;
    constructor(itemId: T['item_id']);
}
export declare class DaffCartItemLoadSuccess<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    payload: T;
    readonly type = DaffCartItemActionTypes.CartItemLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartItemLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartItemActionTypes.CartItemLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartItemUpdate<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    itemId: T['item_id'];
    changes: Partial<T>;
    readonly type = DaffCartItemActionTypes.CartItemUpdateAction;
    constructor(itemId: T['item_id'], changes: Partial<T>);
}
export declare class DaffCartItemUpdateSuccess<T extends DaffCart = DaffCart, V extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    payload: Partial<T>;
    itemId: V['item_id'];
    readonly type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;
    constructor(payload: Partial<T>, itemId: V['item_id']);
}
export declare class DaffCartItemUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartItemActionTypes.CartItemUpdateFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartItemAdd<T extends DaffCartItemInput = DaffCartItemInput> implements Action {
    input: T;
    readonly type = DaffCartItemActionTypes.CartItemAddAction;
    constructor(input: T);
}
export declare class DaffCartItemAddSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartItemActionTypes.CartItemAddSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartItemAddFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartItemActionTypes.CartItemAddFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartItemDelete<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
    itemId: T['item_id'];
    readonly type = DaffCartItemActionTypes.CartItemDeleteAction;
    constructor(itemId: T['item_id']);
}
export declare class DaffCartItemDeleteSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartItemDeleteFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartItemActionTypes.CartItemDeleteFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartItemStateReset implements Action {
    readonly type = DaffCartItemActionTypes.CartItemStateResetAction;
}
export declare type DaffCartItemActions<T extends DaffStatefulCartItem = DaffStatefulCartItem, U extends DaffCartItemInput = DaffCartItemInput, V extends DaffCart = DaffCart> = DaffCartItemList | DaffCartItemListSuccess<T> | DaffCartItemListFailure | DaffCartItemLoad<T> | DaffCartItemLoadSuccess<T> | DaffCartItemLoadFailure | DaffCartItemUpdate<T> | DaffCartItemUpdateSuccess<V, T> | DaffCartItemUpdateFailure | DaffCartItemAdd<U> | DaffCartItemAddSuccess<V> | DaffCartItemAddFailure | DaffCartItemDelete<T> | DaffCartItemDeleteSuccess<V> | DaffCartItemDeleteFailure | DaffCartItemStateReset;
