import { CheckoutActionTypes, CheckoutActions } from '../actions/checkout.actions';

export interface State {
  enablePlaceOrderButton: boolean,
  showReviewView: boolean,
  isOrderPlaced: boolean
}

export const initialState: State = {
  enablePlaceOrderButton: false,
  showReviewView: false,
  isOrderPlaced: false
};

export function reducer(state = initialState, action: CheckoutActions): State {
  switch (action.type) {
    case CheckoutActionTypes.EnablePlaceOrderButtonAction:
      return {...state, enablePlaceOrderButton: true};
    case CheckoutActionTypes.ShowReviewViewAction:
      return {...state, showReviewView: true};
    case CheckoutActionTypes.PlaceOrderAction:
      return {...state, isOrderPlaced: true};
    default:
      return state;
  }
}

export const getEnablePlaceOrderButton = (state: State) => state.enablePlaceOrderButton;

export const getShowReviewView = (state: State) => state.showReviewView;

export const getIsOrderPlaced = (state: State) => state.isOrderPlaced;
