import { daffBillingReducer } from './billing/billing.reducer';
import { daffBillingReducers } from './billing-reducers';

describe('daffBillingReducers', () => {

  it('should return a reducer map with DaffBillingReducer', () => {
    expect(daffBillingReducers.billing).toEqual(daffBillingReducer);
  });
});
