import { navigationReducers } from './navigation-reducers';
import { reducer } from './navigation/navigation.reducer';

describe('selectNavigationState', () => {

  it('should return a reducer map with NavigationReducer', () => {
    expect(navigationReducers.navigation).toEqual(reducer);
  });
});
