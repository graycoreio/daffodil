import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { PaymentInfo } from '../../../models/payment/payment-info';
import { initialState, daffBillingReducer } from './billing.reducer';
import { DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffToggleBillingAddressIsShippingAddress } from '../../actions/billing.actions';

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

      const result = daffBillingReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffUpdateBillingAddress action is triggered', () => {

    let result;

    beforeEach(() => {
      const updateBillingAddressAction = new DaffUpdateBillingAddress(billingAddress);
      
      result = daffBillingReducer(initialState, updateBillingAddressAction);
    });

    it('sets billingAddress from action.payload', () => {
      expect(result.billingAddress).toEqual(billingAddress)
    });
  });

  describe('when DaffToggleBillingAddressIsShippingAddress action is triggered', () => {

    let initialBillingAddressIsShippingAddress;
    let result;

    beforeEach(() => {
      initialBillingAddressIsShippingAddress = initialState.billingAddressIsShippingAddress;
      const toggleBillingAddressIsShippingAddress = new DaffToggleBillingAddressIsShippingAddress();
      
      result = daffBillingReducer(initialState, toggleBillingAddressIsShippingAddress);
    });

    it('toggles billingAddressIsShippingAddress', () => {
      expect(result.billingAddressIsShippingAddress).toEqual(!initialBillingAddressIsShippingAddress)
    });

    it('sets billingAddress to null', () => {
      expect(result.billingAddress).toBeNull();
    });
  });

  describe('when DaffUpdatePaymentInfo action is triggered', () => {

    let result;

    beforeEach(() => {
      const updatePaymentInfoAction = new DaffUpdatePaymentInfo(paymentInfo);
      
      result = daffBillingReducer(initialState, updatePaymentInfoAction);
    });

    it('sets paymentInfo from action.payload', () => {
      expect(result.paymentInfo).toEqual(paymentInfo)
    });
  });
});
