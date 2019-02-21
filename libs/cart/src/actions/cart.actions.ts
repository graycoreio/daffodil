import { Action } from '@ngrx/store';

import { Cart } from '../models/cart';

export enum CartActionTypes {
    CartLoadAction = "[Cart] Load Action",
    CartLoadSuccessAction = "[Cart] Load Success Action",
    CartLoadFailureAction = "[Cart] Load Failure Action",
    AddToCartAction = "[Cart] Add To Cart Action",
    AddToCartSuccessAction = "[Cart] Add to Cart Success Action",
    AddToCartFailureAction = "[Cart] Add to Cart Failure Action",    
    CartResetAction = "[Cart] Reset Action"
}

export class CartLoad implements Action {
  readonly type = CartActionTypes.CartLoadAction;

  constructor() {}
}

export class CartLoadSuccess implements Action {
    readonly type = CartActionTypes.CartLoadSuccessAction;

    constructor(public payload: Cart) {}
}

export class CartLoadFailure implements Action {
  readonly type = CartActionTypes.CartLoadFailureAction;

  constructor(public payload: string) {}
}

export class AddToCart implements Action {
    readonly type = CartActionTypes.AddToCartAction;

    constructor(public payload: {productId: string, qty: number}) {}
}

export class AddToCartSuccess implements Action {
    readonly type = CartActionTypes.AddToCartSuccessAction;

    constructor(public payload: Cart) {}
}

export class AddToCartFailure implements Action {
    readonly type = CartActionTypes.AddToCartFailureAction;

    constructor(public payload: string) {}
}

export class CartReset implements Action {
    readonly type = CartActionTypes.CartResetAction;

    constructor() {}
}

export type CartActions = 
    | CartLoad 
    | CartLoadSuccess
    | CartLoadFailure
    | AddToCart
    | AddToCartSuccess
    | AddToCartFailure
    | CartReset;