import { daffPaymentReducer } from './payment/payment.reducer';
import { daffPaymentReducers } from './payment-reducers';

describe('selectPaymentState', () => {

  it('should return a reducer map with DaffPaymentReducer', () => {
    expect(daffPaymentReducers.payment).toEqual(daffPaymentReducer);
  });
});
