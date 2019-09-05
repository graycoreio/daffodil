import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffNavigationTree } from '../../models/navigation-tree';
import { NavigationReducerState } from './navigation-reducer-state.interface';
import { DaffNavigationLoad, DaffNavigationLoadSuccess, DaffNavigationLoadFailure } from '../../actions/navigation.actions';
import { reducer } from './navigation.reducer';

describe('Navigation | Navigation Reducer', () => {

  let navigationTreeFactory: DaffNavigationTreeFactory;
  let navigation: DaffNavigationTree;
  let navigationId: string;
  const initialState: NavigationReducerState = {
    navigationTree: null,
    loading: false,
    errors: []
  }

  beforeEach(() => {
    navigationTreeFactory = new DaffNavigationTreeFactory();

    navigation = navigationTreeFactory.create();
    navigationId = navigation.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when NavigationLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const navigationLoadAction: DaffNavigationLoad = new DaffNavigationLoad(parseInt(navigationId, 10));

      result = reducer(initialState, navigationLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when NavigationLoadSuccessAction is triggered', () => {

    let result;
    let state: NavigationReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const navigationLoadSuccess = new DaffNavigationLoadSuccess(navigation);
      result = reducer(state, navigationLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets navigation to the payload', () => {
      expect(result.navigationTree).toEqual(navigation);
    });
  });

  describe('when NavigationLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: NavigationReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const navigationLoadFailure = new DaffNavigationLoadFailure(error);

      result = reducer(state, navigationLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
