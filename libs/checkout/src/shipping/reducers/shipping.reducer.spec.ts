import { TestBed, async } from "@angular/core/testing";

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { UpdateShippingAddress, SelectShippingOption } from "../actions/shipping.actions";
import { initialState, reducer, getShippingAddress, getSelectedShippingOptionIndex, isShippingAddressValid, State } from "../reducers/shipping.reducer";

describe('Shipping | Shipping Reducer', () => {

  let addressFactory: DaffAddressFactory;
  let shippingAddress: DaffAddress;
  let selectedShippingOptionId: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});

    addressFactory = TestBed.get(DaffAddressFactory);
    shippingAddress = addressFactory.create();
    selectedShippingOptionId = '0';
  }));

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
      const updateShippingAddressAction = new UpdateShippingAddress(shippingAddress);
      
      result = reducer(initialState, updateShippingAddressAction);
    });

    it('sets shippingAddress from action.payload', () => {
      expect(result.shippingAddress).toEqual(shippingAddress)
    });
  });

  describe('when SelectShippingOption action is triggered', () => {

    let result;

    beforeEach(() => {
      const selectShippingOptionAction = new SelectShippingOption(selectedShippingOptionId);
      
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
        const updateShippingAddressAction = new UpdateShippingAddress(shippingAddress);

        result = reducer(initialState, updateShippingAddressAction);
      });
      
      it('should return true', () => {
        expect(isShippingAddressValid(result.shippingAddress)).toBeTruthy();
      });
    });
    
    describe('when shippingAddress is null', () => {
      
      let result: State;

      beforeEach(() => {
        const updateShippingAddressAction = new UpdateShippingAddress(null);

        result = reducer(initialState, updateShippingAddressAction);
      });

      it('should return false', () => {
        expect(isShippingAddressValid(result.shippingAddress)).toBeFalsy();
      });
    });
  });
});
