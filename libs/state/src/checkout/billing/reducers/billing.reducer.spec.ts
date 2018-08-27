import { DaffodilAddress, DaffodilAddressFactory, PaymentInfo } from '@daffodil/core';
import { BillingFactory } from '@daffodil/core/testing';

import { initialState, reducer, getBillingAddress, getPaymentInfo, getBillingAddressIsShippingAddress } from "../reducers/billing.reducer";
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from "../actions/billing.actions";

describe('Billing | Billing Reducer', () => {

  let daffodilAddressFactory: DaffodilAddressFactory;
  let billingAddress: DaffodilAddress;
  let paymentFactory: BillingFactory;
  let paymentInfo: PaymentInfo;

  beforeEach(() => {
    daffodilAddressFactory = new DaffodilAddressFactory();
    paymentFactory = new BillingFactory();

    billingAddress = daffodilAddressFactory.create();
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
      let updateBillingAddressAction = new UpdateBillingAddress(billingAddress);
      
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
      let toggleBillingAddressIsShippingAddress = new ToggleBillingAddressIsShippingAddress();
      
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
      let updatePaymentInfoAction = new UpdatePaymentInfo(paymentInfo);
      
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
