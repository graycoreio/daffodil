import { initialState, reducer, getShowPaymentView, getShowPaymentForm } from "../reducers/payment.reducer";
import { ShowPaymentView, ShowPaymentForm, ToggleShowPaymentForm, HidePaymentForm } from "../actions/payment.actions";

describe('Checkout | Payment Reducer', () => {
  
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
      const showPaymentViewAction = new ShowPaymentView();
      
      result = reducer(initialState, showPaymentViewAction);
    });

    it('sets showPaymentView to true', () => {
      expect(result.showPaymentView).toBeTruthy();
    });
  });

  describe('when ShowPaymentForm action is triggered', () => {

    let result;

    beforeEach(() => {
      const showPaymentFormAction = new ShowPaymentForm();
      
      result = reducer(initialState, showPaymentFormAction);
    });

    it('sets showPaymentForm to true', () => {
      expect(result.showPaymentForm).toEqual(true);
    });
  });

  describe('when HidePaymentForm action is triggered', () => {

    let result;

    beforeEach(() => {
      const hidePaymentFormAction = new HidePaymentForm();
      
      result = reducer(initialState, hidePaymentFormAction);
    });

    it('sets showPaymentForm to false', () => {
      expect(result.showPaymentForm).toEqual(false);
    });
  });

  describe('when ToggleShowPaymentForm action is triggered', () => {

    let result;
    let showPaymentFormValue;

    beforeEach(() => {
      showPaymentFormValue = true;
      const showPaymentFormAction = new ShowPaymentForm();
      result = reducer(initialState, showPaymentFormAction)
      const togglePaymentFormAction = new ToggleShowPaymentForm();
      
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
