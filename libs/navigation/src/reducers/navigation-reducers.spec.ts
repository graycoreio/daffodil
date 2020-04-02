import { daffNavigationReducers } from './navigation-reducers';
import { daffNavigationReducer } from './navigation/navigation.reducer';

describe('selectNavigationState', () => {

  it('should return a reducer map with NavigationReducer', () => {
    expect(daffNavigationReducers().navigation).toEqual(daffNavigationReducer);
  });
});
