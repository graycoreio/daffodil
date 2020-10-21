import { daffOrderReducer } from './order/order.reducer';
import { daffOrderReducers } from './order-reducers';
import { daffOrderEntitiesReducer } from './order-entities/public_api';

describe('daffOrderReducers', () => {

  it('should return a reducer map with daffOrderReducer', () => {
    expect(daffOrderReducers.order).toEqual(daffOrderReducer);
  });

  it('should return a reducer map with daffOrderEntitiesReducer', () => {
    expect(daffOrderReducers.orders).toEqual(daffOrderEntitiesReducer);
  });
});
