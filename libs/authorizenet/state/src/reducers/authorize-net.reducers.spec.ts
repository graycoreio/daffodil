import { daffAuthorizeNetReducer } from '@daffodil/authorizenet/state';

import { daffAuthorizeNetReducers } from './authorize-net.reducers';

describe('daffAuthorizeNetReducers', () => {

  it('should return a reducer map with daffAuthorizeNetReducer', () => {
    expect(daffAuthorizeNetReducers.authorizeNet).toEqual(daffAuthorizeNetReducer);
  });
});
