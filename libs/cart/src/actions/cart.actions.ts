import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';

export enum DaffCartActionTypes {
    CartLoadAction = '[DaffCart] Load Action',
    CartLoadSuccessAction = '[DaffCart] Load Success Action',
    CartLoadFailureAction = '[DaffCart] Load Failure Action',
    AddToCartAction = '[DaffCart] Add To Cart Action',
    AddToCartSuccessAction = '[DaffCart] Add to Cart Success Action',
    AddToCartFailureAction = '[DaffCart] Add to Cart Failure Action',    
    CartResetAction = '[DaffCart] Reset Action',
    CartResetSuccessAction = '[DaffCart] Reset Success Action',
    CartResetFailureAction = '[DaffCart] Reset Failure Action'
}

export class DaffCartLoad implements Action {
  readonly type = DaffCartActionTypes.CartLoadAction;

  constructor() {}
}

export class DaffCartLoadSuccess implements Action {
    readonly type = DaffCartActionTypes.CartLoadSuccessAction;

    constructor(public payload: DaffCart) {}
}

export class DaffCartLoadFailure implements Action {
  readonly type = DaffCartActionTypes.CartLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffAddToCart implements Action {
    readonly type = DaffCartActionTypes.AddToCartAction;

    constructor(public payload: {productId: string, qty: number}) {}
}

export class DaffAddToCartSuccess implements Action {
    readonly type = DaffCartActionTypes.AddToCartSuccessAction;

    constructor(public payload: DaffCart) {}
}

export class DaffAddToCartFailure implements Action {
    readonly type = DaffCartActionTypes.AddToCartFailureAction;

    constructor(public payload: string) {}
}

export class DaffCartReset implements Action {
    readonly type = DaffCartActionTypes.CartResetAction;
}

export class DaffCartResetSuccess implements Action {
    readonly type = DaffCartActionTypes.CartResetSuccessAction;
    
    constructor(public payload: DaffCart){}
}

export class DaffCartResetFailure implements Action {
    readonly type = DaffCartActionTypes.CartResetFailureAction;

    constructor(public payload: string){}
}

export type DaffCartActions = 
    | DaffCartLoad 
    | DaffCartLoadSuccess
    | DaffCartLoadFailure
    | DaffAddToCart
    | DaffAddToCartSuccess
    | DaffAddToCartFailure
    | DaffCartReset
    | DaffCartResetSuccess
    | DaffCartResetFailure;