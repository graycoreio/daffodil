import { PaymentInfo } from '../models/payment-info';
import { PaymentFactory } from "../testing/factories/payment.factory";
import { initialState, reducer, getPaymentInfo, State } from "../reducers/payment.reducer";
import { UpdatePaymentInfo } from "../actions/payment.actions";

describe('Payment | Payment Reducer', () => {

  let paymentFactory: PaymentFactory;
  let paymentInfo: PaymentInfo;

  beforeEach(() => {
    paymentFactory = new PaymentFactory();

    paymentInfo = paymentFactory.create();
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
