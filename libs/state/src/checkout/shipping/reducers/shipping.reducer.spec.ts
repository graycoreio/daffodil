import { ShippingAddress, ShippingFactory } from '@daffodil/core';
import { initialState, reducer, getShippingInfo, getSelectedShippingOption, isShippingInfoValid, State } from "../reducers/shipping.reducer";
import { UpdateShippingInfo, SelectShippingOption } from "../actions/shipping.actions";


describe('Shipping | Shipping Reducer', () => {

  let shippingFactory: ShippingFactory;
  let shippingInfo: ShippingAddress;
  let selectedShippingOption: string;

  beforeEach(() => {
    shippingFactory = new ShippingFactory();

    shippingInfo = shippingFactory.createShippingAddress();
    selectedShippingOption = 'selectedShippingOption';
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when UpdateShippingInfo action is triggered', () => {

    let result;

    beforeEach(() => {
      let updateShippingInfoAction = new UpdateShippingInfo(shippingInfo);
      
      result = reducer(initialState, updateShippingInfoAction);
    });

    it('sets shippingInfo from action.payload', () => {
      expect(result.shippingInfo).toEqual(shippingInfo)
    });
  });

  describe('when SelectShippingOption action is triggered', () => {

    let result;

    beforeEach(() => {
      let selectShippingOptionAction = new SelectShippingOption(selectedShippingOption);
      
      result = reducer(initialState, selectShippingOptionAction);
    });

    it('sets selectedShippingOption from action.payload', () => {
      expect(result.selectedShippingOption).toEqual(selectedShippingOption)
    });
  });

  describe('getShippingInfo', () => {
    
    it('returns shippingInfo state', () => {
      expect(getShippingInfo(initialState)).toEqual(initialState.shippingInfo);
    });
  });

  describe('getSelectedShippingOption', () => {
    
    it('returns selectedShippingOption state', () => {
      expect(getSelectedShippingOption(initialState)).toEqual(initialState.selectedShippingOption);
    });
  });

  describe('isShippingInfoValid', () => {

    describe('when shippingInfo is defined', () => {

      let result: State;

      beforeEach(() => {
        let updateShippingInfoAction = new UpdateShippingInfo(shippingInfo);

        result = reducer(initialState, updateShippingInfoAction);
      });
      
      it('should return true', () => {
        expect(isShippingInfoValid(result.shippingInfo)).toBeTruthy();
      });
    });
    
    describe('when shippingInfo is null', () => {
      
      let result: State;

      beforeEach(() => {
        let updateShippingInfoAction = new UpdateShippingInfo(null);

        result = reducer(initialState, updateShippingInfoAction);
      });

      it('should return false', () => {
        expect(isShippingInfoValid(result.shippingInfo)).toBeFalsy();
      });
    });
  });
});
