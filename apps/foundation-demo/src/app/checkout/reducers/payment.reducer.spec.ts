import { initialState, reducer, getShowPaymentView, getShowPaymentForm } from "../reducers/payment.reducer";
import { ShowPaymentView, SetShowPaymentForm, ToggleShowPaymentForm } from "../actions/payment.actions";

describe('Checkout | Payment | Payment Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set showPaymentView to false', () => {
      expect(initialState.showPaymentView).toBeFalsy();
    });

    it('should set showPaymentForm to null', () => {
      expect(initialState.showPaymentForm).toBeNull();
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

  describe('when SetShowPaymentForm action is triggered', () => {

    let result;
    let showPaymentFormValue;

    beforeEach(() => {
      showPaymentFormValue = true;
      let showPaymentFormAction = new SetShowPaymentForm(showPaymentFormValue);
      
      result = reducer(initialState, showPaymentFormAction);
    });

    it('sets showPaymentView to true', () => {
      expect(result.showPaymentForm).toEqual(showPaymentFormValue);
    });
  });

  describe('when ToggleShowPaymentForm action is triggered', () => {

    let result;
    let showPaymentFormValue;

    beforeEach(() => {
      showPaymentFormValue = true;
      let showPaymentFormAction = new SetShowPaymentForm(showPaymentFormValue);
      result = reducer(initialState, showPaymentFormAction)
      let togglePaymentFormAction = new ToggleShowPaymentForm();
      
      result = reducer(result, togglePaymentFormAction);
    });

    it('sets showPaymentForm to true', () => {
      expect(result.showPaymentForm).toEqual(!showPaymentFormValue);
    });
  });

  describe('getShowPaymentView', () => {
    
    it('returns showPaymentView state', () => {
      expect(getShowPaymentView(initialState)).toEqual(initialState.showPaymentView);
    });
  });

  describe('getShowPaymentForm', () => {
    
    it('returns showPaymentForm state', () => {
      expect(getShowPaymentForm(initialState)).toEqual(initialState.showPaymentForm);
    });
  });
});
