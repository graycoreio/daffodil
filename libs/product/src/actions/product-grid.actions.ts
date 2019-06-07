import { Action } from '@ngrx/store';

import { DaffProduct } from '../models/product';

export enum DaffProductGridActionTypes {
    ProductGridLoadAction = "[ProductGrid] Load Action",
    ProductGridLoadSuccessAction = "[ProductGrid] Load Success Action",
    ProductGridLoadFailureAction = "[ProductGrid] Load Failure Action",
    ProductGridResetAction = "[ProductGrid] Reset Action"
}

export class DaffProductGridLoad implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadAction;

  constructor() {}
}

export class DaffProductGridLoadSuccess implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;

    constructor(public payload: DaffProduct[]) {}
}

export class DaffProductGridLoadFailure implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffProductGridReset implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridResetAction;

    constructor() {}
}

export type DaffProductGridActions = 
    | DaffProductGridLoad 
    | DaffProductGridLoadSuccess
    | DaffProductGridLoadFailure
    | DaffProductGridReset;