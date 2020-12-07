import { daffNavigationReducer } from '@daffodil/navigation/state';

import { daffNavigationReducers } from './navigation-reducers';

describe('selectNavigationState', () => {

  it('should return a reducer map with NavigationReducer', () => {
    expect(daffNavigationReducers.navigation).toEqual(daffNavigationReducer);
  });
});
