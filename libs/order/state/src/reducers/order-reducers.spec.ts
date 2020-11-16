import { daffOrderReducer, daffOrderEntitiesReducer } from '@daffodil/order/state';

import { daffOrderReducers } from './order-reducers';

describe('daffOrderReducers', () => {

  it('should return a reducer map with daffOrderReducer', () => {
    expect(daffOrderReducers.order).toEqual(daffOrderReducer);
  });

  it('should return a reducer map with daffOrderEntitiesReducer', () => {
    expect(daffOrderReducers.orders).toEqual(daffOrderEntitiesReducer);
  });
});
