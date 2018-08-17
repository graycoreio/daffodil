import { PaymentInfo, BillingFactory } from '@daffodil/core';

import { UpdatePaymentInfo } from "../actions/payment.actions";
import { initialState, reducer, getPaymentInfo } from "../reducers/payment.reducer";

describe('Payment | Payment Reducer', () => {

  let billingFactory: BillingFactory;
  let paymentInfo: PaymentInfo;

  beforeEach(() => {
    billingFactory = new BillingFactory();

    paymentInfo = billingFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
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

  describe('getPaymentInfo', () => {
    
    it('returns paymentInfo state', () => {
      expect(getPaymentInfo(initialState)).toEqual(initialState.paymentInfo);
    });
  });
});
