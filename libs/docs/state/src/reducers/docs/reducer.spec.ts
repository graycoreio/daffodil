import { TestBed } from '@angular/core/testing';
import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { identity } from '@daffodil/core';
import {
  DaffFailureAction,
  DaffState,
  DaffStateError,
  InjectableActionMap,
} from '@daffodil/core/state';
import {
  daffDocsInitialState as initialState,
  DaffDocsReducerState,
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
  DaffDocsLoadAction,
  DaffDocsLoadSuccessAction,
} from '@daffodil/docs/state';
import { DaffDocsItemFactory } from '@daffodil/docs/testing';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { daffDocsReducerFactory as reducerFactory } from './reducer';

class MockLoadAction implements DaffDocsLoadAction, Action {
  readonly type = 'mockLoad';
  constructor(public docsId: string) {}
}

class MockLoadSuccessAction implements DaffDocsLoadSuccessAction, Action {
  readonly type = 'mockLoadSuccess';
  constructor(public payload: Array<DaffDocsItem>) {}
}

class MockLoadFailureAction implements DaffFailureAction, Action {
  readonly type = 'mockLoadFailure';
  constructor(public payload: Array<DaffStateError>) {}
}

type Actions = MockLoadAction | MockLoadSuccessAction | MockLoadFailureAction;

const actionMap: InjectableActionMap<DaffDocsActions, Actions> = {
  [DAFF_DOCS_LOAD]: {
    mockLoad: { type: 'mockLoad', transform: identity },
  },
  [DAFF_DOCS_LOAD_SUCCESS]: {
    mockLoadSuccess: { type: 'mockLoadSuccess', transform: identity },
  },
  [DAFF_DOCS_LOAD_FAILURE]: {
    mockLoadFailure: { type: 'mockLoadFailure', transform: identity },
  },
};

describe('@daffodil/docs/state | daffDocsReducer', () => {
  let docsItemFactory: DaffDocsItemFactory;
  let mockDocsItem: DaffDocsItem;
  let reducer: ActionReducer<DaffDocsReducerState, Actions>;

  beforeEach(() => {
    docsItemFactory = TestBed.inject(DaffDocsItemFactory);

    reducer = reducerFactory(actionMap);
    mockDocsItem = docsItemFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DocsLoadAction is triggered', () => {
    it('sets loading state to true', () => {
      const docsLoadAction = new MockLoadAction('MockcsId');

      const result = reducer(initialState, docsLoadAction);

      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when DocsLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffDocsReducerState;
    let state: DaffDocsReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [mockError],
      };

      const docsLoadSuccess = new MockLoadSuccessAction([mockDocsItem]);

      result = reducer(state, docsLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when DocsLoadFailureAction is triggered', () => {
    let result: DaffDocsReducerState;
    let state: DaffDocsReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const docsLoadFailureAction = new MockLoadFailureAction([mockError]);

      result = reducer(state, docsLoadFailureAction);
    });

    it('adds the error in action.payload to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([mockError]);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });
});
