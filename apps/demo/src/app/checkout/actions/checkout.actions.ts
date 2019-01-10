import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  EnablePlaceOrderButtonAction = "[Foundation-Checkout] Enable Place Order Button Action",
  ShowReviewViewAction = "[Foundation-Checkout] Show Review View Action",
  PlaceOrderAction = "[Foundation-Checkout] Place Order Action",
  PlaceOrderSuccessAction = "[Foundation-Checkout] Place Order Success Action"
}

export class EnablePlaceOrderButton implements Action {
  readonly type = CheckoutActionTypes.EnablePlaceOrderButtonAction;

  constructor() {}
}

export class ShowReviewView implements Action {
  readonly type = CheckoutActionTypes.ShowReviewViewAction;

  constructor() {}
}

export class PlaceOrder implements Action {
  readonly type = CheckoutActionTypes.PlaceOrderAction;

  constructor(public payload: number) {}
}

export class PlaceOrderSuccess implements Action {
  readonly type = CheckoutActionTypes.PlaceOrderSuccessAction;

  constructor(public payload: number) {}
}

export type CheckoutActions =
    | EnablePlaceOrderButton
    | ShowReviewView
    | PlaceOrder
    | PlaceOrderSuccess;
