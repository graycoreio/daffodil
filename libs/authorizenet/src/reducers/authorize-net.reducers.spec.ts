import { authorizeNetReducers } from './authorize-net.reducers';
import { authorizeNetReducer } from './authorize-net/authorize-net.reducer';


describe('authorizeNetReducers', () => {

  it('should return a reducer map with authorizeNetReducer', () => {
    expect(authorizeNetReducers.authorizeNet).toEqual(authorizeNetReducer);
  });
});
