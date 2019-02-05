import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  EnablePlaceOrderButtonAction = "[Demo-Checkout] Enable Place Order Button Action",
  ShowReviewViewAction = "[Demo-Checkout] Show Review View Action",
  PlaceOrderAction = "[Demo-Checkout] Place Order Action",
  PlaceOrderSuccessAction = "[Demo-Checkout] Place Order Success Action"
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
