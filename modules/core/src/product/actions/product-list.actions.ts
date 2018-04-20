import { Action } from '@ngrx/store';
import { Product } from '@daffodil/product/model/product';

export enum ProductListActionTypes {
    ProductListLoadAction = "[ProductList] Load Action",
    ProductListLoadSuccessAction = "[ProductList] Load Success Action",
    ProductListLoadFailureAction = "[ProductList] Load Failure Action"
}

export class ProductListLoad implements Action {
  readonly type = ProductListActionTypes.ProductListLoadAction;

  constructor() {}
}

export class ProductListLoadSuccess implements Action {
    readonly type = ProductListActionTypes.ProductListLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

export class ProductListLoadFailure implements Action {
  readonly type = ProductListActionTypes.ProductListLoadFailureAction;

  constructor(public payload: string) {}
}

export type ProductListActions = 
    | ProductListLoad 
    | ProductListLoadSuccess
    | ProductListLoadFailure;