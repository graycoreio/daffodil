import { daffOrderReducer } from './order/order.reducer';
import { daffOrderReducers } from './order-reducers';

describe('daffOrderReducers', () => {

  it('should return a reducer map with daffOrderReducer', () => {
    expect(daffOrderReducers.order).toEqual(daffOrderReducer);
  });
});
