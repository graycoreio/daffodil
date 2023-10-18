import { daffPaypalReducer } from './paypal/paypal.reducer';
import { daffPaypalReducers } from './paypal-reducers';

describe('daffPaypalReducers', () => {

  it('should return a reducer map with DaffPaypalReducerState', () => {
    expect(daffPaypalReducers.paypal).toEqual(daffPaypalReducer);
  });
});
