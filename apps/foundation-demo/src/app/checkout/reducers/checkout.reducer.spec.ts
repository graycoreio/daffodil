import { initialState, reducer, getEnablePlaceOrderButton, getShowReviewView } from "../reducers/checkout.reducer";
import { EnablePlaceOrderButton, ShowReviewView } from "../actions/checkout.actions";

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
      let enablePlaceOrderButtonAction = new EnablePlaceOrderButton();
      
      result = reducer(initialState, enablePlaceOrderButtonAction);
    });

    it('sets enablePlaceOrderButtonAction to true', () => {
      expect(result.enablePlaceOrderButton).toBeTruthy();
    });
  });

  describe('when ShowReviewView action is triggered', () => {

    let result;

    beforeEach(() => {
      let showReviewViewAction = new ShowReviewView();
      
      result = reducer(initialState, showReviewViewAction);
    });

    it('sets showReviewView to true', () => {
      expect(result.showReviewView).toBeTruthy();
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
});
