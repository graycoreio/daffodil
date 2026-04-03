import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
  Action,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { identity } from '@daffodil/core';
import {
  DaffFailureAction,
  DaffStateError,
  InjectableActionMap,
} from '@daffodil/core/state';
import {
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DAFF_DOCS_STORE_FEATURE_KEY,
  DaffDocsActions,
  daffDocsEntitiesReducerFactory,
  DaffDocsLoadAction,
  DaffDocsLoadSuccessAction,
  daffDocsReducerFactory,
  DaffDocsStateRootSlice,
} from '@daffodil/docs/state';
import { DaffDocsItemFactory } from '@daffodil/docs/testing';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { getDaffDocsEntitySelectors } from './entities.selector';

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

describe('@daffodil/docs/state | getDaffDocsEntitySelectors', () => {
  let store: Store<DaffDocsStateRootSlice>;

  let docsItemFactory: DaffDocsItemFactory;

  let mockDocsItem: DaffDocsItem;
  let docsId: DaffDocsItem['id'];

  const {
    selectAllDocsEntities,
    selectDocsEntities,
    selectDocsIds,
    selectDocsTotal,
  } = getDaffDocsEntitySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot<DaffDocsStateRootSlice, Actions>({
          [DAFF_DOCS_STORE_FEATURE_KEY]: combineReducers({
            docs: daffDocsReducerFactory(actionMap),
            docsEntities: daffDocsEntitiesReducerFactory(actionMap),
          }),
        }),
      ],
    });

    store = TestBed.inject(Store);
    docsItemFactory = TestBed.inject(DaffDocsItemFactory);

    mockDocsItem = docsItemFactory.create();
    docsId = mockDocsItem.id;
  });

  describe('selectAllDocsEntities', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectAllDocsEntities));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an docs has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      });

      it('should select all of the docsEntities', () => {
        const selector = store.pipe(select(selectAllDocsEntities));
        const expected = cold('a', { a: [mockDocsItem]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectDocsEntities', () => {
    it('should initially be an empty object', () => {
      const selector = store.pipe(select(selectDocsEntities));
      const expected = cold('a', { a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when an docs has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      });

      it('should select all of the docsEntities', () => {
        const selector = store.pipe(select(selectDocsEntities));
        const expected = cold('a', { a: { [docsId]: mockDocsItem }});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectDocsIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectDocsIds));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an docs has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      });

      it('should select all of the docs IDs', () => {
        const selector = store.pipe(select(selectDocsIds));
        const expected = cold('a', { a: [docsId]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectDocsTotal', () => {
    it('should initially be 0', () => {
      const selector = store.pipe(select(selectDocsTotal));
      const expected = cold('a', { a: 0 });

      expect(selector).toBeObservable(expected);
    });

    describe('when an docs has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      });

      it('should select the total number of docsEntities', () => {
        const selector = store.pipe(select(selectDocsTotal));
        const expected = cold('a', { a: 1 });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
