import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { UpdateShippingInfo, SelectShippingOption } from "../actions/shipping.actions";
import { initialState, reducer, getShippingInfo, getSelectedShippingOptionId, isShippingInfoValid, State } from "../reducers/shipping.reducer";

describe('Shipping | Shipping Reducer', () => {

  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
  let shippingInfo: DaffodilAddress;
  let selectedShippingOptionId: number;

  beforeEach(() => {
    shippingInfo = daffodilAddressFactory.create();
    selectedShippingOptionId = 0;
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
      let selectShippingOptionAction = new SelectShippingOption(selectedShippingOptionId);
      
      result = reducer(initialState, selectShippingOptionAction);
    });

    it('sets selectedShippingOptionId from action.payload', () => {
      expect(result.selectedShippingOptionId).toEqual(selectedShippingOptionId)
    });
  });

  describe('getShippingInfo', () => {
    
    it('returns shippingInfo state', () => {
      expect(getShippingInfo(initialState)).toEqual(initialState.shippingInfo);
    });
  });

  describe('getSelectedShippingOptionId', () => {
    
    it('returns selectedShippingOptionId state', () => {
      expect(getSelectedShippingOptionId(initialState)).toEqual(initialState.selectedShippingOptionId);
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
