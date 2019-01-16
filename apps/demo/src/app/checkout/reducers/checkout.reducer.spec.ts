import { initialState, reducer, getEnablePlaceOrderButton, getShowReviewView, getIsOrderPlaced } from "../reducers/checkout.reducer";
import { EnablePlaceOrderButton, ShowReviewView, PlaceOrder } from "../actions/checkout.actions";

describe('Checkout | Checkout Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set enablePlaceOrderButton to false', () => {
      expect(initialState.enablePlaceOrderButton).toBeFalsy();
    });
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when EnablePlaceOrderButton action is triggered', () => {

    let result;

    beforeEach(() => {
      const enablePlaceOrderButtonAction = new EnablePlaceOrderButton();
      
      result = reducer(initialState, enablePlaceOrderButtonAction);
    });

    it('sets enablePlaceOrderButtonAction to true', () => {
      expect(result.enablePlaceOrderButton).toBeTruthy();
    });
  });

  describe('when ShowReviewView action is triggered', () => {

    let result;

    beforeEach(() => {
      const showReviewViewAction = new ShowReviewView();
      
      result = reducer(initialState, showReviewViewAction);
    });

    it('sets showReviewView to true', () => {
      expect(result.showReviewView).toBeTruthy();
    });
  });

  describe('when PlaceOrder action is triggered', () => {

    let result;

    beforeEach(() => {
      const placeOrderAction = new PlaceOrder();
      
      result = reducer(initialState, placeOrderAction);
    });

    it('sets isOrderPlaced to true', () => {
      expect(result.isOrderPlaced).toBeTruthy();
    });
  });

  describe('getEnablePlaceOrderButton', () => {
    
    it('returns enablePlaceOrderButton state', () => {
      expect(getEnablePlaceOrderButton(initialState)).toEqual(initialState.enablePlaceOrderButton);
    });
  });

  describe('getShowReviewView', () => {
    
    it('returns showReviewView state', () => {
      expect(getShowReviewView(initialState)).toEqual(initialState.showReviewView);
    });
  });

  describe('getIsOrderPlaced', () => {
    
    it('returns isOrderPlaced state', () => {
      expect(getIsOrderPlaced(initialState)).toEqual(initialState.isOrderPlaced);
    });
  });
});
