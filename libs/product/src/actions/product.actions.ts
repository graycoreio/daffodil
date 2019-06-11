import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';

export enum DaffProductActionTypes {
    ProductLoadAction = "[Product] Load Action",
    ProductLoadSuccessAction = "[Product] Load Success Action",
    ProductLoadFailureAction = "[Product] Load Failure Action",
    UpdateQtyAction = "[Product] Update Qty Action"
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

export type DaffProductActions = 
    | DaffProductLoad 
    | DaffProductLoadSuccess
    | DaffProductLoadFailure
    | DaffProductUpdateQty;