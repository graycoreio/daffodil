import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  EnablePlaceOrderButtonAction = "[Foundation-Checkout] Enable Place Order Button Action",
  ShowReviewViewAction = "[Foundation-Checkout] Show Review View Action",
  PlaceOrderAction = "[Foundation-Checkout] Place Order Action",
  PlaceOrderSuccessAction = "[Foundation-Checkout] Place Order Success Action"
}

export class EnablePlaceOrderButton implements Action {
  readonly type = CheckoutActionTypes.EnablePlaceOrderButtonAction;
}

export class ShowReviewView implements Action {
  readonly type = CheckoutActionTypes.ShowReviewViewAction;
}

export class PlaceOrder implements Action {
  readonly type = CheckoutActionTypes.PlaceOrderAction;
}

export class PlaceOrderSuccess implements Action {
  readonly type = CheckoutActionTypes.PlaceOrderSuccessAction;
}

export type CheckoutActions =
    | EnablePlaceOrderButton
    | ShowReviewView
    | PlaceOrder
    | PlaceOrderSuccess;
