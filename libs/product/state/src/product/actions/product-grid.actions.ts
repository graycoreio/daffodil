import { Action } from '@ngrx/store';

import { Product } from '@daffodil/productCore';

export enum ProductGridActionTypes {
    ProductGridLoadAction = "[ProductGrid] Load Action",
    ProductGridLoadSuccessAction = "[ProductGrid] Load Success Action",
    ProductGridLoadFailureAction = "[ProductGrid] Load Failure Action",
    ProductGridResetAction = "[ProductGrid] Reset Action"
}

export class ProductGridLoad implements Action {
  readonly type = ProductGridActionTypes.ProductGridLoadAction;

  constructor() {}
}

export class ProductGridLoadSuccess implements Action {
    readonly type = ProductGridActionTypes.ProductGridLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

export class ProductGridLoadFailure implements Action {
  readonly type = ProductGridActionTypes.ProductGridLoadFailureAction;

  constructor(public payload: string) {}
}

export class ProductGridReset implements Action {
    readonly type = ProductGridActionTypes.ProductGridResetAction;

    constructor() {}
}

export type ProductGridActions = 
    | ProductGridLoad 
    | ProductGridLoadSuccess
    | ProductGridLoadFailure
    | ProductGridReset;