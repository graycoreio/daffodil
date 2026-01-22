import { TestBed } from '@angular/core/testing';
import {
  Action,
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { identity } from 'rxjs';

import {
  DaffFailureAction,
  DaffStateError,
  InjectableActionMap,
} from '@daffodil/core/state';
import {
  DaffDocsStateRootSlice,
  DAFF_DOCS_STORE_FEATURE_KEY,
  DaffDocsLoadAction,
  DaffDocsLoadSuccessAction,
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
  daffDocsReducerFactory,
  daffDocsEntitiesReducerFactory,
} from '@daffodil/docs/state';
import { DaffDocsItemFactory } from '@daffodil/docs/testing';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { DaffDocsFacade } from './facade';

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

describe('@daffodil/docs | DaffDocsFacade', () => {
  let store: Store<DaffDocsStateRootSlice>;
  let facade: DaffDocsFacade;
  let docsFactory: DaffDocsItemFactory;

  let mockDocsItem: DaffDocsItem;
  let docsId: DaffDocsItem['id'];
  let errors: string[];

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
      providers: [
        DaffDocsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffDocsFacade);
    docsFactory = TestBed.inject(DaffDocsItemFactory);

    mockDocsItem = docsFactory.create();
    docsId = mockDocsItem.id;
    errors = [];
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the docs is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the docs is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new MockLoadAction(docsId));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed load', () => {
      const error: DaffStateError = { code: 'code', recoverable: false, message: 'message' };
      const expected = cold('a', { a: [error]});
      store.dispatch(new MockLoadFailureAction([error]));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('docsItems$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.docsItems$).toBeObservable(expected);
    });

    it('should be the docsItems upon a successful load', () => {
      const expected = cold('a', { a: [mockDocsItem]});
      store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      expect(facade.docsItems$).toBeObservable(expected);
    });
  });

  describe('docsEntities$', () => {
    it('should initially be an empty dict', () => {
      const expected = cold('a', { a: {}});
      expect(facade.docsEntities$).toBeObservable(expected);
    });

    it('should be the docsEntities upon a successful load', () => {
      const expected = cold('a', { a: { [docsId]: mockDocsItem }});
      store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      expect(facade.docsEntities$).toBeObservable(expected);
    });
  });

  describe('docsIds$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.docsIds$).toBeObservable(expected);
    });

    it('should contain the docs id upon a successful docs load', () => {
      const expected = cold('a', { a: [docsId]});
      store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      expect(facade.docsIds$).toBeObservable(expected);
    });
  });

  describe('docsCount$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.docsCount$).toBeObservable(expected);
    });

    it('should be one upon a successful docs load', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      expect(facade.docsCount$).toBeObservable(expected);
    });
  });

  describe('getDocs$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getDocs$(docsId)).toBeObservable(expected);
    });

    describe('when an docs has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new MockLoadSuccessAction([mockDocsItem]));
      });

      it('should select the docs', () => {
        const expected = cold('a', { a: mockDocsItem });

        expect(facade.getDocs$(docsId)).toBeObservable(expected);
      });
    });
  });
});
