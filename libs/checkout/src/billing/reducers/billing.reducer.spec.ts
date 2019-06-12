import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { PaymentInfo } from '@daffodil/checkout';

import { DaffPaymentFactory } from '../../../testing/src';
import { initialState, reducer, getBillingAddress, getPaymentInfo, getBillingAddressIsShippingAddress } from "../reducers/billing.reducer";
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from "../actions/billing.actions";

describe('Billing | Billing Reducer', () => {

  let addressFactory: DaffAddressFactory;
  let billingAddress: DaffAddress;
  let paymentFactory: DaffPaymentFactory;
  let paymentInfo: PaymentInfo;

  beforeEach(() => {
    addressFactory = new DaffAddressFactory();
    paymentFactory = new DaffPaymentFactory();

    billingAddress = addressFactory.create();
    paymentInfo = paymentFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when UpdateBillingAddress action is triggered', () => {

    let result;

    beforeEach(() => {
      const updateBillingAddressAction = new UpdateBillingAddress(billingAddress);
      
      result = reducer(initialState, updateBillingAddressAction);
    });

    it('sets billingAddress from action.payload', () => {
      expect(result.billingAddress).toEqual(billingAddress)
    });
  });

  describe('when ToggleBillingAddressIsShippingAddress action is triggered', () => {

    let initialBillingAddressIsShippingAddress;
    let result;

    beforeEach(() => {
      initialBillingAddressIsShippingAddress = initialState.billingAddressIsShippingAddress;
      const toggleBillingAddressIsShippingAddress = new ToggleBillingAddressIsShippingAddress();
      
      result = reducer(initialState, toggleBillingAddressIsShippingAddress);
    });

    it('toggles billingAddressIsShippingAddress', () => {
      expect(result.billingAddressIsShippingAddress).toEqual(!initialBillingAddressIsShippingAddress)
    });

    it('sets billingAddress to null', () => {
      expect(result.billingAddress).toBeNull();
    });
  });

  describe('when UpdatePaymentInfo action is triggered', () => {

    let result;

    beforeEach(() => {
      const updatePaymentInfoAction = new UpdatePaymentInfo(paymentInfo);
      
      result = reducer(initialState, updatePaymentInfoAction);
    });

    it('sets paymentInfo from action.payload', () => {
      expect(result.paymentInfo).toEqual(paymentInfo)
    });
  });

  describe('getBillingAddress', () => {
    
    it('returns billingAddress state', () => {
      expect(getBillingAddress(initialState)).toEqual(initialState.billingAddress);
    });
  });

  describe('getBillingAddressIsShippingAddress', () => {
    
    it('returns billingAddressIsShippingAddress state', () => {
      expect(getBillingAddressIsShippingAddress(initialState)).toEqual(initialState.billingAddressIsShippingAddress);
    });
  });

  describe('getPaymentInfo', () => {
    
    it('returns paymentInfo state', () => {
      expect(getPaymentInfo(initialState)).toEqual(initialState.paymentInfo);
    });
  });
});
