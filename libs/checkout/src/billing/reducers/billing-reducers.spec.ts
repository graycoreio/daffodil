import { daffBillingReducers } from './billing-reducers';
import { daffBillingReducer } from './billing/billing.reducer';

describe('daffBillingReducers', () => {

  it('should return a reducer map with DaffBillingReducer', () => {
    expect(daffBillingReducers.billing).toEqual(daffBillingReducer);
  });
});
