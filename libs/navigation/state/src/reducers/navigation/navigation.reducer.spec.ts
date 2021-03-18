import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationLoad,
  DaffNavigationLoadSuccess,
  DaffNavigationLoadFailure,
  DaffNavigationReducerState,
} from '@daffodil/navigation/state';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { daffNavigationReducer } from './navigation.reducer';

describe('Navigation | Navigation Reducer', () => {

  let navigationTreeFactory: DaffNavigationTreeFactory;
  let navigation: DaffNavigationTree;
  let navigationId: string;
  const initialState: DaffNavigationReducerState<DaffNavigationTree> = {
    navigationTree: null,
    loading: false,
    errors: [],
  };

  beforeEach(() => {
    navigationTreeFactory = new DaffNavigationTreeFactory();

    navigation = navigationTreeFactory.create();
    navigationId = navigation.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffNavigationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when NavigationLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const navigationLoadAction: DaffNavigationLoad = new DaffNavigationLoad(navigationId);

      result = daffNavigationReducer(initialState, navigationLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when NavigationLoadSuccessAction is triggered', () => {

    let result;
    let state: DaffNavigationReducerState<DaffNavigationTree>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      };

      const navigationLoadSuccess = new DaffNavigationLoadSuccess(navigation);
      result = daffNavigationReducer(state, navigationLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets navigation to the payload', () => {
      expect(result.navigationTree).toEqual(navigation);
    });
  });

  describe('when NavigationLoadFailureAction is triggered', () => {
    const error = { code: 'code', message: 'error message' };
    let result;
    let state: DaffNavigationReducerState<DaffNavigationTree>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const navigationLoadFailure = new DaffNavigationLoadFailure(error);

      result = daffNavigationReducer(state, navigationLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
