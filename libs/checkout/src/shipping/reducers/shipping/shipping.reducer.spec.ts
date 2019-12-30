import { TestBed, async } from '@angular/core/testing';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../../actions/shipping.actions';
import { initialState, daffShippingReducer } from './shipping.reducer';

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

      const result = daffShippingReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffUpdateShippingAddress action is triggered', () => {

    let result;

    beforeEach(() => {
      const updateShippingAddressAction = new DaffUpdateShippingAddress(shippingAddress);
      
      result = daffShippingReducer(initialState, updateShippingAddressAction);
    });

    it('sets shippingAddress from action.payload', () => {
      expect(result.shippingAddress).toEqual(shippingAddress)
    });
  });

  describe('when DaffSelectShippingOption action is triggered', () => {

    let result;

    beforeEach(() => {
      const selectShippingOptionAction = new DaffSelectShippingOption(selectedShippingOptionId);
      
      result = daffShippingReducer(initialState, selectShippingOptionAction);
    });

    it('sets selectedShippingOptionId from action.payload', () => {
      expect(result.selectedShippingOptionId).toEqual(selectedShippingOptionId)
    });
  });
});
