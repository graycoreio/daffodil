import { daffPaymentReducers } from './payment-reducers';
import { daffPaymentReducer } from './payment/payment.reducer';

describe('selectPaymentState', () => {

  it('should return a reducer map with DaffPaymentReducer', () => {
    expect(daffPaymentReducers.payment).toEqual(daffPaymentReducer);
  });
});
