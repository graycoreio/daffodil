import { initialState, reducer, getShowPaymentView } from "../reducers/payment.reducer";
import { ShowPaymentView } from "../actions/payment.actions";

describe('Checkout | Payment | Payment Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set showPaymentView to false', () => {
      expect(initialState.showPaymentView).toBeFalsy();
    });
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ShowPaymentView action is triggered', () => {

    let result;

    beforeEach(() => {
      let showPaymentViewAction = new ShowPaymentView();
      
      result = reducer(initialState, showPaymentViewAction);
    });

    it('sets showPaymentView to true', () => {
      expect(result.showPaymentView).toBeTruthy();
    });
  });

  describe('getShowPaymentView', () => {
    
    it('returns showPaymentView state', () => {
      expect(getShowPaymentView(initialState)).toEqual(initialState.showPaymentView);
    });
  });
});
