import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  RedirectToCartSuccessAction = '[Product] Redirect To Cart Success Action'
}

export class RedirectToCartSuccess implements Action {
  readonly type = ProductActionTypes.RedirectToCartSuccessAction;

  constructor(public payload: string) {}
}

export type ProductActions =
  | RedirectToCartSuccess;
