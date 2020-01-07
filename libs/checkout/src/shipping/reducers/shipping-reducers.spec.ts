import { daffShippingReducers } from './shipping-reducers';
import { daffShippingReducer } from './shipping/shipping.reducer';

describe('daffShippingReducers', () => {

  it('should return a reducer map with daffShippingReducer', () => {
    expect(daffShippingReducers.shipping).toEqual(daffShippingReducer);
  });
});
