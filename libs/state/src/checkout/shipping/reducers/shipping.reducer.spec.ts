import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { UpdateShippingAddress, SelectShippingOption } from "../actions/shipping.actions";
import { initialState, reducer, getShippingAddress, getSelectedShippingOptionIndex, isShippingAddressValid, State } from "../reducers/shipping.reducer";

describe('Shipping | Shipping Reducer', () => {

  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
  let shippingAddress: DaffodilAddress;
  let selectedShippingOptionId: string;

  beforeEach(() => {
    shippingAddress = daffodilAddressFactory.create();
    selectedShippingOptionId = '0';
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when UpdateShippingAddress action is triggered', () => {

    let result;

    beforeEach(() => {
      let updateShippingAddressAction = new UpdateShippingAddress(shippingAddress);
      
      result = reducer(initialState, updateShippingAddressAction);
    });

    it('sets shippingAddress from action.payload', () => {
      expect(result.shippingAddress).toEqual(shippingAddress)
    });
  });

  describe('when SelectShippingOption action is triggered', () => {

    let result;

    beforeEach(() => {
      let selectShippingOptionAction = new SelectShippingOption(selectedShippingOptionId);
      
      result = reducer(initialState, selectShippingOptionAction);
    });

    it('sets selectedShippingOptionId from action.payload', () => {
      expect(result.selectedShippingOptionId).toEqual(selectedShippingOptionId)
    });
  });

  describe('getShippingAddress', () => {
    
    it('returns shippingAddress state', () => {
      expect(getShippingAddress(initialState)).toEqual(initialState.shippingAddress);
    });
  });

  describe('getSelectedShippingOptionIndex', () => {
    
    it('returns selectedShippingOptionId state', () => {
      expect(getSelectedShippingOptionIndex(initialState)).toEqual(initialState.selectedShippingOptionId);
    });
  });

  describe('isShippingAddressValid', () => {

    describe('when shippingAddress is defined', () => {

      let result: State;

      beforeEach(() => {
        let updateShippingAddressAction = new UpdateShippingAddress(shippingAddress);

        result = reducer(initialState, updateShippingAddressAction);
      });
      
      it('should return true', () => {
        expect(isShippingAddressValid(result.shippingAddress)).toBeTruthy();
      });
    });
    
    describe('when shippingAddress is null', () => {
      
      let result: State;

      beforeEach(() => {
        let updateShippingAddressAction = new UpdateShippingAddress(null);

        result = reducer(initialState, updateShippingAddressAction);
      });

      it('should return false', () => {
        expect(isShippingAddressValid(result.shippingAddress)).toBeFalsy();
      });
    });
  });
});
