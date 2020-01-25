import { daffPaypalReducers } from './paypal-reducers';
import { daffPaypalReducer } from './paypal/paypal.reducer';

describe('daffPaypalReducers', () => {

  it('should return a reducer map with DaffPaypalReducerState', () => {
    expect(daffPaypalReducers().paypal).toEqual(daffPaypalReducer);
  });
});
