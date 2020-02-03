import { daffAuthorizeNetReducers } from './authorize-net.reducers';
import { daffAuthorizeNetReducer } from './authorize-net/authorize-net.reducer';

describe('daffAuthorizeNetReducers', () => {

  it('should return a reducer map with daffAuthorizeNetReducer', () => {
    expect(daffAuthorizeNetReducers().authorizeNet).toEqual(daffAuthorizeNetReducer);
  });
});
