import { Action } from '@ngrx/store';
import { Product } from '@core/product/model/product';

export enum ProductListActionTypes {
    ProductsListLoadAction = "[ProductList] Load Action",
    ProductsListLoadSuccessAction = "[ProductList] Load Success Action",
    ProductsListLoadFailureAction = "[ProductList] Load Failure Action"
}

export class ProductListLoad implements Action {
  readonly type = ProductListActionTypes.ProductsListLoadAction;

  constructor() {}
}

export class ProductListLoadSuccess implements Action {
    readonly type = ProductListActionTypes.ProductsListLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

export class ProductListLoadFailure implements Action {
  readonly type = ProductListActionTypes.ProductsListLoadFailureAction;

  constructor(public payload: string) {}
}

export type PumpActions = 
    | ProductListLoad 
    | ProductListLoadSuccess
    | ProductListLoadFailure;