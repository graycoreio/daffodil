import { TestBed } from '@angular/core/testing';
import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { identity } from '@daffodil/core';
import {
  DaffFailureAction,
  DaffStateError,
  InjectableActionMap,
} from '@daffodil/core/state';
import {
  daffDocsEntitiesInitialState as initialState,
  DaffDocsLoadAction,
  DaffDocsLoadSuccessAction,
  DaffDocsEntityState,
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
} from '@daffodil/docs/state';
import { DaffDocsItemFactory } from '@daffodil/docs/testing';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { daffDocsEntitiesReducerFactory as reducerFactory } from './entities.reducer';

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

describe('@daffodil/docs/state | daffDocsEntitiesReducerFactory', () => {
  let docsItemFactory: DaffDocsItemFactory;
  let mockDocsItem: DaffDocsItem;
  let docsId: DaffDocsItem['id'];
  let reducer: ActionReducer<DaffDocsEntityState, Actions>;
  let result: DaffDocsEntityState;

  beforeEach(() => {
    reducer = reducerFactory(actionMap);
    docsItemFactory = TestBed.inject(DaffDocsItemFactory);

    mockDocsItem = docsItemFactory.create();
    docsId = mockDocsItem.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when the success action is triggered', () => {
    beforeEach(() => {
      const docsLoadSuccess = new MockLoadSuccessAction([mockDocsItem]);

      result = reducer(initialState, docsLoadSuccess);
    });

    it('should set docs from action.payload', () => {
      expect(result.entities[docsId]).toEqual(mockDocsItem);
    });
  });
});
