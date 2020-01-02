import { PaymentInfo } from '../../../models/payment/payment-info';
import { DaffPaymentFactory } from '../../../../testing/src';
import { DaffUpdatePaymentInfo } from '../../actions/payment.actions';
import { initialState, daffPaymentReducer } from './payment.reducer';

describe('Payment | Payment Reducer', () => {

  let paymentFactory: DaffPaymentFactory;
  let paymentInfo: PaymentInfo;

  beforeEach(() => {
    paymentFactory = new DaffPaymentFactory();

    paymentInfo = paymentFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffPaymentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffUpdatePaymentInfo action is triggered', () => {

    let result;

    beforeEach(() => {
      const updatePaymentInfoAction = new DaffUpdatePaymentInfo(paymentInfo);
      
      result = daffPaymentReducer(initialState, updatePaymentInfoAction);
    });

    it('sets paymentInfo from action.payload', () => {
      expect(result.paymentInfo).toEqual(paymentInfo)
    });
  });
});
