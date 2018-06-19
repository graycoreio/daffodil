import { Action } from '@ngrx/store';

import { Product } from '../model/product';

export enum ProductActionTypes {
    ProductLoadAction = "[Product] Load Action",
    ProductLoadSuccessAction = "[Product] Load Success Action",
    ProductLoadFailureAction = "[Product] Load Failure Action",
    UpdateQtyAction = "[Product] Update Qty Action"
}

export class ProductLoad implements Action {
  readonly type = ProductActionTypes.ProductLoadAction;

  constructor(public payload: string) {}
}

export class ProductLoadSuccess implements Action {
    readonly type = ProductActionTypes.ProductLoadSuccessAction;

    constructor(public payload: Product) {}
}

export class ProductLoadFailure implements Action {
  readonly type = ProductActionTypes.ProductLoadFailureAction;

  constructor(public payload: string) {}
}

export class UpdateQty implements Action {
    readonly type = ProductActionTypes.UpdateQtyAction;

    constructor(public payload: number) {}
}

export type ProductActions = 
    | ProductLoad 
    | ProductLoadSuccess
    | ProductLoadFailure
    | UpdateQty;