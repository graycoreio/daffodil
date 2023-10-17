import { daffShippingReducer } from './shipping/shipping.reducer';
import { daffShippingReducers } from './shipping-reducers';

describe('daffShippingReducers', () => {

  it('should return a reducer map with daffShippingReducer', () => {
    expect(daffShippingReducers.shipping).toEqual(daffShippingReducer);
  });
});
