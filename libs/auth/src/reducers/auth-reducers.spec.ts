import { authReducers } from './auth-reducers';
import { reducer } from './auth/auth.reducer';

describe('selectAuthState', () => {

  it('should return a reducer map with AuthReducer', () => {
    expect(authReducers.auth).toEqual(reducer);
  });
});
