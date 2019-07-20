import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';
import { DaffProductModification } from '../models/product-modification';

export enum DaffProductActionTypes {
    ProductLoadAction = "[Product] Load Action",
    ProductLoadSuccessAction = "[Product] Load Success Action",
    ProductLoadFailureAction = "[Product] Load Failure Action",
    UpdateQtyAction = "[Product] Update Qty Action",
    ProductModifyAction = "[Product] Product Modify Action"
}

export class DaffProductLoad implements Action {
  readonly type = DaffProductActionTypes.ProductLoadAction;

  constructor(public payload: string) {}
}

export class DaffProductLoadSuccess implements Action {
    readonly type = DaffProductActionTypes.ProductLoadSuccessAction;

    constructor(public payload: DaffProduct) {}
}

export class DaffProductLoadFailure implements Action {
  readonly type = DaffProductActionTypes.ProductLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffProductUpdateQty implements Action {
    readonly type = DaffProductActionTypes.UpdateQtyAction;

    constructor(public payload: number) {}
}

export class DaffProductModify implements Action {
  readonly type = DaffProductActionTypes.ProductModifyAction;

  constructor(public payload: DaffProductModification) {}
}

export type DaffProductActions = 
    | DaffProductLoad 
    | DaffProductLoadSuccess
    | DaffProductLoadFailure
    | DaffProductUpdateQty
    | DaffProductModify;