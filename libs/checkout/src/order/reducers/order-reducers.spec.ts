import { daffOrderReducers } from './order-reducers';
import { daffOrderReducer } from './order/order.reducer';

describe('daffOrderReducers', () => {

  it('should return a reducer map with daffOrderReducer', () => {
    expect(daffOrderReducers.order).toEqual(daffOrderReducer);
  });
});
