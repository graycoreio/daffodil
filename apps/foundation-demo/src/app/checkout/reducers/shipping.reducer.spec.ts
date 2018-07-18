import { initialState, reducer, getShowShippingForm } from "../reducers/shipping.reducer";
import { ToggleShippingForm, SetShowShippingForm } from "../actions/shipping.actions";


describe('Checkout | Shipping | Shipping Reducer', () => {

  let stubShowShippingForm;

  beforeEach(() => {
    stubShowShippingForm = true;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SetShowShippingForm action is triggered', () => {

    let result;

    beforeEach(() => {
      let setShowShippingFormAction = new SetShowShippingForm(stubShowShippingForm);
      
      result = reducer(initialState, setShowShippingFormAction);
    });

    it('sets showShippingForm from action.payload', () => {
      expect(result.showShippingForm).toEqual(stubShowShippingForm);
    });
  });

  describe('when ToggleShippingForm action is triggered', () => {

    let result;

    beforeEach(() => {
      let setShowShippingFormAction = new SetShowShippingForm(false);
      reducer(initialState, setShowShippingFormAction);
      
      let toggleShippingFormAction = new ToggleShippingForm();
      
      result = reducer(initialState, toggleShippingFormAction);
    });

    it('sets selectedShippingOption from action.payload', () => {
      expect(result.showShippingForm).toEqual(true);
    });
  });

  describe('getShowShippingForm', () => {
    
    it('returns showShippingForm state', () => {
      expect(getShowShippingForm(initialState)).toEqual(initialState.showShippingForm);
    });
  });
});
