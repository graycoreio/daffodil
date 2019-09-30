import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    RedirectToCartSuccess = '[Product] Redirect To Cart Success Action'
}

export class RedirectToCartSuccess implements Action {
  readonly type = ProductActionTypes.RedirectToCartSuccess;

  constructor(public payload: string) {}
}

export type ProductActions = 
    | RedirectToCartSuccess;
