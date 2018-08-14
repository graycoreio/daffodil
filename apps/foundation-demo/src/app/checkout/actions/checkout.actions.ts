import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  EnablePlaceOrderButtonAction = "[Foundation-Checkout] Enable Place Order Button Action",
  ShowReviewViewAction = "[Foundation-Checkout] Show Review View Action"
}

export class EnablePlaceOrderButton implements Action {
  readonly type = CheckoutActionTypes.EnablePlaceOrderButtonAction;

  constructor() {}
}

export class ShowReviewView implements Action {
  readonly type = CheckoutActionTypes.ShowReviewViewAction;

  constructor() {}
}

export type CheckoutActions =
    | EnablePlaceOrderButton
    | ShowReviewView;
